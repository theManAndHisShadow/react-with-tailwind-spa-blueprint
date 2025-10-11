import AppConfig from '../../../../../global.config';

import React from 'react';
import { Helmet } from "react-helmet";

import BluePrintOverlay from '../components/BluePrintOverlay';
import GlassContainer from '../components/GlassContainer';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>{AppConfig.name} - Page not found</title>
      </Helmet>

      <BluePrintOverlay darken={0.5}>
        <GlassContainer hoverOpacity={0.15} size="large" className="max-w-3xl mx-auto p-10 text-center">
          
          <div className="text-9xl md:text-[12rem] font-extrabold text-white flex justify-center gap-4 mb-6">
            <span className="transform hover:scale-110 transition-transform duration-300 ease-out">4</span>
            <span className="transform hover:scale-110 transition-transform duration-300 ease-out">0</span>
            <span className="transform hover:scale-110 transition-transform duration-300 ease-out">4</span>
          </div>

          {/* Юмор + текст */}
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-10">
            Oops! You got lost 😅
          </h3>

          <Link 
            to="/" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                           font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                           focus:outline-none dark:focus:ring-blue-800"
          >
            Go to main
          </Link>

        </GlassContainer>
      </BluePrintOverlay>
    </>
  );
};

export default PageNotFound;
