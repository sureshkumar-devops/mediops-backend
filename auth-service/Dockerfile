#--------------- STAGE: 1 BUILD -------------
#FROM maven:3.9.9-eclipse-temurin-17 AS builder
#WORKDIR /app
#COPY pom.xml .
#RUN mvn dependency:go-offline
#COPY src ./src
#RUN mvn clean package -DskipTests

#--------------- STAGE: 2 RUNTIME -------------

FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
RUN addgroup -S pharma && adduser -S pharma -G pharma
#COPY --from=builder /app/target/auth-service-*.jar app.jar !!! -> pr auth
COPY target/auth-service-*.jar app.jar
RUN chown -R pharma:pharma /app
USER pharma
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "-Djava.security.egd=file:/dev/./urandom",  "app.jar"]

