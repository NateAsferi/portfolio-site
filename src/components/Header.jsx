import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        
        {/* H1 and Nav */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0 sm:mr-8">Nathan Asferi</h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
        
      </div>

      {/* Hero Section */}
      <section className="hero bg-gray-900 text-center py-12 px-4">
        <h2 className="text-4xl font-light mb-4 text-blue-400">Aspiring Software Engineer</h2>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Driven by curiosity, creativity, and the excitement of bringing ideas to life through code.
        </p>
      </section>
    </header>
  );
}

export default Header;