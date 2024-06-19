import React from 'react';

const GovSchem = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-screen-lg mx-auto">
        {/* Header */}
        <div className="bg-green-600 p-6">
          <h2 className="text-3xl font-bold text-white">Government Schemes for Health Insurance</h2>
          <p className="text-white mt-2">Explore various government schemes designed to provide health insurance coverage and support for you and your family.</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <ul>
            <li className="flex items-center mb-6">
              <div className="bg-green-200 text-green-900 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-900">Ayushman Bharat Yojana</h3>
                <p>Provides health cover of up to ₹5 lakhs per family per year.</p>
              </div>
            </li>
            <li className="flex items-center mb-6">
              <div className="bg-green-200 text-green-900 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <span className="text-2xl">💊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-900">Pradhan Mantri Suraksha Bima Yojana</h3>
                <p>Accidental insurance cover for death or disability.</p>
              </div>
            </li>
            <li className="flex items-center mb-6">
              <div className="bg-green-200 text-green-900 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <span className="text-2xl">🩺</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-900">Rashtriya Swasthya Bima Yojana</h3>
                <p>Provides health insurance coverage to BPL families.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GovSchem;
 
