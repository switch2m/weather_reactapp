pipeline {
    agent any
    stages {
        stage('deplyement') {
            steps {
                echo 'deploying the project'
                script {
                    def i = BUILD_NUMBER-1;
                    echo i
                    def dockerinit= "docker stop ${i}"
                    def dockercmd = 'docker run -d --name ${BUILD_NUMBER} -p 3080:3000 switch2mdock/weatherapp:${BUILD_NUMBER}'
                    sshagent(['dani-webserver']) {
                        sh "ssh dani@20.216.134.58 ${dockerinit}"
                    }
                }
            }
        }
    }
} 
