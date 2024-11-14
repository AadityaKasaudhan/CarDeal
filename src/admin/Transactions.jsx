import React from 'react';
import { Link } from 'react-router-dom';

function Transactions() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6 animate-fade-in-down">
        Transactions
      </h1>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
        <p className="text-gray-600 mb-4">
          View and manage all car sale transactions made through the platform.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors">
          Export Transactions
        </button>
      </div>
      <Link
        to="/AdminDashboard"
        className="mt-6 inline-block text-blue-600 hover:text-blue-800"
      >
        Go Back to Dashboard
      </Link>
    </div>
  );
}

export default Transactions;
