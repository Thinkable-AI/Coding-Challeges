# Chat with PDF Chatbot Technical Assessment

## Overview
This technical assessment is designed to evaluate your skills in backend development and prompting techniques, particularly with NestJs, MongoDB, Pinecone, LangChain, and GPT-3.5 turbo. You will be building a chat application that integrates a PDF chatbot, inspired by an open-source repository in Next.js, with a focus on scientific discussions.

## How to Participate

### Join Thinkable’s Community
- Access our Slack workspace by using the following invite link: [Join Tech-Challenge Channel](https://join.slack.com/share/enQtNjI3MTcwMjk0Njg4NC03MjAyOGVhZGI4OThkYTE1MzM5YzU5MDlkNjRhNTQ1YWM3NmZiZGFkNzk2N2I1ZWVkMTU5NzdlZjhlZjAzYWUx).
- Once you have joined, navigate to the `#tech-challenge` channel.
- This channel is dedicated to participants of the technical assessment. It is a space where you can engage with the community, ask questions, and seek clarifications about the assessment.
- If you encounter any problems or need assistance, you can request help or a code review from our lead developers. Don't hesitate to reach out if you need support.
- Remember, effective communication is a key aspect of the assessment and will be considered in the evaluation of your performance. We encourage you to actively participate in discussions and collaborate with others in the community.
### Start Your Challenge
- Set up a new GitHub repository to host your project.
- Email the repository link to `soulaimane@thinkable.co` with the subject line 'Coding Challenge Software Engineer Intern Application by [Your First Name] [Your Last Name]'.
- An email will be sent to you containing OpenAI API key.

### Request Support
- If you have any questions or need a code review, ask in the `#tech-challenge` channel.

### Read Carefully
- Before starting, read the instructions thoroughly.
- Refer to the Links and Resources section for guidelines and best practices.

## Evaluation Criteria

- **Adherence to Instructions**: Follow the provided instructions closely.
- **Software Engineering Principles**: Apply best practices in software development such as DRY, KISS, YAGNI, and SOLID.
- **Code Readability**: Write clean, readable code.
- **Git Commit History**: Maintain an orderly commit history.
- **Documentation**: Provide clear and concise documentation.
- **Learning and Adaptability**: Demonstrate the ability to learn new technologies and adapt to challenges.
- **Communication**: Effectively communicate throughout the challenge.
- **Prompting Techniques**: Use effective prompting techniques to ensure the chatbot follows instructions and maintains a scientific tone.
- **Unit Tests**: Include unit tests to ensure code quality and reliability.

## Project Requirements

### Functional Requirements
1. Users should be able to interact with the chatbot in a chat interface.
2. The chatbot should be able to process and respond to user queries about scientific topics.
3. PDFs should be uploaded on the backend and vectorized for the chatbot to reference content from these documents in its responses. The PDFs should be research papers from Arxiv about a specific scientific topic of your choice (e.g., Prompt Engineering, Quantum Computing, etc.).
4. If the user asks the chatbot about a topic outside of the chosen scientific domain, the chatbot should apologize and steer the conversation back to the chosen topic.

### Technical Requirements
- Use **NestJs** for the backend service.
- Use **NextJs** or **Angular** for the frontend.
- Use **GraphQL** API communication.
- Utilize **Pinecone** for vector search of PDF content.
- Integrate **LangChain** and **GPT-3.5 turbo** for natural language processing and response generation.
- Focus on backend development and the quality of prompting for the chatbot.
- Develop the chatbot's personality to have a scientific tone.
- Include unit tests for your code.
- Store chat messages in **MongoDB** or your preferred Database. *

### Nice to Have
- Implement a **GitHub Actions CI/CD pipeline** for running tests, ESLint checks, TypeScript checks, or even deployment upon pushing code to the repository. This will help maintain code quality and streamline the development process.

### Optional
- **Dockerize** the application using Docker Compose to simplify the setup and deployment process. This will allow for consistent development environments and ease of deployment to various environments.

By considering these additional "Nice to Have" and "Optional" features, you can further enhance the robustness and professionalism of your project. While they are not mandatory for the completion of the technical assessment, they are encouraged as they demonstrate a deeper understanding of modern development practices and DevOps principles.

### Similar Project Reference
- Similar project in NextJS: [gpt4-pdf-chatbot-langchain](https://github.com/mayooear/gpt4-pdf-chatbot-langchain)
- You can use the same frontend.
- Focus more on backend development and prompting techniques.

### Prompting Resources
- Basics of Prompting: [Introduction to Basics](https://www.promptingguide.ai/introduction/basics)
- Elements of a Prompt: [Understanding Elements](https://www.promptingguide.ai/introduction/elements)
- Few-Shot Prompting: [Few-Shot Techniques](https://www.promptingguide.ai/techniques/fewshot)
- RAG: [Retrieval-Augmented Generation](https://www.promptingguide.ai/techniques/rag)
- GPT-4 & LangChain Tutorial: [How to Chat With A 56-Page PDF Document (w/Pinecone)](https://www.youtube.com/watch?v=ih9PBGVVOO4)

### Submission Guidelines
- Your code should be hosted in a public GitHub repository.
- Include a README file with setup instructions and a brief overview of the project.
- Document any assumptions or design decisions you make.

## Links and Resources
### Stack Resources
- [NestJs Documentation](https://docs.nestjs.com/)
- [MongoDB Documentation](https://docs.nestjs.com/techniques/mongodb)
- [Pinecone Documentation](https://www.pinecone.io/docs/)
- [LangChain Documentation](https://js.langchain.com/docs/get_started/introduction)

### Prompting Resources
- Basics of Prompting: [Introduction to Basics](https://www.promptingguide.ai/introduction/basics)
- Elements of a Prompt: [Understanding Elements](https://www.promptingguide.ai/introduction/elements)
- Few-Shot Prompting: [Few-Shot Techniques](https://www.promptingguide.ai/techniques/fewshot)
- RAG: [Retrieval-Augmented Generation](https://www.promptingguide.ai/techniques/rag)
- GPT-4 & LangChain Tutorial: [How to Chat With A 56-Page PDF Document (w/Pinecone)](https://www.youtube.com/watch?v=ih9PBGVVOO4)


## Instructions
- Quality over speed: Aim for a well-structured, maintainable codebase.
- Adhere to key software engineering principles: DRY, KISS, YAGNI, and SOLID.
- Ensure the code is readable and maintainable.
- Keep your git commit history clean and meaningful for