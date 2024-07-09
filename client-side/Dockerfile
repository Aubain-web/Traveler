FROM node:18.16.0-alpine3.17
LABEL authors="Aubain Nicolas"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .


CMD ["npm", "run", "dev"]