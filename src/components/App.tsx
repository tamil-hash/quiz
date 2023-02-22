import { Suspense } from "react";
import {RouterProvider} from "react-router-dom";
import quizRoutes from "./routes/Quiz.routes";

const App = () => {

    return <Suspense>
        <RouterProvider router={quizRoutes} />
    </Suspense> 

}


export default App;