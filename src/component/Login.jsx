import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
      const navigate = useNavigate()
      const emailRef = useRef('')
      const location = useLocation()
      const from = location.state?.from?.pathname || '/' ;

      let errorElement;

      if(loading) {
        return <Loading/>
     }

     if(user) {
       navigate('/home')
     }

     if (error) {
        errorElement = <p className='text-red-500 text-center mt-3 font-semibold'>Error: {error?.message}</p>
      }
      
      const handelSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        signInWithEmailAndPassword(email, password)
    }


    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
          await sendPasswordResetEmail(email);
          alert("Sent email in your spam box");
         }
          else{
          alert("Please enter your email address");
        }
        }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                    </div>
                    <form onSubmit={handelSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                <div className='flex justify-between'>
                                <label className="label">
                                    <button onClick={resetPassword} className="label-text-alt link link-hover text-sm">Forgot password?</button>
                                </label>
                                <label className="label">
                                    <Link to='/register' className="text-sm label-text-alt link link-hover">Create new account</Link>
                                </label>
                                </div>
                                {errorElement}
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;