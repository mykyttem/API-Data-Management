import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/not_found_page";
import ReceiveData from "./pages/receive_data/receive_data";
import ReceiveDataBase from "./pages/receive_database/receive_database";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>
    },
    {
      path: 'receive-random-data',
      element: <ReceiveData/>
    },
    {
      path: 'receive-database',
      element: <ReceiveDataBase/>
    },
    {
      path: 'not-found',  
      element: <NotFound/>
    },
    {
        path: '*',
        element: <Navigate to='not-found' replace/>
    }
]);


export default router;