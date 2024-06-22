import { useState } from 'react';

const Imotor = () => {
  const [selectedSI, setSelectedSI] = useState(500000); // Initial selected Sum Insured (SI)
  const [premium, setPremium] = useState(null); // State to store calculated premium
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: ''
  });
  const [purchaseSuccess, setPurchaseSuccess] = useState(false); // State to track if purchase was successful

  // Function to calculate premium based on selected SI
  const calculatePremium = () => {
    // Placeholder logic for premium calculation based on selectedSI
    // Replace with actual premium calculation logic as per your insurance plan
    const basePremiumRate = 0.1; // Example: 10% of SI
    const calculatedPremium = selectedSI * basePremiumRate;
    setPremium(calculatedPremium);
  };

  // Function to handle input change in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission (buy now)
  const handleBuyNow = (e) => {
    e.preventDefault();
    // Placeholder logic to handle form submission (buy now action)
    // Replace with actual buy now functionality (API call, etc.)
    // Simulating success here
    setPurchaseSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Motor Insurance</h2>

        {/* Sum Insured Selection */}
        <div className="mb-4">
          <label htmlFor="sumInsured" className="block text-sm font-medium text-gray-700">
            Select Sum Insured (₹)
          </label>
          <select
            id="sumInsured"
            name="sumInsured"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedSI}
            onChange={(e) => setSelectedSI(parseInt(e.target.value))}
          >
            <option value={500000}>₹500,000</option>
            <option value={1000000}>₹1,000,000</option>
            <option value={2000000}>₹2,000,000</option>
            <option value={3000000}>₹3,000,000</option>
            <option value={5000000}>₹5,000,000</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Calculate Premium Button */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-4"
          onClick={calculatePremium}
        >
          Calculate Premium
        </button>

        {/* Display Premium */}
        {premium !== null && (
          <p className="text-gray-800 mb-4">
            Premium for SI ₹{selectedSI.toLocaleString()} is ₹{premium.toLocaleString()}
          </p>
        )}

        {/* Buy Now Form */}
        {!purchaseSuccess ? (
          <form onSubmit={handleBuyNow}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="3"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              disabled={premium === null} // Disable button until premium is calculated
            >
              Buy Now
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-bold">Purchase successful! Check your email for confirmation.</p>
        )}
      </div>
    </div>
  );
};

export default Imotor;

