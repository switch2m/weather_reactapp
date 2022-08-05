pipeline {
    agent any
    stages {
        stage('deplyement') {
            steps {
                echo 'deploying the project'
                script {
                    def x = BUILD_NUMBER
                    echo x
                    echo " ^ "
                    def dockerinit = "docker stop jenkins-${JOB_NAME}-${ltsbuild}"
                    def dockercmd = 'docker run -d --name jenkins-${JOB_NAME}-${BUILD_NUMBER} -p 3080:3000 switch2mdock/weatherapp:${BUILD_NUMBER}'
                    sshagent(['dani-webserver']) {
                        echo "${dockerinit}"
                    }
                }
            }
        }
    }
} 
