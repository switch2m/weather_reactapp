pipeline {
    agent any
    stages {
        stage('deplyement') {
            steps {
                echo 'deploying the project'
                script {
                    int x = BUILD_NUMBER
                    echo x
                    int y = x--
                    echo y
                    
                    def dockercmd = 'docker run -d --name jenkins-${JOB_NAME}-${BUILD_NUMBER} -p 3080:3000 switch2mdock/weatherapp:${BUILD_NUMBER}'
                    sshagent(['dani-webserver']) {
                        sh "ssh dani@20.216.134.58 ${dockerinit}"
                    }
                }
            }
        }
    }
} 
