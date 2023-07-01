FROM node:20-buster as build

WORKDIR /ui

COPY package.json ./

RUN npm install
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

CMD ["npm","run","build"]

FROM nginx:latest

COPY --from=build /ui/build/lib /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'