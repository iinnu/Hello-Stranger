FROM azul/zulu-openjdk:8 as build-stage
WORKDIR /var/jenkins_home/workspace/deploy/backend

RUN apt-get install software-properties-common
RUN apt-get install -y python3-pip python3-dev
RUN cd /usr/local/bin && \
    ln -s /usr/bin/python3 python && \
    ln -s /usr/bin/pip3 pip && \
    pip install --upgrade pip

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