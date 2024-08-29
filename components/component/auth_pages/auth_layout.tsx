import React from 'react';
import { SignIn } from './signup';
import Image from 'next/image';

export function Auth_Layout() {
    return (
        <div className= "flex bg-black text-white" >
        <section className='flex flex-1 justify-center items-center flex-col' >
            {/* <Login /> */ }
            < SignIn />
            </section>
            {/* <img src="/public/images/auth_page_img.jpg" alt="" className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'/> */ }
            <Image
                src="@public/images/auth_page_img.jpg"
                alt = "Auth Page Image"
                className = "hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
                width = { 1920} // Adjust width as needed
                height = { 1080} // Adjust height as needed
            />
        </div>
        
    );
}
