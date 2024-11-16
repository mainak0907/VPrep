# VPrep - Assistive Learning and Training Platform

VPrep is an advanced interview preparation and skill development platform tailored for VIT students. This all-in-one solution addresses key challenges faced during campus placement drives and aims to enhance students' learning experiences. With six powerful features, VPrep combines AI-powered tools and virtual learning environments to provide a seamless and engaging experience.

## Features

### 1. **VAssist - Virtual Classroom**
- A 3D-modeled virtual classroom featuring a 3D AI teacher.
- Explains topics interactively and engages students with quizzes.
- Grades student responses automatically.

### 2. **Interview Answer Analysis**
- Provides a platform for practicing interview questions.
- Records audio responses and analyzes transcripts for insights.
- Helps students improve their answering strategies.

### 3. **AI-Powered To-Do List**
- Allows students to organize their work effectively.
- Uses generative AI to provide actionable insights for project planning.

### 4. **Sticky Notes Platform**
- An online notes-taking tool similar to sticky notes.
- Offers a simple and organized way to track thoughts and ideas.

### 5. **AI Quiz Platform**
- Parses PDF documents and creates custom quizzes based on selected topics.
- Powered by Groq for efficient PDF processing.

### 6. **Ticketing Service**
- Enables students to raise doubts or questions as support tickets.
- Admins can view and respond to tickets, resolving issues effectively.


## Technologies Used
- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), TypeScript.
- **Backend**: RESTful API, MongoDB (without Mongoose).
- **AI Features**: Generative AI for to-do list insights, Groq for PDF parsing.
- **3D Models**: Interactive virtual environments with AI-driven interactions.


## Installation and Setup

### Prerequisites
- Node.js (>= 16.x.x)
- MongoDB
- A modern web browser

### Steps to Install and Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/vprep.git
   cd vprep
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.


## Folder Structure

vprep/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router setup
│   ├── components/       # Reusable components
│   ├── pages/            # API endpoints
│   ├── styles/           # Global and component-specific styles
│   └── utils/            # Helper functions
├── .env.local.example    # Environment variable template
├── package.json          # Project dependencies
└── README.md             # Documentation

## Future Scope
- Extend VPrep to other colleges beyond VIT.
- Enhance AI capabilities for personalized learning recommendations.
- Add advanced analytics for student performance tracking.

## License
This project is licensed under the [MIT License](LICENSE).
