FROM node:16-alpine as base

WORKDIR /app

COPY ./package.json /app/
COPY ./build /app/build
COPY ./node_modules /app/node_modules