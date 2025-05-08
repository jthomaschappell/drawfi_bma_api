# DrawFi BMA API

A TypeScript-based API service built with Express.js and Supabase integration.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- TypeScript
- Supabase account and project

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd drawfi_bma_api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=3000
```

## Development

To run the project in development mode with hot-reload:
```bash
npm run dev
```

## Building

To build the TypeScript project:
```bash
npm run build
```

## Production

To run the built project:
```bash
npm start
```

## Project Structure

```
drawfi_bma_api/
├── src/
│   └── index.ts        # Main application entry point
├── dist/               # Compiled JavaScript files
├── package.json        # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── .env               # Environment variables (create this file)
```

## Dependencies

- Express.js - Web framework
- Supabase - Backend as a Service
- TypeScript - Programming language
- CORS - Cross-Origin Resource Sharing
- dotenv - Environment variable management

## Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build the TypeScript project
- `npm start` - Run the built project
- `npm test` - Run tests (not configured yet)

## License

ISC

