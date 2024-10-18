import AppLayout from "./AppLayout.jsx";
import Home from "./Home/index.jsx";
import Login from "./Login/index.jsx";

const routeBody = [
  {
    path: "home",
    title: "首页",
    element: <Home />,
  },
  {
    path: "about",
    title: "关于",
    element: <div>about</div>,
  },
];

export { routeBody };

const routeTree = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        children: [...routeBody],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routeTree;
