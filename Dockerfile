# =============================
# 1ère étape : Build en Node
# =============================
FROM node:18 AS builder

# Dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances (si vous avez un yarn.lock, adaptez la commande)
RUN npm install

# Copier l'ensemble du code
COPY . .

# Lancer la construction du projet (build Next)
RUN npm run build

# Exporter le site statique (dossier /out)
RUN npm run export

# =============================
# 2e étape : Serveur Caddy
# =============================
FROM caddy:2-alpine

# Copier les fichiers statiques générés vers le répertoire par défaut de Caddy
COPY --from=builder /app/out /usr/share/caddy

# Exposer le port 80
EXPOSE 80

# Le container Caddy se lancera automatiquement avec la config par défaut
