import App from "./App";
import BotCollection from "./components/BotCollection";
import BotSpecs from "./components/BotSpecs";
import ErrorPage from "./components/ErrorPage";


const routes = [
    { 
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
        {
            path:"/",
            element:<BotCollection/>},
         
        {
            path:"/botspecs/:id",
            element:<BotSpecs/>
        }

    ]

    }];
export default routes;
