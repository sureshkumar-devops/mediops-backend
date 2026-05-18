FROM public.ecr.aws/amazoncorretto/amazoncorretto:17-alpine
WORKDIR /app
RUN addgroup -S pharma && adduser -S pharma -G pharma
COPY target/auth-service-*.jar app.jar
RUN chown -R pharma:pharma /app
USER pharma
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "-Djava.security.egd=file:/dev/./urandom",  "app.jar"]

