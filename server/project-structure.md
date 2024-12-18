# Project Structure

## ./app.ts

Responsible for the application's startup, shutdown, and internal processes.

## ./prisma

Contains the configuration files for the Prisma ORM, including `schema.prisma`, which defines the database structure and data models. It also stores migrations and configurations to ensure efficient interaction with the database.

## ./src

Contains the core components of the application.

- **./src/controller**: Manages the application logic by using services to handle requests, provide responses, perform validations, and handle errors.
- **./src/repository**: Handles interactions with the database.
- **./src/routes**: Defines and instantiates the application routes.
- **./src/service**: Contains the business logic and validation services.
- **./src/type**: Contains general types for the application.
- **./src/utils**: Contains global utility functions.

  - **./src/utils/crypto**: Contains utility functions for encryption.

  - **./src/utils/error**: Contains a global error class to standardize exception handling across the application.
