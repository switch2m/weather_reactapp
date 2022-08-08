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
                    echo x
                    def ltsbuild = gv.set_ltsbuild(x)
                    println(ltsbuild)
                }
            }
        }
    }
} 
