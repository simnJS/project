# 1) Choisir une image Node alpine pour un container léger
FROM node:16-alpine

# 2) Créer et définir le répertoire de travail
WORKDIR /app

# 3) Copier les fichiers package.json et package-lock.json (si présent)
COPY package*.json ./

# 4) Installer les dépendances
RUN npm install

# 5) Copier tout le code dans le container
COPY . .

# 6) Builder le projet Next.js pour la production
RUN npm run build

# 7) Exposer le port 3000 (port par défaut Next.js)
EXPOSE 3000

# 8) Lancer l’application en mode production
CMD ["npm", "start"]
