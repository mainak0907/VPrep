'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

import Toast from '@/components/toast';

// Custom Axios instance
const api = axios.create({
  baseURL: 'https://prepify-server-side.onrender.com/api',
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

const areasOfInterestOptions = [
  { value: 'C', label: 'C' },
  { value: 'REACT', label: 'React' },
  { value: 'Javascript', label: 'JavaScript' },
  { value: 'Node.Js', label: 'Node.js' },
  { value: 'Python', label: 'Python' },
  { value: 'Java', label: 'Java' },
  { value: 'C++', label: 'C++' },
  { value: 'C#', label: 'C#' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'PHP', label: 'PHP' },
    { value: 'Swift', label: 'Swift' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'Dart', label: 'Dart' },
    { value: 'Go', label: 'Go' },
    { value: 'Rust', label: 'Rust' },
    { value: 'Scala', label: 'Scala' },
    { value: 'Haskell', label: 'Haskell' },
    { value: 'R', label: 'R' },
    { value: 'SQL', label: 'SQL' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'PostgreSQL', label: 'PostgreSQL' },
    { value: 'MySQL', label: 'MySQL' },
    { value: 'SQLite', label: 'SQLite' },
    { value: 'Firebase', label: 'Firebase' },
    { value: 'AWS', label: 'AWS' },
    { value: 'Azure', label: 'Azure' },
    { value: 'GCP', label: 'GCP' },
    { value: 'Docker', label: 'Docker' },
    { value: 'Kubernetes', label: 'Kubernetes' },
    { value: 'Jenkins', label: 'Jenkins' },
    { value: 'Git', label: 'Git' },
    { value: 'CI/CD', label: 'CI/CD' },
    { value: 'Agile', label: 'Agile' },
    { value: 'Scrum', label: 'Scrum' },
    { value: 'Kanban', label: 'Kanban' },
    { value: 'TDD', label: 'TDD' },
    { value: 'BDD', label: 'BDD' },
    { value: 'DevOps', label: 'DevOps' },
    { value: 'Microservices', label: 'Microservices' },
    { value: 'REST', label: 'REST' },
    { value: 'GraphQL', label: 'GraphQL' },
    { value: 'WebSockets', label: 'WebSockets' },
    { value: 'WebRTC', label: 'WebRTC' },
    { value: 'WebAssembly', label: 'WebAssembly' },
    { value: 'WebGL', label: 'WebGL' },
];

const SignupFormDemo = ({ onSignUp }: { onSignUp: () => void }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    aoi: [],
  });

  const [showToast, setShowToast] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);

    try {
        const response = await api.post('/users/register', formData);

        console.log('Form submitted successfully:', response.data);

        if (response.data && response.data.token) {
            // Store the JWT token in local storage
            localStorage.setItem('jwt', response.data.token);

            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                onSignUp();
            }, 500);
        } else {
            console.error('Unexpected response structure:', response);
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);

            if (error.response) {
                console.error('Server response:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            }
        } else {
            console.error('Unexpected error:', error);
        }
    }
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSelectChange = (selectedOptions: any) => {
    const aoi = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setFormData((prevData) => ({ ...prevData, aoi }));
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black text-black dark:text-white">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Welcome to Prepify</h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="1234567890"
            type="text"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="aoi">Areas of Interest</Label>
          <Select
            id="aoi"
            options={areasOfInterestOptions}
            isMulti
            onChange={handleSelectChange}
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>

      {showToast && <Toast message="User registered successfully. Redirecting..." />}
    </div>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};

const Label = ({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {children}
    </label>
  );
};

const Input = ({ id, ...props }: { id: string, [key: string]: any }) => {
  return (
    <input
      id={id}
      {...props}
      className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black dark:text-white bg-white dark:bg-gray-800"
    />
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default SignupFormDemo;
