FROM node:20.10.0 as node

WORKDIR /app

COPY frontend/package.json ./

RUN npm install

COPY / .
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html