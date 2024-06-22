

function Ihealth() {
  return (
    <div className="min-h-screen bg-gray-100 p-11 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg flex overflow-hidden" style={{ width: '100%', height: '100vh' }}>
        {/* Left Section */}
        <div className="p-6 w-2/3">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Health Insurance Plans for Family</h2>
          <p className="text-gray-700 mb-6">The financial security of your family is essential to afford medical care today. Family health insurance... <a href="#" className="text-blue-600">Read More</a></p>
          <ul>
            <li className="flex items-center mb-4">
              <span className="bg-blue-200 text-blue-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">📍</span>
              <span>30 minutes claim support<sup>##</sup> (In 120+ cities)</span>
            </li>
            <li className="flex items-center mb-4">
              <span className="bg-blue-200 text-blue-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">👨‍💼</span>
              <span>Relationship manager for every customer</span>
            </li>
            <li className="flex items-center mb-4">
              <span className="bg-blue-200 text-blue-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">⏰</span>
              <span>24*7 claims assistance in 30 mins. guaranteed<sup>*</sup></span>
            </li>
            <li className="flex items-center mb-4">
              <span className="bg-blue-200 text-blue-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">📄</span>
              <span>Instant policy issuance, no medical tests<sup>*</sup></span>
            </li>
          </ul>
          <div className="flex items-center mt-6">
            <div className="text-center mr-6">
              <div className="text-2xl font-bold text-blue-900">6.7 crore</div>
              <div className="text-gray-500">Registered consumers</div>
            </div>
            <div className="text-center mr-6">
              <div className="text-2xl font-bold text-blue-900">51</div>
              <div className="text-gray-500">Insurance partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">3.4 crore</div>
              <div className="text-gray-500">Policies sold</div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="bg-gray-50 p-6 w-1/3">
          <div className="text-gray-600 mb-4">Welcome back Gdgdg 👋</div>
          <div className="text-lg font-bold mb-2">Previously you searched health insurance for</div>
          <div className="border p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <span className="bg-blue-200 text-blue-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">👤</span>
              <span>Self (24 yrs)</span>
            </div>
            <div className="flex items-center">
              <span className="bg-yellow-200 text-yellow-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">📍</span>
              <span>City: Gurgaon (NCR)</span>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg mb-2">View all plans ›</button>
          <a href="#" className="block text-center text-blue-600">Start a new search ›</a>
          <p className="text-gray-500 text-xs mt-6">By clicking on “Continue”, you agree to our <a href="#" className="text-blue-600">Privacy Policy</a> and <a href="#" className="text-blue-600">Terms of use</a></p>
        </div>
      </div>
    </div>
  );
}

export default Ihealth;
