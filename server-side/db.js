const mongoose = require('mongoose');

const host = process.env.HOSTDB || 'localhost';
const port = process.env.PORTDB || 27017;
//'mongodb+srv://aubain:aubain99@cluster0.g3x4nwn.mongodb.net/'
//`mongodb://${host}:${port}/Traveler`,
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://aubain:aubain99@cluster0.g3x4nwn.mongodb.net/', {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log("Connexion à la base de données réussie");
  } catch (error) {
    console.error("Erreur de connexion à la base de données:", error.message);
    process.exit(1); // Quitte l'application en cas d'échec de connexion à la base de données
  }
}

module.exports = connectToDatabase;
