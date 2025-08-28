import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'


function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const userLogin = async(data) => {
    await axios.post('http://localhost:5000/api/auth/login', {
    email: data.email,
    password: data.password,
  })
  .then(function (response) {
    console.log(response);
    alert("Logged In Successfull")
  })
  .catch(function (error) {
    console.log(error);
  });
};

  const password = watch('password');

  return (
    <div className="max-w-md mx-auto p-6 bg-green-400 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit(userLogin)} noValidate className="space-y-4">
     
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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
        Login
        </button>
      </form>
    </div>
  )
}

export default Login
