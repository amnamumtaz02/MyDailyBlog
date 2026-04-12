pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/amnamumtaz02/MyDailyBlog.git'
            }
        }

        stage('Build and Run Containers') {
            steps {
                sh 'docker-compose -f docker-compose-jenkins.yml down || true'
                sh 'docker-compose -f docker-compose-jenkins.yml up -d'
                sh 'sleep 10'
                sh 'docker exec blog-app-jenkins npx prisma db push'
            }
        }
    }
}
