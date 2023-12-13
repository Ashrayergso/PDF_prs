# Document Q&A React App

This is a starter React application built with TypeScript. It's a document Q&A app that allows users to ingest, parse, and interact with PDF documents.

## Features

- Document ingestion pipeline with Llama_index
- PDF document input and parsing
- Text splitting by sentences
- Text indexing in a database
- Action items extraction from text
- Key highlights extraction from text
- Entity extraction from text
- Q&A chat for documents using BM25, rerank, llm query based chat
- User can select which NLP method to use
- Simple React user interface with document selection dropdown and text box for presenting text and other outputs

## Getting Started

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm start`

## Project Structure

The project is structured as follows:

- `src/index.tsx`: The entry point of the application
- `src/App.tsx`: The main App component
- `src/components`: Contains all the React components
- `src/utils`: Contains utility functions for document ingestion, parsing, text splitting, text indexing, action item extraction, highlight extraction, entity extraction, and chat processing
- `src/types/index.ts`: Contains all the TypeScript types used in the application
- `public`: Contains the static files served by the application
- `package.json`: Contains the list of project dependencies
- `tsconfig.json`: Contains the TypeScript configuration

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)