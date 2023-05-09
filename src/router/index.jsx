import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/LoginPage"
import Layout from "../layout/Layout";
import ItemPage from "../views/ItemPage"
import FormAddNewItem from "../views/AddNewItemPage";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        loader: () => {
            if (!localStorage.getItem('access_token')){
                return redirect ('/login')
            }
            return null
        },
        children: [
            {
                path: '/',
                element: <ItemPage/>
            },
            {
                path: "/add",
                element: <FormAddNewItem/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>,
        loader: () => {
            if (localStorage.getItem('access_token')){
                return redirect ('/')
            }
            return null
        }
    }
])


export default router