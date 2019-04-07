FROM node
WORKDIR /app
RUN npm i -g @angular/cli@6
VOLUME /app
EXPOSE 4200
