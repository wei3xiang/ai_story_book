import SideBar from "./Layout/SideBar/index.jsx";
import { routeBody } from "./route.jsx";
import Header from "./Layout/Header/index.jsx";
import Content from "./Layout/Content/index.jsx";
import Body from "./Layout/Body/index.jsx";

const AppLayout = () => (
  <>
    <Header title={" Vite + React + Story "} />
    <Body>
      <SideBar menuItems={routeBody} />
      <Content />
    </Body>
  </>
);

export default AppLayout;
