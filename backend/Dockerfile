FROM azul/zulu-openjdk:8 as build-stage
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

RUN apt-get update && apt-get install -y software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update
RUN apt-get install python3.8

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/app.jar"]