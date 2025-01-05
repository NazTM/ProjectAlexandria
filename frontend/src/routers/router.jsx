import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginSignup from "../LoginSignup";
import FeedbackPage from "../feedback";
import Profile from "../profile_page";
import PostPage from "../post";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/LoginSignup",
    element: <LoginSignup />,
  },
  {
    path: "/Feedback",
    element: <FeedbackPage />,
  },
  {
    path: "/profile_page",
    element: <Profile />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
  /*
  {
    path: "/Library",
    element: <Library />,
  },

  {
    path: "/Ask a question", 
    element: <Ask a question />,
  },

  {
    path: "/Feedback", 
    element: <Feedback />,
  },*/
]);

export default router;
