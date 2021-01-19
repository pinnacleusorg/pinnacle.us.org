FROM node:14 as builder

WORKDIR /usr/src/app

RUN npm install pm2 -g

COPY package*.json ./

RUN npm install

COPY . .


FROM builder as staging
ENV PORT=9000
ENV NODE_ENV="development"
CMD ["node", "app.js"]

FROM builder as production
ENV PORT=9001
ENV NODE_ENV="production"
CMD ["node", "app.js"]
