pipeline {
    agent any
    stages {
        stage('init') {
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }
        stage('deplyement') {
            steps {
                echo 'deploying the project'
                script {
                    def x = BUILD_NUMBER
                    def buildNumber = Jenkins.instance.getItem('weath_app_pip').lastSuccessfulBuild.number
                    echo "last succesfull build is ${buildNumber}"
                    def ltsbuild = gv.set_ltsbuild(x)
                    def dockerinit= "docker stop jenkins-${JOB_NAME}-${buildNumber}"
                    def dockercmd = 'docker run -d --name jenkins-${JOB_NAME}-${BUILD_NUMBER} -p 3080:3000 switch2mdock/weatherapp:${BUILD_NUMBER}'
                    sshagent(['dani-webserver']) {
                        sh "ssh dani@20.216.134.58 ${dockerinit}"
                    }
                }
            }
        }
    }
} 
