FROM node:lts-alpine
WORKDIR /usr/src/copycord-cdn
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3003
CMD ["node", "dist/"]