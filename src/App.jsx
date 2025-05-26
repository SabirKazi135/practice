import React from 'react';
import Index from './index.jsx';

export default function App() {
  return (
    <div>
      <div class="flex min-h-screen items-center justify-center bg-gray-50 px-16">
        <div class="relative w-full max-w-lg">
          <div class="absolute -left-4 top-0 h-72 w-72 animate-blo rounded-full bg-purple-300 opacity-100 mix-blend-multiply filter"></div>
          <div class="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blo rounded-full bg-yellow-300 opacity-100 mix-blend-multiply filter"></div>
          <div class="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blo rounded-full bg-pink-300 opacity-100 mix-blend-multiply filter"></div>
          <div class="relative m-8 space-y-4">
            <div class="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
              <div class="flex-1">
                <div class="h-4 w-48 rounded bg-gray-300"></div>
              </div>
              <div>
                <div class="h-6 w-24 rounded-lg bg-purple-300"></div>
              </div>
            </div>
            <div class="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
              <div class="flex-1">
                <div class="h-4 w-56 rounded bg-gray-300"></div>
              </div>
              <div>
                <div class="h-6 w-20 rounded-lg bg-yellow-300"></div>
              </div>
            </div>
            <div class="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
              <div class="flex-1">
                <div class="h-4 w-44 rounded bg-gray-300"></div>
              </div>
              <div>
                <div class="h-6 w-28 rounded-lg bg-pink-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Index />
    </div>
  );
}
