FROM node:20-buster AS builder

WORKDIR /api
COPY package*.json ./
COPY .env ./.env
COPY prisma ./prisma/
COPY tsconfig.json ./

RUN npm ci --omit=dev
RUN npx prisma generate

COPY . .

USER node

EXPOSE $NODE_LOCAL_PORT

CMD ["node","build/lib/index.js"]