FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV DANGEROUSLY_DISABLE_HOST_CHECK=true
ENV CHOKIDAR_USEPOLLING=true
EXPOSE 3000
CMD ["npm", "start"]
