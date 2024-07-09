FROM node:18.16.0-alpine3.17
LABEL authors="Aubain Nicolas"

RUN mkdir /app
WORKDIR /app


COPY package.json /app/
RUN npm install
RUN npm install -g nodemon


COPY . /app


EXPOSE 3001


CMD ["nodemon", "server"]
