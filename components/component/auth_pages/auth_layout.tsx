import React from 'react';
import { Login } from './Login';
import { SignIn } from './signup';

export function Auth_Layout() {
    return (
        <div className="flex bg-black text-white">
        <section className='flex flex-1 justify-center items-center flex-col'>
            {/* <Login /> */}
            <SignIn />
          </section>
          <img src="/public/images/auth_page_img.jpg" alt="" className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'/>
        </div>
        
    );
}
