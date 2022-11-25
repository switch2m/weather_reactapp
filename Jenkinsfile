pipeline{
    agent any
    stages{
        // stage ('npm install packages') {
        //     steps {
        //         sh "npm install"
        //     }
        // }
        stage('env tools existance') {
            steps {
                echo "testing environment tools"
                sh 'kubectl version || true'
                sh 'docker -v'
                sh 'brew version'
                sh 'helm version'
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
                    sh "az aks get-credentials --resource-group aks --name k8s"
                    echo "deploy the app"
                    sh """
                        cd helm 
                        helm install --set appImage=switch2mdock/weatherapp:${BUILD_NUMBER} -f /weather/values.yaml weather/
                    """
                    echo 'set up promotheus on the cluster'
                    sh "helm repo add stable https://charts.helm.sh/stable"
                    sh "helm repo add prometheus-community https://prometheus-community.github.io/helm-charts"
                    sh "kubectl create namespace monitor"
                    sh "helm install stable prometheus-community/kube-prometheus-stack -n monitor"
                    sh "kubectl get all -n monitor"
            }
        }
    }

}