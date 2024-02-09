FROM node:18.16.0

WORKDIR /myapp

COPY ./FrontEnd/package.json ./FrontEnd/package-lock.json ./BackEnd/package.json ./BackEnd/package-lock.json ./

RUN npm install

COPY . .


CMD npm start
