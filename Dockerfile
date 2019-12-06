# stage: 1 — build-react
FROM node:lts-alpine as build-react

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm i -g yarn

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build && yarn --production

# stage: 2 — serve react with node
FROM node:lts-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV="production"

COPY --from=build-react /usr/src/app .

EXPOSE 3000
CMD ["node", "server.js"]