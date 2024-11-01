import React from 'react';

const CoreBlueDocumentation: React.FC = () => {
    return (
        <div className="p-8 text-gray-800 bg-gray-100 py-20 overflow-hidden ">
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
                <h2 className="text-2xl font-semibold mb-4">Packages Used</h2>
                <ul className="list-disc list-inside">
                    <li><code>@emotion/react</code></li>
                    <li><code>framer-motion</code></li>
                    <li><code>next</code></li>
                    <li><code>next-themes</code></li>
                    <li><code>react-alice-carousel</code></li>
                    <li><code>react-awesome-reveal</code></li>
                    <li><code>react-countup</code></li>
                    <li><code>react-dom</code></li>
                    <li><code>react-icons</code></li>
                    <li><code>recharts</code></li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Image Sources</h2>
                <ul className="list-disc list-inside">
                    <li><strong>Freepik:</strong> <a href="https://www.freepik.com/" target='_blank' className="text-blue-600 underline">unsplash.com</a></li>
                    <li><strong>Dribbble:</strong> <a href="https://dribbble.com/" target='_blank' className="text-blue-600 underline">pixabay.com</a></li>
                    
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <h3 className="text-xl font-semibold mb-2">Prerequisites</h3>
                <p>Ensure you have Node.js (version 14 or later) and Yarn installed.</p>

                <h3 className="text-xl font-semibold mb-2 mt-10">Installation</h3>
                <ol className="list-decimal list-inside mb-4">
                    <li className='mt-5'>
                        <strong>Install Dependencies:</strong>
                        <pre className="bg-gray-200 w-auto p-2 rounded-md">
                            <code>yarn install</code>
                        </pre>
                    </li>
                </ol>

                <h3 className="text-xl font-semibold mb-1 mt-10">Development</h3>
                <p>To start the development server, use the following command:</p>
                <pre className="bg-gray-200 w-auto p-2 rounded-md mt-1 mb-2">
                    <code>yarn dev</code>
                </pre>
                <p>This will start the development server on <strong>http://localhost:3000</strong>.</p>

                <h3 className="text-xl font-semibold mb-2 mt-10">Building for Production</h3>
                <p className='mb-1'>To build the project for production, run:</p>
                <pre className="bg-gray-200 w-auto p-2 rounded-md mb-2">
                    <code>yarn build</code>
                </pre>
                <p className='mb-1'>After building, you can start the optimized production server with:</p>
                <pre className="bg-gray-200 w-auto p-2 rounded-md">
                    <code>yarn start</code>
                </pre>
            </section>


            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
                <pre className="bg-gray-200 w-auto p-4 rounded-md whitespace-pre">
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
│   │   ├── Projects/       # Projects section
│   │   └── Team/          # Team section
│   └── styles/             # Additional styles (if any)
├── .gitignore              # Git ignore file
├── next.config.js          # Next.js configuration
├── package.json            # Project metadata and dependencies
└── tsconfig.json           # TypeScript configuration
`}
                    </code>
                </pre>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">User Guide: Changing CSS Styles from Global CSS</h2>
                <p>To customize the appearance of your CoreBlue theme, you can modify the global CSS file located in <code>src/app/globals.css</code>. Below are some key areas where you can change styles:</p>

                <h3 className="text-xl font-semibold mb-2 mt-4"># Step 1 : global.css styles tree </h3>
                <p className='mb-2'>In global.css you can see style tree here .</p>
                <pre className="bg-gray-200 w-auto p-2 rounded-md">
                    <code>{`
/* styles index tree */
/* --- Common styles */
/* --- Nav styles */
/* -- Banner styles */
/* -- About styles */
/* -- Portfolio styles */
/* -- Workflow styles */
/* -- Services styles */
/* -- Packages styles */
/* -- Our team styles */
/* -- contact  styles */
/* -- Testimonial styles */
/* -- Blogs styles */
/* -- Footer styles */
                    
                    
                    `}</code>
                </pre>

                <h3 className="text-xl font-semibold mb-2 mt-10"># Step 2 : Here is common css for using globally in this project </h3>
                <p className='mb-2'>You can define additional styles specific to your project. For example:</p>
                <pre className="bg-gray-200 w-auto p-2 rounded-md ">
                    <code>{`
/* ============= common styles start =========== */
  .cb__section__gap {
    @apply px-[5%] pt-16 md:pt-24 md:px-[8%] lg:pt-32 lg:px-[6%] xl:pt-[160px] xl:px-[5.56%];
  }

  .cb__footer__space {
    @apply px-[3.5%] xl:px-[5.56%] py-24;
  }

  .cb__primary__bg {
    @apply bg-[#070F2B];
  }

  .cb__secondaray__bg {
    @apply bg-[#0F1A3D] dark:bg-[#d9d9d9];
  }

  .cb__border {
    @apply border-[#0F1A3D] rounded border-[1px];
  }

  .cb__btn__styles {
    @apply py-2 px-4 text-xs text-white dark:text-black/80 dark:hover:border-transparent dark:hover:bg-black/90 dark:hover:text-white 
    md:py-2 md:px-8 hover:border-white/15 md:text-sm xl:text-base font-semibold font-albert transition-colors duration-1000 ease-in-out;
  }

  .cb__short__title {
    @apply text-xs md:text-sm xl:text-base font-poppins text-[#9290C3] dark:text-black/80 animate-pulse uppercase;
  }

  .cb__heading {
    @apply text-sm md:text-2xl lg:text-3xl xl:text-4xl text-white dark:text-black/80 dark:text-[#020202] font-bold font-poppins py-3 md:py-3 xl:py-5 ;
  }

  .cb__heading__des {
    @apply text-sm md:text-base xl:text-lg font-albert px-[5%] md:px-[9%] xl:px-[25%] lg:px-[15%] text-white dark:text-black/80 dark:text-black/80;
  }

  .cb__heading__des__left {
    @apply text-sm md:text-base xl:text-lg font-albert text-white dark:text-black/80 dark:text-black/80;
  }

  .cb__sectionHeader__left {
    @apply grid lg:grid-cols-2 items-center;
  }

  .cb__section__center {
    @apply flex place-content-center;
  }

  .cb__section__bottom {
    @apply md:pb-12 pb-7;
  }

/* ============= common styles End =========== */                  
`}</code>
                </pre>

                <h3 className="text-xl font-semibold mb-2 mt-10">Step 3 : Nav styles here [You can change nav styles from here ]</h3>
                <p className='mb-2'>If you want to change styles in nav bar then you can modify those clases</p>
                <pre className="bg-gray-200 w-auto p-2 rounded-md">
                    <code>{`
  /* --- Nav item styles  start */
  .cb__nav__gap {
    @apply px-[5%] py-8  md:px-[8%]  md:py-14 lg:px-[6%] xl:px-[5.56%];
  }

  .cb__nav__container {
    @apply flex justify-between items-center;
  }

  .cb__nav__logo {
    @apply sm:text-sm md:text-xl text-white dark:text-black/80 font-bold font-poppins;
  }

  .cb__nav__desktop {
    @apply lg:flex  lg:items-center lg:gap-5 xl:gap-8 hidden;
  }

  .cb__nav__desktopItem {
    @apply sm:text-sm md:text-base font-semibold font-poppins text-white/75 hover:text-white dark:text-black/80 transition-all duration-300 ease-in-out;
  }

  .cb__nav__toggole__icon {
    @apply cursor-pointer;
  }

  .cb__nav__toggleMenu {
    @apply lg:hidden flex items-center text-white dark:text-black/80;
  }

  .cb__nav__mobile {
    @apply lg:hidden py-8;
  }

  .cb__nav__mobile__wrapper {
    @apply flex items-center  gap-5 justify-center mt-4 space-y-2  lg:hidden;
  }

  .cb_nav__mobileItem {
    @apply block text-white dark:text-black/80 font-poppins text-lg mb-1;
  }

  /* --- Nav item styles  End */

                    `}</code>
                </pre>


                <h3 className="text-xl font-semibold mb-2 mt-10">Step 4 : Banner styles here [You can change banner styles from here ]</h3>
                <p className='mb-2'>If you want to change styles in banner then you can modify those clases</p>
                <pre className="bg-gray-200 w-auto p-2 rounded-md">
                    <code>{`                     
 /* -- Banner styles start */

  .cb__banner__gap{
    @apply px-[5%] pt-16 md:pt-24 md:px-[8%] lg:pt-20 lg:px-[6%] xl:pt-[100px] xl:px-[5.56%]
  }

  .cb__banner__parent {
    @apply grid xl:grid-cols-2  items-center gap-6 overflow-hidden md:grid-cols-1
  }

  .cb__bnner__title {
    @apply text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-5 md:mb-5 lg:mb-8 2xl:mb-10 text-white dark:text-black/80 font-albert font-bold  
  }

  .cb__bnner__des {
    @apply text-sm md:text-sm text-white dark:text-black/80 font-poppins font-normal lg:mb-5 xl:mb-5 2xl:mb-10
  }

  .cb__banner__counter{
      @apply flex py-10 md:py-5 gap-x-10 md:gap-x-16 text-white/75 dark:text-black/80
  }

  .cb__banner__counter__child{
    @apply border-r border-white/40 pr-10 md:pr-16 
  }
  .cb__banner__counter__title{
    @apply  text-xl xl:text-2xl 2xl:text-3xl font-poppins font-semibold
  }
  .cb__banner__counter__des{
    @apply text-xs md:text-sm 2xl:text-base font-poppins py-2
  }

  .cb__banner__clinet__wrapper{
    @apply flex gap-5 md:mt-5 items-center text-white/80 dark:text-black/80
  }
  .cb__banner__client__child{
    @apply flex gap-5 items-center relative
  }

  .cb__banner__client__img {
    @apply rounded-full size-8 md:size-10 object-cover
  }

  .cb__banner__client__absoulate{
    @apply absolute left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-4/12
  }

  .cb__banner__active__title{
    @apply text-lg font-poppins font-semibold
  }
  .cb__banner__active__des{
    @apply text-xs md:text-sm 2xl:text-base font-poppins
  }

  /* -- Banner styles end */
  
  `}</code>
                </pre>

            </section>



            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                <p>With CoreBlue, you have a robust foundation to create high-quality, responsive websites. Use the provided guidelines to customize and expand the theme according to your project needs.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Support Info [ 24/7]</h2>
                <p>resolveidea.com</p>
                <p>+8801771-569731</p>
                <p>webvault.official@gmail.com</p>
            </section>
        </div>
    );
};

export default CoreBlueDocumentation;
