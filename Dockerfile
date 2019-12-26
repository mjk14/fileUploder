FROM node:alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN mv -r .env.docker .env
CMD ["npm","start"]