FROM node:current-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env.default ./.env

EXPOSE 3000
CMD [ "node", "index.js" ]