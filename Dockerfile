FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --production --silent
COPY . /usr/src/app
EXPOSE 3999
RUN npm run build
CMD ["node", "./dist/index.js"]