import React from 'react'

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">SIGN UP</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="f-name" className="block text-gray-700">First Name</label>
            <input
              type="text"
              id="f-name"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              name="First-name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="l-name" className="block text-gray-700">Last Name</label>
            <input
              type="text"
              id="l-name"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              name="Last-name"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4 text-center">
            <button
              type="button"
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={() => alert('Forgot Password clicked')}
            >
              Forgot Password?
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
