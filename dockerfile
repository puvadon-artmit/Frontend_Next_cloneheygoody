FROM node:20.10.0

# Update npm
RUN npm install -g npm@latest

WORKDIR /app

COPY package*.json .


RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
