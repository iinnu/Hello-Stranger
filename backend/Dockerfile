FROM azul/zulu-openjdk:8 as build-stage
WORKDIR /var/jenkins_home/workspace/deploy/backend

RUN apt update -y && apt install -y python3
RUN apt install -y python3-pip
RUN apt install -y build-essential libssl-dev libffi-dev python3-dev
RUN pip3 install pandas
RUN pip3 install -Iv pymysql==0.9.3
RUN pip3 install sklearn

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