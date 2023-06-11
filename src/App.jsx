
import './App.css'
import {createBrowserRouter,createHashRouter,RouterProvider} from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import MealDetails from './components/MealDetails/MealDetails.jsx';
import Search from './components/Search/Search.jsx';
import Categories from './components/Categories/Categories.jsx';
import Area from './components/Area/Area.jsx';
import Ingredients from './components/Ingredients/Ingredients.jsx';
import IngredientDetails from './components/IngredientDetails/IngredientDetails.jsx';
import AreaDetails from './components/AreaDetails/AreaDetails.jsx';
import CategoryMeals from './components/CategoryMeals/CategoryMeals.jsx';
import Contact from './components/Contact/Contact.jsx';
import Submission from './components/Submission/Submission';

let routers = createHashRouter([
  {path:'/',element:<Layout/>, children:[
    {index:true,element:<Home/>},
    {path:'/home',element:<Home/>},
    {path:'/:id',element:<MealDetails/>},
    {path:'/search',element:<Search/>},
    {path:'/categories',element:<Categories/>},
    { path: "/categories/:category", element: <CategoryMeals /> },
    {path:'/area',element:<Area/>},
    { path: "/area/:area", element: <AreaDetails /> },
    { path: "/ingredients", element: <Ingredients /> },
    { path: "/ingredients/:ingredient", element: <IngredientDetails /> },
    { path: "/contact", element: <Contact /> },
    { path: "/submission", element: <Submission/>},

  ]}
])


function App() {
  return <RouterProvider router = {routers}></RouterProvider>;
}

export default App
