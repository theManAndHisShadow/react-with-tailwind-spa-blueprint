import AppConfig from '../../../../../global.config';

import React from 'react';
import { Helmet } from "react-helmet";

import BluePrintOverlay from '../components/BluePrintOverlay';
import GlassContainer from '../components/GlassContainer';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>{AppConfig.name} - Main page</title>
      </Helmet>

      <BluePrintOverlay darken={0.6}>
        <GlassContainer hoverOpacity={0.1} size="medium" className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-snug text-center">
            React SPA Blueprint
          </h3>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
            This template is designed to simplify the rapid development of small applications written in TypeScript and React.
            It provides a solid foundation for creating single-page applications (SPA) with modern tools and best practices.
          </p>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
            The current implementation includes several key libraries and features out-of-the-box:
          </p>

          <ul className="list-disc list-inside text-white/80 text-base md:text-lg leading-relaxed mb-4 space-y-2">
            <li><strong>React Router:</strong> for declarative client-side routing and navigation.</li>
            <li><strong>React Helmet:</strong> for managing document head, page titles, and meta tags.</li>
            <li><strong>Redux Store:</strong> fully set up for global state management, with support for async actions.</li>
            <li><strong>TailwindCSS:</strong> utility-first styling framework, including community-built components for rapid UI development.</li>
            <li><strong>TypeScript:</strong> strong typing for safer and more maintainable code.</li>
          </ul>

          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Additionally, the template is structured to allow easy addition of new pages, components, and features.
            You can quickly start building your application while keeping code clean, modular, and scalable.
          </p>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mt-4">
            This makes it ideal for prototypes, small projects, or even as a base for more complex React applications.
          </p>
        </GlassContainer>

      </BluePrintOverlay>
    </>
  );
};

export default MainPage;
