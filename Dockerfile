FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ADD ./build /usr/src/app/build
ADD ./data /usr/src/app/data

CMD ["node", "./build/index.js"]

EXPOSE 3000