import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Dashbord from './routes/Dashboard.jsx'
import Contact from './routes/Contact.jsx';
import Login from './routes/Login.jsx';
import CreatePost from './routes/CreatePost.jsx';
import Register from './routes/Register.jsx';
import Error from './routes/Error.jsx';

export const router = createBrowserRouter ([
    {path:"/", element: <App/>},
    {path:"/App", element: <App/>},
    {path:"/Dashbord", element: <Dashbord/>},
    {path:"/Login", element: <Login/>},
    {path:"/CreatePost", element: <CreatePost/>},
    {path:"/Register", element: <Register/>},
    {path:"/Contact", element: <Contact />},
    {path:"/Error", element: <Error/>},
    ] );