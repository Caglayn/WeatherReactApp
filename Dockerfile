FROM node:20-alpine3.18

# Set working directory
WORKDIR /home/reactapp

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Define entrypoint to serve the build files
CMD ["serve", "-s", "build"]