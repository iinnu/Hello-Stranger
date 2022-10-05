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

RUN apt update -y && apt install -y python3
RUN apt install -y python3-pip
RUN pip3 install pandas
RUN pip3 install -Iv pymysql==0.9.3
RUN pip3 install sklearn


EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/app.jar"]