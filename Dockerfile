FROM node:alpine AS builder
WORKDIR /app/client
COPY package*.json ./
RUN npm ci
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/client/build /usr/share/nginx/html