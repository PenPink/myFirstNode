module.exports = {
       //mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
       mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',

        google: {
              clientID: '789265328916-jfhvl90iuicpdisun1a8ev6gqj9fq3d1.apps.googleusercontent.com',
              clientSecret: 'HR9Nrt71zIJRXlTgSgGN_n2M',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }
}
