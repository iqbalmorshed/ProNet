FROM node:12.13-alpine as dev

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json /frontend/package.json

RUN npm install
RUN npm install react-scripts@3.4.0 -g
EXPOSE 3000

FROM dev as prod
COPY public public/
COPY src src/
COPY .env /frontend/.env
RUN npm run build

FROM nginx:1.15.2-alpine
COPY --from=prod /frontend/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
#COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#CMD ["npm", "start"]