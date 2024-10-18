import { Link, NavLink } from "react-router-dom";
import _ from "lodash";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const Item = (props) => {
  const { path, title, children } = props;
  return _.isEmpty(children) ? (
    <MenuItem className="menu1" component={<Link to={`${path}`} />}>
      {title}
    </MenuItem>
  ) : (
    <SubMenu label={title}>
      {_.map(children, ({ path: childPath, title, children }, i) => (
        <Item
          key={`i${i}`}
          path={`${_.isNil(path) ? "" : path}/${childPath}`}
          title={title}
          children={children}
        />
      ))}
    </SubMenu>
  );
};
const SideBar = (props) => {
  const { menuItems } = props;
  return (
    <Sidebar className="app">
      <Menu>
        {_.map(menuItems, ({ path, title, children }, i) => (
          <Item key={`${i}`} path={path} title={title} children={children} />
        ))}
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
