import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GameDetailPage from "../components/GameDetailPage";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";

const router =createBrowserRouter([
    { path : "/",
      element : <Layout/>,
      errorElement : <ErrorPage />,
      children : [
        {path : "", element: <App />},
        {path : "Games/1", element: <GameDetailPage />}
      ]},
]);
export default router;



