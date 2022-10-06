FROM node:16.17.0 as build-stage
WORKDIR /var/jenkins_home/workspace/deploy/frontend

COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /var/jenkins_home/workspace/deploy/frontend/build /usr/share/nginx/html

#RUN rm /etc/nginx/conf.d/default.conf
#COPY /var/jenkins_home/workspace/deploy/frontend/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /var/jenkins_home/workspace/deploy/frontend/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g","daemon off;"]
