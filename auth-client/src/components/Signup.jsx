import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const userRegister = async(data) => {
    console.log('Signup Data:', data);
    console.log('Signup Data:', data.fullName);
    // const response = await axios.post('http://localhost:5000/api/auth/signup', );
    await axios.post('http://localhost:5000/api/auth/signup', {
    name: data.fullName,
    email: data.email,
    password: data.password,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  };

  const password = watch('password');

  return (
    <div className="max-w-md mx-auto p-6 bg-blue-400 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
      <h4 className="text-center text-md mb-6">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-800 underline hover:text-blue-900">
          Login
        </Link>
      </h4>
      <form onSubmit={handleSubmit(userRegister)} noValidate className="space-y-4">
    
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            {...register('fullName', {
              required: 'Full Name is required',
              minLength: {
                value: 3,
                message: 'Full Name must be at least 3 characters',
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

     
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email',
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

      
        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>


        <div>
          <label className="block font-medium">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
            className="w-full border p-2 rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
