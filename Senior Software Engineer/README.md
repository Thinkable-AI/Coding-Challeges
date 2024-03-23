# Coding Challenge: AI-Enhanced Task Management System with Prompt Engineering

## Overview
Develop an AI-enhanced task management system where users can create, view, edit, and delete tasks. Each task should have a title, description, status (e.g., pending, in progress, completed), and a due date. The system should also leverage an AI model to offer additional features like task summarization, completion time prediction, or categorization based on descriptions.

## Start Your Challenge
- Set up a new GitHub repository to host your project.
- Email the repository link to ops@thinkable.co with the subject line 'Coding Challenge Senior Software Engineer Application by [Your First Name] [Your Last Name]'.
- An email will be sent to you containing Anthropic API key.

## Functional Requirements
- Users should be able to create new tasks by providing a title, description, and due date.
- Users should be able to view a list of all tasks, including their title, status, and due date.
- Users should be able to edit the title, description, status, and due date of existing tasks.
- Users should be able to delete tasks.
- The system should provide an AI-powered feature (task summarization, completion time prediction, or task categorization) based on the task description.
- The system should handle errors gracefully and provide appropriate feedback to the user.

## Technical Requirements

### Backend (NestJS, GraphQL, MongoDB/Postgres)
- **GraphQL API**: Implement a GraphQL API to support creating, updating, deleting, and fetching tasks.
- **Database Integration**: Use MongoDB or Postgres for data persistence.
- **AI Feature**: Integrate an AI-powered feature using Claude Models. (Langchain is a plus) **Choose one**:
  - Task Summary: Generate summaries for task descriptions.
  - Completion Time Prediction: Predict task completion times based on descriptions.
  - Task Categorization: Categorize tasks into predefined categories based on descriptions.
- **Error Handling**: Ensure comprehensive error handling for both standard and AI-enhanced functionalities.
- **Unit Testing**: Write unit tests to ensure the correctness and reliability of the backend functionality.

### Nice to Have
- Implement a GitHub Actions CI/CD pipeline for running tests, ESLint checks, TypeScript checks, or even deployment upon pushing code to the repository. This will help maintain code quality and streamline the development process.
- Dockerize the application using Docker Compose to simplify the setup and deployment process. This will allow for consistent development environments and ease of deployment to various environments.

## Evaluation Criteria
- **Adherence to Instructions**: Follow the provided instructions closely.
- **Functionality**: The application must work as described, showcasing all standard and AI-enhanced features.
- **Code Quality**: Code should be clean, well-organized, and adhere to best practices.
- **Git Commit History**: Maintain an orderly commit history.
- **Documentation**: Provide clear and concise documentation.
- **AI Integration and Prompt Engineering**: The integration of AI features should be seamless, with well-crafted prompts that demonstrate an understanding of effective prompt engineering and prompting techniques.
- **Unit Testing**: Implement comprehensive unit tests for the backend.

## Deliverables
- Complete source code for the frontend and backend, including any configuration files necessary for local setup.
- A README file detailing setup instructions, how to operate the application, and an overview of the AI features and their implementation.

## Notes for Candidates
- Focus on demonstrating your ability to integrate complex functionalities in a seamless and user-centric way.
- Quality over speed: Aim for a well-structured, maintainable codebase.
- Adhere to key software engineering principles: DRY, KISS, YAGNI, and SOLID.
- Ensure the code is readable and maintainable.

### Prompting Resources
- Basics of Prompting: [Introduction to Basics](https://www.promptingguide.ai/introduction/basics)
- Elements of a Prompt: [Understanding Elements](https://www.promptingguide.ai/introduction/elements)
- Few-Shot Prompting: [Few-Shot Techniques](https://www.promptingguide.ai/techniques/fewshot)
- Function Calling:  [Function Calling with LLMs](https://www.promptingguide.ai/applications/function_calling)