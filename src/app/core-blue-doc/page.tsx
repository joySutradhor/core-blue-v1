import React from 'react';

const CoreBlueDocumentation: React.FC = () => {
  return (
    <div className="p-8 text-gray-800 bg-gray-100 py-20 ">
      <h1 className="text-3xl font-bold mb-6">CoreBlue - Next.js TypeScript Theme Documentation</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p>
          CoreBlue v1 is a professional, high-performance theme built with Next.js and TypeScript, designed for fast, interactive, and responsive websites. This theme utilizes modern front-end libraries, including Tailwind CSS, Framer Motion, and Recharts, to provide smooth animations, theme switching, and interactive data visualization.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside">
          <li>TypeScript Support: Ensures better code quality with strong type-checking.</li>
          <li>Tailwind CSS: A responsive, utility-first CSS framework.</li>
          <li>Framer Motion Animations: Enables smooth and engaging animations.</li>
          <li>Theme Switching: Light/Dark theme support via next-themes.</li>
          <li>Interactive Charts: Data visualization using Recharts.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <h3 className="text-xl font-semibold mb-2">Prerequisites</h3>
        <p>Ensure you have Node.js (version 14 or later) and Yarn installed.</p>

        <h3 className="text-xl font-semibold mb-2">Installation</h3>
        <ol className="list-decimal list-inside mb-4">
          <li>
            <strong>Clone the Repository:</strong>
            <pre className="bg-gray-200 p-2 rounded-md">
              <code>git clone &lt;repository_url&gt;{"\n"}cd coreblue-v1</code>
            </pre>
          </li>
          <li>
            <strong>Install Dependencies:</strong>
            <pre className="bg-gray-200 p-2 rounded-md">
              <code>yarn install</code>
            </pre>
          </li>
        </ol>

        <h3 className="text-xl font-semibold mb-2">Development</h3>
        <p>To start the development server, use the following command:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          <code>yarn dev</code>
        </pre>
        <p>This will start the development server on <strong>http://localhost:3000</strong>.</p>

        <h3 className="text-xl font-semibold mb-2">Building for Production</h3>
        <p>To build the project for production, run:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          <code>yarn build</code>
        </pre>
        <p>After building, you can start the optimized production server with:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          <code>yarn start</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
        <pre className="bg-gray-200 p-4 rounded-md whitespace-pre">
          <code>
            {`coreblue-v1/
├── .next/                  # Compiled Next.js files (generated after build)
├── node_modules/           # Project dependencies
├── public/                 # Static assets (images, fonts, etc.)
├── src/                    # Main source code
│   ├── app/                # Application-level code
│   │   ├── globals.css     # Global CSS styles
│   │   ├── layout.tsx      # Layout component for consistent structure across pages
│   │   ├── page.tsx        # Main page component
│   │   ├── Provider.tsx    # Global context provider
│   │   └── ThemeSwitcher.tsx # Theme switcher component for light/dark mode
│   ├── components/         # Reusable components
│   │   ├── About/          # About section
│   │   ├── Banner/         # Banner section
│   │   ├── Blogs/          # Blog section
│   │   ├── Contact/        # Contact section
│   │   ├── Footer/         # Footer component
│   │   ├── Nav/            # Navigation bar
│   │   ├── Packages/       # Packages section
│   │   ├── Portfolio/      # Portfolio section
│   │   ├── Process/        # Process section
│   │   ├── Service/        # Services section
│   │   ├── StayUpdate/     # Stay updated section
│   │   ├── Team/           # Team section
│   │   ├── Testimonial/    # Testimonials section
│   │   ├── utilities/      # Utility functions
│   │   ├── variant.js      # Variants for animations
│   │   └── interfaces/     # TypeScript interfaces and types
├── .eslintrc.json          # ESLint configuration
├── package.json            # Project metadata and scripts
├── yarn.lock               # Yarn lock file for consistent dependency versions
└── README.md               # Project documentation`}
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Important Files</h2>
        <ul className="list-disc list-inside">
          <li><strong>globals.css:</strong> Contains global CSS rules, including Tailwind configurations.</li>
          <li><strong>layout.tsx:</strong> Wraps all pages to provide a consistent structure and theme.</li>
          <li><strong>Provider.tsx:</strong> Context provider for state and global data management.</li>
          <li><strong>ThemeSwitcher.tsx:</strong> Manages the light/dark theme toggle functionality.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Scripts</h2>
        <ul className="list-disc list-inside">
          <li><code>yarn dev</code>: Starts the development server.</li>
          <li><code>yarn build</code>: Builds the application for production.</li>
          <li><code>yarn start</code>: Runs the production build.</li>
          <li><code>yarn lint</code>: Lints the code using ESLint for consistent code quality.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dependencies</h2>

        <h3 className="text-xl font-semibold mb-2">Main Dependencies</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>@emotion/react:</strong> CSS-in-JS library for styling components.</li>
          <li><strong>framer-motion:</strong> Animation library for adding interactive effects.</li>
          <li><strong>next-themes:</strong> Enables light and dark mode theming.</li>
          <li><strong>react-alice-carousel:</strong> Carousel component for image galleries.</li>
          <li><strong>react-awesome-reveal:</strong> Scroll reveal animations.</li>
          <li><strong>react-countup:</strong> Animated counter component.</li>
          <li><strong>recharts:</strong> Library for data visualizations and charts.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Development Dependencies</h3>
        <ul className="list-disc list-inside">
          <li><strong>@types/*:</strong> TypeScript type definitions for Node.js and React.</li>
          <li><strong>autoprefixer:</strong> Adds vendor prefixes to CSS rules.</li>
          <li><strong>eslint and eslint-config-next:</strong> Code quality tools to catch errors and maintain consistency.</li>
          <li><strong>postcss:</strong> Tool for transforming CSS, used with Tailwind CSS.</li>
          <li><strong>tailwindcss:</strong> Utility-first CSS framework for styling.</li>
          <li><strong>typescript:</strong> Static typing for JavaScript.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>

        <h3 className="text-xl font-semibold mb-2">Theme Customization</h3>
        <p>You can customize the theme colors by modifying the <code>tailwind.config.js</code> file. Add or change colors in the <code>extend</code> section to tailor the theme to your brand.</p>

        <h3 className="text-xl font-semibold mb-2">Component Customization</h3>
        <p>Each component is designed for easy modification. Check the <code>src/components</code> directory to find the files for each section. You can change styles, content, and structure according to your needs.</p>
      </section>

      <footer className="mt-8 border-t pt-4 text-center">
        <p className="text-gray-600">© 2024 CoreBlue. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CoreBlueDocumentation;
