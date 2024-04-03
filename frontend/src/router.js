import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/not_found_page";
import ReceiveData from "./pages/receive_data/receive_data";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>
    },
    {
      path: 'receive-data',
      element: <ReceiveData/>
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