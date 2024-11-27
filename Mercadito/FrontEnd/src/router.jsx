import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Dashbord from './routes/Dashboard.jsx'
import Home from './routes/home.jsx';
import Contact from './routes/Contact.jsx';

export const router = createBrowserRouter ([
    {path:"/", element: <App/>},
    {path:"/App", element: <App/>},
    {path:"/Dashbord", element: <Dashbord/>},
    {path:"/Home", element: <Home/>},
    {path:"/Contact", element: <Contact />},
    ] );