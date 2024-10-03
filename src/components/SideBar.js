import React from "react";
import HomeIcon from "../Icons/HomeIcon.svg";
import ShortsIcon from "../Icons/shortsIcon.svg";
import SubscriptionIcon from "../Icons/subscriptionIcon.svg";
import SideBarList from "./SideBarList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-4 w-60 h-[86vh] overflow-y-scroll">
      <Link to="/">
        <SideBarList icon={HomeIcon} iconName="Home" />
      </Link>
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />

      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
      <SideBarList icon={HomeIcon} iconName="Home" />
      <SideBarList icon={ShortsIcon} iconName="Shorts" />
      <SideBarList icon={SubscriptionIcon} iconName="Subscription" />
    </div>
  );
};

export default SideBar;
