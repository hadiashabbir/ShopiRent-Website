import { Outlet, useLocation } from "react-router-dom";
import Header  from "./components/Header/Header";

const HideHeader = ({ hideHeaderPaths }) => {
const { pathName } = useLocation();

return (
 <>
   {!hideHeaderPaths.includes(pathName) && <Header />}
   <Outlet />
 </>
 );
};

export default HideHeader