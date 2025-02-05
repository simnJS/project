# Étape 1 : Build
FROM node:18 AS builder
WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le code et construire
COPY . .
RUN npm run build

# Étape 2 : Exécuter l'application en production
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./
ENV NODE_ENV=production

EXPOSE 3001
CMD ["npm", "run", "start"]
