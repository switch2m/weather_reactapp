pipeline {
    agent any
    stages {
        stage('npm install') {
            steps {
                echo 'installing packages'
                sh 'npm install'
            }
        }
        stage('build image') {
            steps {
                echo 'Building the image'
                withCredentials([usernamePassword(credentialsId: 'nexus-docker-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh 'docker build -t 20.24.93.25:8083/test:1.0 .'
                    sh "echo $PASS | docker login -u $USER --password-stdin 20.24.93.25:8083"
                    sh 'docker push 20.24.93.25:8083/test:1.0'
                }
            }
        }
    }
} 
