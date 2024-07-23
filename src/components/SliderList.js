const SliderList = ({ icon, iconName }) => {
  return (
    <li className="flex gap-4 px-5 items-center cursor-pointer overflow-hidden hover:bg-gray-200 rounded-xl p-2">
      <img src={icon} className="h-3" alt={iconName + "icon"} />
      <button>{iconName}</button>
    </li>
  );
};

export default SliderList;
