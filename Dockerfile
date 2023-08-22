FROM node:current-alpine
WORKDIR /app
COPY . ./
COPY .env.default ./.env

RUN npm install

CMD ["node","index.js"]