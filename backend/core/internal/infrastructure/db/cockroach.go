package db

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"os"
)

func NewCockRoachConnection() (*gorm.DB, error) {
	dsn := os.Getenv("DB_CONNECTION_STR")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Error while connect db: %v", err)
		return nil, err
	}
	return db, nil
}
