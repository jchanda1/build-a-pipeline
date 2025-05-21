# GitLab Pipeline Builder

A simple web application that helps users generate GitLab CI/CD pipeline configurations.

## Features

- Simple form to configure basic project information
- Platform selection (currently GitLab only)
- Generate and download `.gitlab-ci.yml` configuration files
- Default pipeline stages and jobs for common workflows
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/build-a-pipeline.git
   cd build-a-pipeline
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Fill out the project information form (name and description)
2. Select your CI/CD platform (currently GitLab only)
3. Click "Generate Pipeline" to download the `.gitlab-ci.yml` file
4. Add the downloaded file to your GitLab repository

## Project Structure

- `src/components/` - React components
- `src/utils/` - Utility functions
- `src/App.tsx` - Main application component
- `src/main.tsx` - Application entry point

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- GitLab CI/CD documentation
- React and Tailwind CSS communities
