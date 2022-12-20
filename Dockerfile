FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ADD ./build ./build
ADD ./data ./data

CMD ["node", "./build/index.js"]

EXPOSE 3000