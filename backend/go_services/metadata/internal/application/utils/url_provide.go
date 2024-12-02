package utils

import (
	"os"
)

func GetURL(objectName string) string {
	if objectName == "" {
		return ""
	}
	awsDistributionName := os.Getenv("AWS_DISTRIBUTION_NAME")
	return "https://" + awsDistributionName + "/" + objectName
}
