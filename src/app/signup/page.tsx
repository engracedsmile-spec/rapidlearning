import { GalleryVerticalEnd } from 'lucide-react';

import { SignupForm } from '@/components/signup-form';

export default function SignupPage() {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex justify-center gap-2 md:justify-start'>
          <a href='#' className='flex items-center gap-2 font-medium'>
            <img
              src='/TravelDark.svg'
              alt='Image'
              className=' justify-center mb-2 w-30'
            />
          </a>
        </div>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-xs'>
            <SignupForm />
          </div>
        </div>
      </div>
      <div
        className='order-1 bg-cover bg-center relative hidden lg:block'
        style={{ backgroundImage: "url('/sbts2.png')" }}
      >
        <div className='absolute inset-0 bg-blue-800 opacity-30'></div>
        <div className='absolute  inset-0 flex flex-col items-center justify-center p-4'>
          <img
            src='/TravelDesk.svg'
            alt='Image'
            className=' justify-center mb-2 w-30'
          />

          <h1 className='text-white text-3xl font-bold'>
            Create TravelDesk247 Account
          </h1>

          <p className='text-white mt-2'>
            Enjoy 24/7 Global stress free Travel Service
          </p>
        </div>
      </div>
    </div>
  );
}
