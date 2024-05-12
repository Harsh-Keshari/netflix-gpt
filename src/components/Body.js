import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { RouterProvider,createBrowserRouter,Routes,Route} from 'react-router-dom';

const Body = () => {

    // const appRouter = createBrowserRouter([
    //     {
    //         path: "/",
    //         Element: <Login />
    //     },
    //     {
    //         path: "/browse",
    //         Element: <Browse />
    //     },
    // ]);
    return (
        <div>
            {/* <Login />
            <Browse /> 
            <RouterProvider router={appRouter} /> */}


            <Routes>
                <Route path='/' Component={Login}/>
                <Route path='/browse' Component={Browse}/>
            </Routes>


        </div>
    );
};

export default Body;
