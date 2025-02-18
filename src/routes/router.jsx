
import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Root from "../layout/Root";
import MyArtCraft from "../pages/MyArtCraft";
import AllArtCraft from "../pages/AllArtCraft";
import AddCraft from "../pages/AddCraft";
import CartView from "../components/CartView";
import AllArtView from "../components/AllArtView";
import Contact from "../pages/Contact"
import Login from "../pages/Login";
import Register from "../pages/Register";

import CartUpdated from "../components/CartUpdated";
import Privateroute from "./Privateroute";
import Subcategory from "../components/Subcategory";
import SubCategoryPage from "../pages/SubCategoryPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch("https://art-craft-server-psi.vercel.app/addCraft")
        },
        {
            path:'/allArt',
            element:<AllArtCraft></AllArtCraft>,
            loader:()=> fetch('https://art-craft-server-psi.vercel.app/addCraft')
        },
        {
            path:'/addCraft',
            element:<Privateroute><AddCraft></AddCraft></Privateroute>,
        },
        {
            path:'/myArtCraft',
            element:<Privateroute><MyArtCraft></MyArtCraft></Privateroute>,
            loader:()=> fetch('https://art-craft-server-psi.vercel.app/addCraft')
        },
        {
        path:'/myArtCraft',
        element:<Privateroute><MyArtCraft></MyArtCraft></Privateroute>,
        loader:()=> fetch('https://art-craft-server-psi.vercel.app/addCraft')
        },
        {
          path:'/Contact',
          element:<Privateroute><MyArtCraft></MyArtCraft></Privateroute>,
          loader:()=> fetch('https://art-craft-server-psi.vercel.app/Contact')
          },
        {
          path:'/cartUpdated/:id',
          element:<Privateroute><CartUpdated></CartUpdated></Privateroute>,
          loader: ({params}) => fetch(`https://art-craft-server-psi.vercel.app/addCraft/${params.id}`)
        },
        {
          path:'/craft/:id',
          element:<Privateroute><AllArtView></AllArtView></Privateroute>,
          loader: ({params})=> fetch(`https://art-craft-server-psi.vercel.app/craft/${params.id}`)
        },
        {
          path:'/cartView/:id',
          element:<Privateroute><CartView></CartView></Privateroute>,
          loader: ({params})=> fetch(`https://art-craft-server-psi.vercel.app/addCraft/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/subcategory',
          element:<Subcategory></Subcategory>,
        },
         {
          path: "/subcategory/embroidery",
          element: <SubCategoryPage></SubCategoryPage>,
          loader: async() =>{
            const response = await fetch("https://art-craft-server-psi.vercel.app/craft")
            const data = await response.json()

            const filterCategory = data.filter(
              (craft) => craft.subcategory_Name ==="Embroidery"
            )

            return filterCategory
          }

        },
        {
          path: "/subcategory/knitting&crocheting",
          element: <SubCategoryPage></SubCategoryPage>,
          loader: async() =>{
            const response = await fetch("https://art-craft-server-psi.vercel.app/craft")
            const data = await response.json()

            const filterCategory = data.filter(
              (craft) => craft.subcategory_Name ==="Knitting & Crocheting"
            )

            return filterCategory
          }

        },
        {
          path: "/subcategory/bedwork",  
          element: <SubCategoryPage></SubCategoryPage>,
          loader: async() =>{
            const response = await fetch("https://art-craft-server-psi.vercel.app/craft")
            const data = await response.json()

            const filterCategory = data.filter(
              (craft) => craft.subcategory_Name ==="Bedwork" 
            )

            return filterCategory
          }

        },{
          path: "/subcategory/quilting",  
          element: <SubCategoryPage></SubCategoryPage>,
          loader: async() =>{
            const response = await fetch("https://art-craft-server-psi.vercel.app/craft")
            const data = await response.json()

            const filterCategory = data.filter(
              (craft) => craft.subcategory_Name ==="Quilting" 
            )

            return filterCategory
          }

        },{
          path: "/subcategory/tie-dyeing",  
          element: <SubCategoryPage></SubCategoryPage>,
          loader: async() =>{
            const response = await fetch("https://art-craft-server-psi.vercel.app/craft")
            const data = await response.json()

            const filterCategory = data.filter(
              (craft) => craft.subcategory_Name ==="Tie-dyeing" 
            )

            return filterCategory
          }

        },{
          path: "/subcategory/macrame",  
          element: <SubCategoryPage></SubCategoryPage>,
          loader: async() =>{
            const response = await fetch("https://art-craft-server-psi.vercel.app/craft")
            const data = await response.json()

            const filterCategory = data.filter(
              (craft) => craft.subcategory_Name ==="Macrame" 
            )

            return filterCategory
          }

        },
      ]
    },
  ]);

export default router;

// subcategory/macrame