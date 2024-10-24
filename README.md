# EchoLearn - AI-Powered Note Taking App

Transform your learning experience with EchoLearn, an AI-powered note-taking application that automatically transcribes lectures and meetings, generates summaries, flashcards, and quizzes.

## Features

- 🎙️ **Audio Recording**: Record lectures and meetings directly in your browser
- 📝 **Smart Transcription**: Get accurate transcripts powered by OpenAI's Whisper
- 📋 **AI Summaries**: Automatically generate concise summaries of your recordings
- 🗂️ **Flashcards**: Create AI-generated flashcards for effective revision
- 📚 **Smart Quizzes**: Test your knowledge with auto-generated quizzes

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- OpenAI API key

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/echo-learn.git
cd echo-learn
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Variables**

Create a `.env` file in the root directory with the following variables:

```env
# OpenAI API Key for transcription and AI features
OPENAI_API_KEY=your_openai_api_key

# PostgreSQL Database URL
DATABASE_URL="postgresql://user:password@localhost:5432/echolearndb"
```

4. **Database Setup**

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

5. **Start the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Environment Variables Guide

- `OPENAI_API_KEY`: Get your API key from [OpenAI's platform](https://platform.openai.com/api-keys)
- `DATABASE_URL`: Your PostgreSQL connection string in the format:
  ```
  postgresql://USER:PASSWORD@HOST:PORT/DATABASE
  ```

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **AI Services**: OpenAI (GPT-4, Whisper)
- **Audio**: Web Audio API, MediaRecorder API

## Development

### Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── recordings/      # Recording feature pages
│   ├── flashcards/      # Flashcard feature pages
│   └── quizzes/         # Quiz feature pages
├── components/          # React components
├── lib/                 # Utility functions and services
├── hooks/              # Custom React hooks
└── prisma/             # Database schema and migrations
```

### Key Components

- `RecordingDialog`: Handles audio recording and processing
- `RecordingsList`: Displays recorded sessions
- `FlashcardComponent`: Manages flashcard interactions
- `QuizComponent`: Handles quiz display and scoring

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.