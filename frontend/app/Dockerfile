FROM node:19.2.0-alpine3.16
RUN mkdir -p /frontend
COPY . /frontend
WORKDIR /frontend
ENV NODE_OPTIONS --openssl-legacy-provider
RUN yarn install
EXPOSE 19006
CMD ["yarn", "start:web"]
