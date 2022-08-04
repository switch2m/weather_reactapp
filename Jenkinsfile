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
                withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh "docker build -t switch2mdock/weatherapp:${BUILD_NUMBER} ."
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "docker push switch2mdock/weatherapp:${BUILD_NUMBER}"
                }
            }
        }
        stage('deplyement') {
            steps {
                echo 'deploying the project'
                script {
                    def dockercmd = 'docker run -p 3080:3000 switch2mdock/weatherapp:${BUILD_NUMBER}'
                    sshagent(['dani-webserver']) {
                        sh "ssh —o StrictHostKeyChecking=no dani@20.216.134.58 ${dockercmd}"
                    }
                }
            }
        }
    }
} 
