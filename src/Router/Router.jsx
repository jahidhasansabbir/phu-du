import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MyBooks from "../Pages/MyBooks";
import Layout from "../Layout/Layout";
import Blogs from "../Pages/Blogs";
import DoctorDetails from "../Pages/DoctorDetails";
import NoDocFound from "../Component/NoDocFound";
import Error from "../Pages/Error";
import LoadingBar from "../Component/LoadingBar";
import ContactUs from "../Pages/ContactUs";

export const router = createBrowserRouter([
    {
        path:'/', 
        Component: Layout,
        errorElement: <Error/>,
        children: [
            {
                index:true,
                loader:()=>fetch('../doctors.json'),
                hydrateFallbackElement:<LoadingBar/>,
                Component: Home
            },
            {
                path: '/booking',
                Component: MyBooks
            },
            {
                path:'/blogs',
                loader: ()=>fetch('../blogs.json'),
                hydrateFallbackElement:<LoadingBar/>,
                Component: Blogs
            },
            {
                path:'doctors/:regId',
                loader: ()=>fetch('../doctors.json'),
                hydrateFallbackElement:<LoadingBar/>,
                Component: DoctorDetails,
                errorElement: <NoDocFound/>
            }
            
        ]
    },
    {
        path:'/contact-us',
        Component: ContactUs
    },
    {
        path: '*',
        Component: Error
    }
])

