import React from 'react';
import { Link } from 'react-router-dom';

function UserManagement() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6 animate-fade-in-down">
        User Management
      </h1>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
        <p className="text-gray-600 mb-4">
          View, edit, or delete user accounts. Add new admins or users.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-colors">
          Add New User
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

export default UserManagement;
