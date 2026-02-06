pipeline {
    agent any

    environment {
        IMAGE_NAME = "job-portal"
        CONTAINER_NAME = "jobportal-container"
    }

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Docker') {
            steps {
                bat 'docker --version'
            }
        }

         stage('Stop Existing Containers') {
            steps {
                bat 'docker compose down || true'
            }
        }


     stage('Build Containers') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }
    }
}
