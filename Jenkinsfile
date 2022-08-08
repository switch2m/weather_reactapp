pipeline {
    agent any
    stages {
        stage('deplyement') {
            steps {
                echo 'deploying the project'
                script {
                    def x = "${BUILD_NUMBER}"
                    int build_num = x.toInteger()
                    int ltsbuild = build_num - 1
                    echo build_num
                    echo ltsbuild
                    
                }
            }
        }
    }
} 
