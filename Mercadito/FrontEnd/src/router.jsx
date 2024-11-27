import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Dashbord from './routes/Dashboard.jsx'
import Contact from './routes/Contact.jsx';
import Login from './routes/Login.jsx';

export const router = createBrowserRouter ([
    {path:"/", element: <App/>},
    {path:"/App", element: <App/>},
    {path:"/Dashbord", element: <Dashbord/>},
    {path:"/Login", element: <Login/>},
    {path:"/Contact", element: <Contact />},
    ] );