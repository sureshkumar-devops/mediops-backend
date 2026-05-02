#-----------------------------------------------------------------------
# STAGE 1: BUILD AND TEST
# This stage installs all dependencies and prepares the source code.
#-----------------------------------------------------------------------
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install all dependencies (including devDependencies for testing)
RUN npm install

# Copy the rest of the application source code
COPY . .

#-----------------------------------------------------------------------
# STAGE 2: PRODUCTION
# This stage creates the final lightweight image for deployment.
#-----------------------------------------------------------------------
FROM node:20-alpine AS runner

# Set the working directory for the production environment
WORKDIR /app

# Create a system group and a non-root system user for security
RUN addgroup -S pharma && adduser -S pharma -G pharma

# Copy package files from the builder stage
COPY --from=builder /app/package*.json ./

# Install only production dependencies to keep the image small
RUN npm install --omit=dev

# Copy only the source code from the builder stage
COPY --from=builder /app/src ./src

# Pre-create the log file and assign ownership so the non-root user can write to it
RUN touch error.log && chown pharma:pharma error.log

# Change ownership of the entire /app directory to the non-root user
RUN chown -R pharma:pharma /app

# Switch to the non-root user for all subsequent commands
USER pharma

# Set the node environment to production
ENV NODE_ENV=production

# Document that the container listens on port 3000
EXPOSE 3000

# Command to start the application
CMD ["node", "src/index.js"]



# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci --omit=dev
# FROM node:20-alpine
# WORKDIR /app
# RUN addgroup -S pharma && adduser -S pharma -G pharma
# COPY --from=builder /app/node_modules ./node_modules
# COPY src ./src
# COPY package.json .
# USER pharma
# EXPOSE 3000
# CMD ["node", "src/index.js"]