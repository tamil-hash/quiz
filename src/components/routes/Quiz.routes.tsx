import { lazy } from "react";
import {createBrowserRouter} from "react-router-dom";

const CreateQuiz = lazy(()=>import("../pages/CreateQuiz"));
const AllQuiz = lazy(()=>import("../pages/AllQuiz"));
const NotFoundPage = lazy(()=>import("../pages/NotFound"));

const quizRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AllQuiz/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/create-quiz",
    element: <CreateQuiz/>,
    errorElement: <NotFoundPage/>
  },
]);

export default quizRoutes;