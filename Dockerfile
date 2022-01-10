FROM node:15 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

FROM builder as staging
ENV PORT=9000
ENV NODE_ENV="staging"
ENV LOCAL_ROOT="https://staging.pinnacle.us.org"
RUN npm run build
EXPOSE 9000
CMD [ "node", "./build/index.js" ]

FROM builder as production
ENV PORT=9001
ENV NODE_ENV="production"
ENV LOCAL_ROOT="https://pinnacle.us.org"
RUN npm run build
EXPOSE 9001
CMD [ "node", "./build/index.js" ]
