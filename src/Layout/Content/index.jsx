import {Outlet} from "react-router";

const Content = (props) => {
    return (
        <div style={{flex: "1 0 auto"}}>
            <Outlet/>
        </div>
    );
};

export default Content
