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
COPY --from=build-stage build/libs/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/app.jar"]