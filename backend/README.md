# NestJs Project Starter for Technical Assessment

## Overview
This repository serves as a starter project for participants in a technical assessment. It is pre-configured with NestJs, MongoDB/Mongoose, and GraphQL Apollo, providing a solid foundation for building a backend application.

## Technical Assessment Details
For more information about the technical assessment and what is expected, please refer to the assessment documentation:
[Technical Assessment Instructions](https://github.com/Thinkable-AI/Technical-Assessment-Starter/blob/main/README.md)

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB instance accessible either locally or remotely

### Installation

Clone/Fork the repository and install dependencies:
```bash
npm install
```

### Configuration

Set up your environment variables:
```bash
cp .env.example .env
# Edit .env to include your MongoDB URI
```

### Running the Project

Start the application with the following command:
```bash
npm start
```

The application should now be running and connected to your MongoDB instance.

### GraphQL Playground

Access the GraphQL Playground by navigating to `http://localhost:3000/graphql` in your web browser (assuming the default port is used). You can interact with the GraphQL API and execute queries and mutations from here.

### Project Structure

- `app.resolver.ts` contains a sample `getHello` query for initial testing. You can remove or replace this with your own queries and mutations as you develop your project.
- The `shared` module includes shared configurations and services that are commonly used across the application. This helps maintain a clean and modular codebase.

### Using BaseModel and BaseRepository

The backend project includes a `BaseModel` and `BaseRepository` which are designed to provide a consistent structure and common functionality for your models and repositories. It is required that you utilize these base classes when creating new models and repositories in your application.

#### BaseModel

The `BaseModel` class is an abstract class that defines standard fields and methods that should be present in all your models. Here's an example of how to use `BaseModel` for a `User` class:

```typescript
import { BaseModel } from './base.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends BaseModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  // Additional user fields go here
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
```

In this example, `User` inherits from `BaseModel`, which means it automatically includes fields like `id`, `createdAt`, and `updatedAt`. You can add additional fields specific to the `User` model as needed.

#### BaseRepository

The `BaseRepository` class provides a generic repository with common CRUD operations. You should extend this class when creating your own repositories. Here's an example of a `UserRepository` that extends `BaseRepository`:

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';
import { BaseRepository } from './base.repository';

@Injectable()
export class UserRepository extends BaseRepository<UserDocument> {
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }

  // You can add additional user-specific methods here
}
```

In this example, `UserRepository` extends `BaseRepository`, providing it with standard CRUD operations for the `User` model. You can inject the `UserRepository` into your services and use it to interact with the database.

#### Integration in Services

Here's how you might use the `UserRepository` in a service:

```typescript
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userData: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.create(userData);
    return newUser;
  }

  // Additional service methods go here
}
```

## Development Notes

This starter project is part of a technical assessment and is configured with a basic setup. You may need to add additional configurations and packages depending on the requirements of your application. Ensure to secure your `.env` file and never commit sensitive information to your version control system.

## Forking the Project

Participants are encouraged to fork this project to begin their assessment. This allows you to have a personal copy of the starter project that you can modify and use for your submission.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.

Good luck with your technical assessment!