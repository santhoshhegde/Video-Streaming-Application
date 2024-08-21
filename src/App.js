import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import store from "./Utils/store";
import { Provider } from "react-redux";

function App() {
  const approutuer = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      {" "}
      <div className="h-screen">
        <Header />
        <RouterProvider router={approutuer} />
      </div>
    </Provider>
  );
}

export default App;
