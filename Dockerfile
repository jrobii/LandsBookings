FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

#RUN npm install

#For Prod

RUN npm ci --only-production

COPY . .

EXPOSE 8000

CMD node -r dotenv/config index.js

LABEL org.opencontainers.image.source="https://github.com/jrobii/LandsBookings"
