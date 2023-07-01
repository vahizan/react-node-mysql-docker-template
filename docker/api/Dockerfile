FROM node:20-buster

WORKDIR /api
COPY package.json ./
RUN npm install
COPY . .

USER node

CMD npm run build
CMD npm start