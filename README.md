# Chandra Septian - Developer Portfolio

A modern, responsive, and interactive developer portfolio built to showcase my experience, skills, and projects as a Lead Software Engineer and Full Stack Developer.

## 🚀 Features

- **Next.js & TypeScript:** Built with modern web standards for performance and type safety.
- **Tailwind CSS:** Fully responsive, utility-first styling for a sleek design.
- **Global Dark Mode:** Seamlessly toggle between Light and Dark themes, with state persistence using `localStorage`.
- **Framer Motion Animations:** Smooth page transitions, scroll-triggered reveals, and interactive component animations.
- **Dynamic Project Details:** A robust architecture that renders detailed case studies via dynamic routing (`/project/[slug]`).
- **Interactive Timeline & Services:** Beautifully crafted components to display work experience and service offerings.
- **Smooth Navigation:** Implement seamless one-page anchor scrolling and sticky navigation.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 📂 Project Structure

```text
├── public/                 # Static assets (images, icons, favicons)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Base/           # Main page layout aggregator
│   │   ├── Footer/         # Footer component
│   │   ├── Hero/           # Animated hero section with typing effect
│   │   ├── Navbar/         # Sticky navigation with dark mode toggle
│   │   ├── Projects/       # Project tabs and centralized project data
│   │   ├── Services/       # Service offerings section
│   │   ├── Technologies/   # Tech stack showcase
│   │   └── Timeline/       # Experience timeline
│   ├── pages/              # Next.js routing
│   │   ├── _app.js         # Global app wrapper (Dark Mode state lives here)
│   │   ├── index.tsx       # Landing page
│   │   └── project/
│   │       └── [slug].tsx  # Dynamic project detail page
│   └── styles/             # Global CSS and Tailwind directives
```

## 💻 Getting Started

First, clone the repository and install the dependencies:

```bash
# Install dependencies
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
