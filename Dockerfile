FROM node:13-alpine

RUN mkdir -p /home/app
# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app

ENV PATH /home/app/node_modules.bin:$PATH
# will execute npm install in /home/app because of WORKDIR
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./
EXPOSE 3000
# no need for /home/app/server.js because of WORKDIR
CMD ["npm", "start"]
