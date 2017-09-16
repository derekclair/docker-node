FROM node:8.5

LABEL version="1.0"
LABEL name="local-node-scratchpad"
LABEL maintainer="Derek Clair <derek@derekclair.com>"

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "build/index.js"]
