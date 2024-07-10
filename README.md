---

# Application Traveler

Bienvenue dans l'application Traveler, une application full-stack pour la gestion des informations de vol et des réservations.

## Pour commencer

Pour commencer avec l'application Traveler, suivez ces étapes :

1. **Cloner le dépôt :**

   ```bash
   git clone <url-du-dépôt>
   cd Traveler
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Configurer votre base de données locale :**

   - Naviguez vers `server-side/db.js` et mettez à jour la chaîne de connexion de la base de données pour pointer vers votre instance MongoDB locale. Exemple :

     ```javascript
     mongoose.connect('mongodb://localhost:27017/Traveler', { useNewUrlParser: true, useUnifiedTopology: true });
     ```

4. **Démarrer le serveur backend :**

   ```bash
   nodemon server
   ```

   Cela démarrera le serveur backend à l'adresse `http://localhost:3001`.

5. **Démarrer le serveur de développement frontend :**

   ```bash
   npm run dev
   ```

   Cela démarrera le serveur frontend avec Vite à l'adresse `http://localhost:5000`.

## Déploiement avec Docker

L'application Traveler a été dockerisée pour faciliter le déploiement :

- **Conteneur Docker pour le frontend :**
  
  Construire l'image Docker :

  ```bash
  docker build -t traveler-frontend ./client-side
  ```

  Lancer le conteneur Docker :

  ```bash
  docker run -p 5000:5000 traveler-frontend
  ```

  Accéder au frontend à l'adresse `http://localhost:5000`.

- **Conteneur Docker pour le backend :**

  Construire l'image Docker :

  ```bash
  docker build -t traveler-backend ./server-side
  ```

  Lancer le conteneur Docker :

  ```bash
  docker run -p 3001:3001 traveler-backend
  ```

  Accéder au backend à l'adresse `http://localhost:3001`.

## Notes supplémentaires

- Assurez-vous que MongoDB est installé et en cours d'exécution localement pour que le backend puisse se connecter à la base de données.
- Pour le déploiement en production, configurez correctement les variables d'environnement.
- Assurez-vous que les ports nécessaires sont ouverts et accessibles en fonction de votre configuration réseau.

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à cloner le dépôt et à soumettre des pull requests.

## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

---

### Explications :

- **Cloner le dépôt et installer les dépendances :** Ces étapes permettent à l'utilisateur de récupérer le code source de l'application et d'installer les packages nécessaires à son fonctionnement avec `npm install`.

- **Configurer la base de données locale :** L'utilisateur doit mettre à jour le fichier `db.js` dans le dossier `server-side` pour spécifier l'URL de connexion à sa base de données MongoDB locale.

- **Démarrer le serveur backend :** Utilisation de `nodemon server` pour lancer le serveur backend sur le port `3001`.

- **Démarrer le serveur frontend :** Utilisation de `npm run dev` pour lancer le serveur de développement frontend avec Vite sur le port `5000`.

- **Dockerisation :** Instructions pour construire et exécuter les images Docker pour le frontend et le backend. Cela facilite le déploiement de l'application dans des environnements conteneurisés.

- **Notes supplémentaires :** Informations complémentaires sur l'installation de MongoDB, la configuration des variables d'environnement pour le déploiement en production, et l'accessibilité des ports réseau.

- **Contributions et Licence :** Encouragement à contribuer au projet et mention de la licence sous laquelle le projet est distribué.

---

