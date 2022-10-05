FROM azul/zulu-openjdk:8 as build-stage

RUN apt-get update && apt-get install -y software-properties-common && apt-get install -y python3-pip
RUN python3 -m pip install --upgrade pip && python3 -m pip install pandas && python3 -m pip install -Iv pymysql==0.9.3 && python3 -m pip install sklearn

WORKDIR /var/jenkins_home/workspace/deploy/backend

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootJAR

FROM azul/zulu-openjdk:8
COPY --from=build-stage /var/jenkins_home/workspace/deploy/backend/build/libs/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/app.jar"]