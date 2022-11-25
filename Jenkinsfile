pipeline{
    agent any
    stages{
        stage('env tools existance') {
            steps {
                echo "testing environment tools"
                sh 'npm -v'
                sh 'kubectl version'
                sh 'docker -v'
            }
        }
        stage('pushing the image to a docker registry') {
            steps{
                withCredentials([usernamePassword(credentialsId: 'hub-dock-credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh 'docker build -t switch2mdock/weatherapp:${BUILD_NUMBER} .'
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "docker push switch2mdock/weatherapp:${BUILD_NUMBER}"
                }
            }
        }
        stage('deploy on a k8s cluster') {
            steps{
                echo "get the k8s credentials"
                sh "az get credentials"
                echo "deploy the app"
                sh """
                    cd helm 
                    helm install --set appImage=switch2mdock/weatherapp:${BUILD_NUMBER} -f weather\values.yaml weather\
                """
            }
        }
    }

}