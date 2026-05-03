#------------ STAGE: 1 BUILD ------------
#FROM maven:3.9.9-eclipse-temurin-17 AS builder

#WORKDIR /app

# Copy the pom.xml first (for caching dependencies)
#COPY pom.xml .
#RUN mvn dependency:go-offline

# Copy the source code
#COPY src ./src

# Build the application (.Jar)
#RUN mvn clean package -DskipTests

#------------ STAGE: 2 RUNTIME ------------
    
#FROM eclipse-temurin:17-jdk-alpine
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Create a non-root user and switch to it
RUN addgroup -S pharma && adduser -S pharma -G pharma

# Copy the built .jar from the builder stage
#COPY --from=builder /app/target/api-gateway-*.jar app.jar

COPY target/api-gateway-*.jar app.jar

# Set permissions for the non-root user
RUN chown -R pharma:pharma /app

# Switch to the non-root user
USER pharma

# Expose the application port (if needed)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]



