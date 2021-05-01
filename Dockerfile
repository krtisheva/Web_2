FROM node as builder

WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
EXPOSE 3000
COPY . /app
RUN npm run build
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]