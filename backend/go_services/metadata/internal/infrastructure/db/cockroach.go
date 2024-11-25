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
	return db, nil
}
