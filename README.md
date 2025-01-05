# Portfolio Website - RMCodes.dev

A modern, responsive portfolio website built with React and TailwindCSS, featuring project showcases, skills presentation, and integrated documentation systems.

## Features

### Core Components
- **Dynamic Project Showcase**: Interactive project cards with detailed modal views
- **Comprehensive Project Documentation**: Markdown-based documentation system with smooth navigation
- **Skills Section**: Categorized presentation of technical skills and technologies
- **Contact Form**: Interactive contact form with EmailJS integration
- **Responsive Design**: Full mobile responsiveness with modern animations

### Technical Highlights
- Modern React patterns and hooks
- Component-based architecture
- Efficient routing with React Router
- Markdown rendering for documentation
- Email integration for contact form
- Custom animations and transitions
- Comprehensive documentation viewer

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.3.0 or higher)
- npm (v9.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── contact.jsx     # Contact form component
│   │   ├── hero.jsx        # Hero section component
│   │   ├── manual.jsx      # Documentation viewer
│   │   ├── projects.jsx    # Projects showcase
│   │   └── skills.jsx      # Skills section
│   ├── assets/             # Static assets
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── public/
│   ├── manuals/           # Markdown documentation files
│   └── img/               # Image assets
└── ...configuration files
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run format`: Format code using BiomeJS
- `npm run lint`: Lint code using BiomeJS
- `npm run check`: Run BiomeJS checks and apply fixes

## Configuration Files

### Tailwind Configuration
The project uses a custom Tailwind configuration (`tailwind.config.js`) with:
- Custom color palette
- Custom fonts (Inter and Poppins)
- Custom spacing and animations
- Typography plugin configuration

### BiomeJS Configuration
Code formatting and linting is handled by BiomeJS (`biome.json`) with:
- Custom formatting rules
- Tab-based indentation
- Double quotes for strings
- Organized imports

## Documentation System

The project includes a comprehensive documentation system for showcasing detailed project information:

1. **Structure**: Documentation is written in Markdown format and stored in `/public/manuals/`
2. **Navigation**: Interactive table of contents with smooth scrolling
3. **Components**: 
   - Responsive layout with sidebar navigation
   - Image preview system
   - Markdown rendering with syntax highlighting

## Deployment

This project is set up for easy deployment to platforms like Netlify or Vercel. Ensure you:

1. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node.js version: 18.x

2. Set up environment variables in your deployment platform:
   - Add all EmailJS credentials
   - Configure any other necessary environment variables

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Rohan Matharu - rohanmatharu@live.ca

Project Link: [https://github.com/crazyturtles/react-portfolio](https://github.com/crazyturtles/react-portfolio)

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [React Router](https://reactrouter.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [BiomeJS](https://biomejs.dev/)
