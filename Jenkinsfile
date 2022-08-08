pipeline {
    agent any
    stages {
        stage('deplyement') {
            steps {
                echo 'deploying the project'
                script {
                    def x = BUILD_NUMBER
                    int build_num = x.toInteger()
                    int ltsbuild = build_num - 1
                    echo build_num
                    echo ltsbuild
                    def dockerinit= "docker stop ${ltsbuild}"
                    def dockercmd = 'docker run -d --name ${BUILD_NUMBER} -p 3080:3000 switch2mdock/weatherapp:${BUILD_NUMBER}'
                    sshagent(['dani-webserver']) {
                        sh "ssh dani@20.216.134.58 ${dockerinit}"
                    }
                }
            }
        }
    }
} 
