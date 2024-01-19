FROM node:21-alpine as base

WORKDIR /usr/app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

EXPOSE 3000

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --production=false

# App source
COPY . .

FROM base
RUN yarn build


RUN yarn install --production && \
    yarn autoclean --init && \
    echo *.ts >> .yarnclean && \
    yarn autoclean --force && \
    yarn cache clean

CMD ["node", "build/src/index.js"]
