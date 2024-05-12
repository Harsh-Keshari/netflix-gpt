import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignINForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignINForm);
    }
    return <div>
        <Header />
        <div className='absolute bg-opacity-80'>
            <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg' alt='image bg' />
        </div>
        {/* Note- If we have to use a big Form then Formik wesite is good- external library */}
        <form className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' >
            <h1 className='font-bold text-3xl py-4'>{isSignINForm? 'Sign In':'Sign Up'}</h1>
            {!isSignINForm && (
                <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            )}

            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignINForm ? 'Sign In' : 'Sign Up'}</button>
            <p className='py-4 cursor-pointer font-bold' onClick = {toggleSignInForm}>
                {isSignINForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}
            </p>
        </form>
    </div>
};

export default Login;
