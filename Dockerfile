FROM node:15 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build

FROM builder as staging
EXPOSE 9000
CMD [ "node", "./build/index.js" ]

FROM builder as production
EXPOSE 9001
CMD [ "node", "./build/index.js" ]
