pipeline {
    agent any
    stages {
        stage('deplyement') {
            steps {
                echo 'deploying the project'
                script {
                    def x = BUILD_NUMBER as Integer
                    echo x
                    def y = x as Integer
                    def z = y - 1 as Integer
                    echo y
                    echo z
                    def dockerinit = 'docker stop jenkins-${JOB_NAME}-${BUILD_NUMBER -1}'
                    def dockercmd = 'docker run -d --name jenkins-${JOB_NAME}-${BUILD_NUMBER} -p 3080:3000 switch2mdock/weatherapp:${BUILD_NUMBER}'
                    sshagent(['dani-webserver']) {
                        sh "ssh dani@20.216.134.58 ${dockerinit}"
                    }
                }
            }
        }
    }
} 
