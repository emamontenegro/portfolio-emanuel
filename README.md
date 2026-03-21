# Emanuel Montenegro Portfolio

## Description
This is a personal portfolio website for Emanuel Montenegro, a Frontend Developer. The project showcases professional projects, technical skills, certifications, and experience. It is built as a single-page application (SPA) using React, featuring smooth scrolling navigation, multilingual support (English and Spanish), and responsive design. The site demonstrates modern frontend development practices, including component-based architecture, animations, and clean UI/UX design.

## Tech Stack
### Frontend
- **React 19.2.0**: Component-based library for building the user interface.
- **Vite 7.2.4**: Build tool and development server for fast development and optimized production builds.
- **Framer Motion 12.29.2**: Library for animations and transitions.
- **React Router 7.12.0**: Routing library (included but not actively used for navigation in this SPA).
- **React Scroll 1.9.3**: Enables smooth scrolling to different sections of the page.

### Development Tools
- **ESLint 9.39.1**: Linting tool for code quality.
- **@vitejs/plugin-react 5.1.1**: Vite plugin for React support.
- **@types/react 19.2.5** and **@types/react-dom 19.2.3**: TypeScript type definitions for React.

### Deployment
- **Vercel**: Hosting platform with SPA routing configuration.

## Architecture
The application follows a single-page application architecture built with React. It consists of:
- A root `App` component that renders the main layout.
- A `LanguageProvider` context for managing multilingual state (English/Spanish).
- Modular components organized in folders (background, common, layout, sections).
- Static data stored in JSON files (projects, certifications) and i18n translation files.
- CSS modules for styling, with global styles and component-specific stylesheets.
- No backend or server-side rendering; all data is client-side.

Components interact through React's component hierarchy and context API. Navigation is handled via React Scroll for smooth in-page transitions. Animations are managed by Framer Motion for enhanced user experience.

## Project Structure
```
portfolio-emnauel/
├── public/                          # Static assets served by Vite
├── src/
│   ├── assets/                      # Images, CVs, and other media
│   │   ├── certifications/          # Certification images
│   │   ├── cvs/                     # CV files in different languages
│   │   ├── projects/                # Project-related assets
│   │   └── skills/                  # Skills data
│   ├── components/                  # Reusable UI components
│   │   ├── background/              # Background effects (e.g., tech background)
│   │   ├── common/                  # Shared components (certifications, contact card, etc.)
│   │   ├── layout/                  # Layout components (header, footer)
│   │   └── sections/                # Main page sections (Hero, About, Projects, etc.)
│   ├── context/                     # React contexts (LanguageContext for i18n)
│   ├── data/                        # Static data files
│   │   ├── certifications.json      # Certification data
│   │   ├── projects.json            # Project data
│   │   └── i18n/                    # Translation files (en.js, es.js)
│   ├── pages/                       # Page components (Home.jsx)
│   ├── styles/                      # CSS stylesheets
│   │   ├── global.css               # Global styles
│   │   ├── reset.css                # CSS reset
│   │   ├── variables.css            # CSS custom properties
│   │   └── [component].css          # Component-specific styles
│   ├── utils/                       # Utility functions
│   │   └── motions/                 # Animation configurations (Framer Motion)
│   ├── App.jsx                      # Main app component
│   └── main.jsx                     # Entry point, renders App with providers
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── README.md                        # This file
├── vercel.json                      # Vercel deployment configuration
└── vite.config.js                   # Vite configuration
```

Key directories:
- `components/`: Houses all UI components, organized by type (background, common, layout, sections) for maintainability.
- `data/`: Contains static JSON data for projects and certifications, plus i18n files for translations.
- `styles/`: Centralized CSS with global styles, resets, and component-specific files.
- `utils/`: Utility functions, including animation variants for Framer Motion.

## Installation
Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/emamontenegro/portfolio-emnauel.git
   cd portfolio-emnauel
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   No environment variables are required for this project, as it is a static frontend application with no backend integration or external APIs.

4. **Run the project**:
   ```bash
   npm run dev
   ```
   The development server will start at `http://localhost:5173` (default Vite port).

## Available Scripts
- `npm run dev`: Starts the Vite development server with hot module replacement.
- `npm run build`: Builds the project for production into the `dist/` directory.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## API Reference
This project does not include a backend or API endpoints. All data is static and loaded from local JSON files.

## Database
No database is used in this project. Data is stored in static JSON files (`projects.json`, `certifications.json`) within the `src/data/` directory.

## Features
- **Multilingual Support**: Toggle between English and Spanish using the language switcher in the header.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Smooth Scrolling Navigation**: Header links use React Scroll for seamless in-page navigation.
- **Animated Sections**: Framer Motion provides entrance animations for sections and components.
- **Project Showcase**: Displays personal projects with descriptions, tech stacks, live demos, and source code links.
- **Certifications Display**: Shows professional certifications with images and details.
- **Contact Section**: Includes contact information and a WhatsApp link with pre-filled message.
- **CV Download**: Links to downloadable CVs in English and Spanish.
- **Tech Background**: Animated background component for visual appeal.

## Usage Flow
1. User lands on the homepage, greeted by the Hero section with name, role, and call-to-action buttons.
2. Navigation via header links or scrolling allows access to different sections: About, Projects, Experience, Contact.
3. In the Projects section, users can view project cards with details, demo links, and code repositories.
4. Language can be switched at any time using the toggle in the header, updating all text content.
5. Contact section provides ways to get in touch, including copying email or opening WhatsApp.
6. Footer contains additional links and information.

## Error Handling
The application does not implement specific error handling mechanisms, as it is a static site with no dynamic data fetching or user inputs that could fail. Components render based on static data, and any missing assets (e.g., images) would result in broken images, handled by the browser's default behavior.

## Future Improvements
- Integrate a backend (e.g., Node.js with Express) for dynamic content management.
- Add a contact form with email sending functionality.
- Implement a blog section for articles or updates.
- Enhance accessibility (ARIA labels, keyboard navigation).
- Add unit and integration tests (e.g., using Jest and React Testing Library).
- Optimize performance further with code splitting and lazy loading.
- Implement a dark/light theme toggle.

## Author
Emanuel Montenegro - Frontend Developer  
[LinkedIn](https://linkedin.com/in/emanuelmontenegro) | [GitHub](https://github.com/emamontenegro) | emanuelmontenegro.dev@gmail.com
