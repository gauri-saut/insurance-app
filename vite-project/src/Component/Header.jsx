import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      <div className="bg-gray-200 flex justify-between items-center px-4 py-2 text-sm">
        <div className="flex space-x-4">
          <Link to='/Support'><div>Support</div></Link>
          <Link to='/About'><div>About Us</div></Link>
          <Link to='/Careers'><div>Careers</div></Link>
          <Link to='/Become-an-Agent'><div>Become an Agent</div></Link>
          <Link to='/Awards'><div>Awards</div></Link>
          <Link to='/Update-KYC'><div className="bg-orange-400 px-2 py-1 rounded text-white">Update KYC</div></Link>
        </div>
      </div>

      <div className="bg-blue-500 flex justify-between items-center px-4 py-4 mt-2 text-white text-lg relative">
        <div className="flex items-center space-x-2">
          <img src="/path-to-logo.png" alt="Logo" className="h-8" />
          <div>Bajaj Allianz</div>
        </div>

        <div className="flex space-x-4 items-center relative">
          <button onClick={() => handleDropdown('insure')} className="focus:outline-none">
            <div>Insure</div>
          </button>

          {activeDropdown === 'insure' && (
            <div className="absolute left-0 top-full bg-white shadow-lg mt-2 rounded-lg z-50">
              <Link to='/ihealth'><div className="px-4 py-2 text-black hover:bg-gray-200">Health Insurance</div></Link>
              <Link to='/imotor'><div className="px-4 py-2 text-black hover:bg-gray-200">Motor Insurance</div></Link>
            </div>
          )}

          <Link to='/Renew'><div>Renew</div></Link>
          <Link to='/Claim'><div>Claim</div></Link>
          <Link to='/Government'><div>Government Schemes</div></Link>
          <Link to='/insanjo'><div>Insurance Samjho</div></Link>
        </div>

        <div className="flex space-x-4 items-center">
          <Link to='/Login'><div>Login</div></Link>
          <Link to='/Signup'><div>Signup</div></Link>
          <i className="fas fa-search"></i>
          <i className="fas fa-phone"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
