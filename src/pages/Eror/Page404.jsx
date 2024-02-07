import React from 'react';

import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className="h-screen p-4">
            <div className="flex flex-col items-center justify-center text-center p-10 m-10">

                <img
                    src="https://images.unsplash.com/photo-1620063633168-8b30e52edf95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FkJTIwZW1vaml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Page not found"
                    className="max-w-full mb-10 p-4"
                    style={{ maxWidth: "400px" }}
                />

                <h2 className="mb-6">Oops! Page not found</h2>
                <p className="max-w-lg">
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>
                <Link to={'/'} className="btn mt-6 btn-error text-white">
                    Go back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Page404;