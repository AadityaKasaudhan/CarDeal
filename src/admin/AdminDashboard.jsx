import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-600 animate-fade-in">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          to="/car-management"
          className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Manage Cars</h2>
          <p className="text-gray-600">View, edit, or delete car listings</p>
        </Link>

        <Link
          to="/user-management"
          className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Manage Users</h2>
          <p className="text-gray-600">View, manage, or delete user accounts</p>
        </Link>

        <Link
          to="/transactions"
          className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Transactions</h2>
          <p className="text-gray-600">View and manage car sale transactions</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
