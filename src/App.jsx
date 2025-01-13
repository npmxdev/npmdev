import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Certification from './components/Certification';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
    </div>
  );
};



export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return() => clearTimeout(timer);
  },[]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
      <div>
        <div className="fixed inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="selection:text-white cursor-crosshair selection:bg-orange-500 text-xl">
            <div className="relative h-full w-full flex flex-col sm:flex-row">
              <Sidebar />
              <div className="w-full flex flex-col justify-center lg:pl-52 sm:pl-0 overflow-hidden">
                <Home />
                <About />
                <Project />
                <Certification />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}