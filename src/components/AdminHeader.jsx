import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import toast from 'react-hot-toast';

const AdminHeader = () => {
  const { logout, admin } = useAdmin();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  return (
    <div className="bg-primary-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl">Admin Dashboard</h1>
      <div>
        <span className="mr-4">Welcome, {admin?.name}</span>
        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
      </div>
    </div>
  );
};

export default AdminHeader;

