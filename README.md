# git RobinLebhar
    https://github.com/RobinLebhar/Graphql-Intro/blob/005-json-server/db.json

# 1. Initialisation du projet
    # init project
        npm init
    # install dependancies
        npm install --save express express-graphql graphql lodash

        express: serveur http
        express-graphql: liaison entre graphql et avec tout ce qui existe
        graphql: serveur graphql
        lodash: reload
# Lancer le serveur
node server.js
# compilation automatique du serveur
npm install -g nodemon # or using yarn: yarn global add nodemon
nodemon server.js

# installation d'un serveur local
npm install -g json-server
# lancer notre serveur de base de données local
json-server --watch db.json 
            OR 
npm run start 
# installer la librairie axios pour pouvoir faire les req http (GET,POST,PUT)
npm install axios

# Example requête GraphQL avec les fragment
query{
  microsoftInfo: company(id:"3"){
    name,
    user{
      ...userDetails
    }
  },
  appleInfo: company(id:"1"){
    name,
    user{
      ...userDetails
    }
  }
}

fragment userDetails on User {
  firstName,
  age,
  id
}
