# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/Kyossi-Admin /usr/share/nginx/html
# stage 3
COPY --from=node /app/app-ads.txt /usr/share/nginx/html
