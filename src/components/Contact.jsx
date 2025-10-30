import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact</h2>
      <p className="text-lg text-gray-600 mb-4">
        Email: <a href="mailto:nasferi@gmu.edu" className="text-blue-500 hover:text-blue-700 transition-colors">nasferi@gmu.edu</a>
      </p>
      <p className="text-lg text-gray-600">
        <a href="https://linkedin.com/in/nathan-asferi" className="text-blue-500 hover:text-blue-700 transition-colors font-medium">LinkedIn</a> | 
        <a href="https://github.com/NateAsferi" className="text-blue-500 hover:text-blue-700 transition-colors font-medium ml-2">GitHub</a>
      </p>
    </section>
  );
}

export default Contact;