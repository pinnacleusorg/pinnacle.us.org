FROM node:14 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM builder as staging
ENV PORT=9000
ENV NODE_ENV="development"
EXPOSE 9000
CMD ["node", "app.js"]

FROM builder as production
ENV PORT=9001
ENV NODE_ENV="production"
EXPOSE 9001
CMD ["node", "app.js"]
