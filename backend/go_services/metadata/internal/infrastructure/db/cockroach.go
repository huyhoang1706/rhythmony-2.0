package db

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"rhythmony.com/metadata/internal/domain/entities"
)

func NewCockRoachConnection() (*gorm.DB, error) {
	dsn := os.Getenv("DB_CONNECTION_STR")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatalf("Error while connect db: %v", err)
		return nil, err
	}
	_ = db.SetupJoinTable(&entities.Album{}, "Tracks", &entities.AlbumTrack{})

	sqlDB, err := db.DB()
	if err != nil {
		log.Fatalf("Error while getting SQL DB: %v", err)
		return nil, err
	}

	sqlDB.SetMaxOpenConns(100) // Maximum number of open connections
	sqlDB.SetMaxIdleConns(10)  // Maximum number of idle connections

	return db, nil
}
