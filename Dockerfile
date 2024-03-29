FROM node:16

WORKDIR /opt/app

RUN npm install --global pm2

ENV NODE_ENV production

COPY package*.json ./

RUN yarn install --production

COPY . /opt/app

RUN yarn run build

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
