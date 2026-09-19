import { RouterProvider } from "react-router/dom";
import router from "./routes/index.jsx";

const App = () => (
  <RouterProvider router={router}/>
);

export default App;