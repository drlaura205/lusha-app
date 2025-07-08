import React, { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return alert("All fields are required");
    alert("Login successful (demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input name="email" onChange={handleChange} type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded" />
        <input name="password" onChange={handleChange} type="password" placeholder="Password" className="w-full mb-6 p-3 border rounded" />
        <button type="submit" className="bg-blue-600 text-white w-full p-3 rounded hover:bg-blue-700">Login</button>
        <p className="text-center mt-4 text-sm">Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a></p>
      </form>
    </div>
  );
}
