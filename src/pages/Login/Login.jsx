import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import SocialLogin from '../Shared/SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [fireError,setFireError]=useState('')
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        const { email, password } = data;
      setFireError('')
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login success')
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setFireError(`${errorCode} ${errorMessage}`);
            });
    };

    return (
        <>
            <Helmet>
                <title>User Management | Login</title>
            </Helmet>
            <div className="my-20 flex items-center justify-center">
                <div className="w-full md:w-[500px]  mx-auto bg-white p-8 shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold text-center mb-6">Login now!</h1>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="email">Email</label>
                            <input
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                      
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="password">Password</label>
                            <input
                                type="password"
                                {...register('password', { required: 'Password is required' })}
                                id="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                           
                            <label className="block mt-1 text-sm text-gray-600">
                                <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mb-6">
                    {fireError && <p className="text-error">{fireError}</p>}
                            <button type="submit" className="w-full  bg-pink-400 text-white rounded-md hover:bg-pink-600">Login</button>
                        </div>
                    </form>
                    <p className="text-sm text-center">New Here? <Link to="/signup" className="text-blue-500 hover:underline">Create an account</Link></p>
                    <SocialLogin />
                </div>
            </div>
        </>
    );
};

export default Login;


// import { useContext, useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import SocialLogin from '../Shared/SocialLogin';
// import { AuthContext } from '../../providers/AuthProvider';

// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const [error,setError]=useState('')
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";



//     const handleLogin = event => {
//         setError('')
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 alert('success')
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 setError(`${errorCode} ${errorMessage}`)
//                 // ..
//               });
//     }



//     return (
//         <>
//             <Helmet>
//                 <title>Fighting Spirit | Login</title>
//             </Helmet>
//             <div className="my-20 flex items-center justify-center">
//                 <div className="w-full md:w-[500px]  mx-auto bg-white p-8 shadow-lg rounded-lg">
//                     <h1 className="text-3xl font-bold text-center mb-6">Login now!</h1>
//                     <form onSubmit={handleLogin}>
//                         <div className="mb-4">
//                             <label className="block mb-2 font-bold" htmlFor="email">Email</label>
//                             <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block mb-2 font-bold" htmlFor="password">Password</label>
//                             <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                             <label className="block mt-1 text-sm text-gray-600">
//                                 <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
//                             </label>
//                         </div>
//                         {error && <p className='text-error'>{error}</p>}
//                         <div className="mb-6">
//                             <button type="submit" className="w-full py-2 px-4 bg-pink-400 text-white rounded-md hover:bg-pink-600">Login</button>
//                         </div>
                      
//                     </form>
//                     <p className="text-sm text-center">New Here? <Link to="/signup" className="text-blue-500 hover:underline">Create an account</Link></p>
//                     <SocialLogin />
//                 </div>
//             </div>

//         </>
//     );
// };

// export default Login;