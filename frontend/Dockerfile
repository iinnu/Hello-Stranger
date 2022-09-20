FROM node:16.17.0 as build-stage
WORKDIR /var/jenkins_home/workspace/deploy/frontend

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /var/jenkins_home/workspace/deploy/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g","daemon off;"]