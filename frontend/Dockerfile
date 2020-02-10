FROM node:12.13-alpine

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json /frontend/package.json

RUN npm install
RUN npm install react-scripts@3.3.0 -g

EXPOSE 3000