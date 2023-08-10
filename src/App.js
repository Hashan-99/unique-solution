import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SampleView from "./views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SampleView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
