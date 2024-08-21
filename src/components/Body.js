import useOnlineStatusCheck from "../Utils/Hooks/useOnlineStatusCheck";
import SiderBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Offline from "./Offline";

const Body = () => {
  const onlineStatus = useOnlineStatusCheck();

  if (!onlineStatus) return <Offline />;
  return (
    <div className="flex overflow-hidden relative top-24">
      <SiderBar />
      <Outlet />
    </div>
  );
};

export default Body;
