import { useState } from "react";
import MenuItem from "./MenuItem";

import downArrow from "../assets/arrow.svg";

export default function Dropdown({
  category_title,
  available_time,
  menu,
  vegetarianFilter,
  spicyFilter,
}) {
  const [opened, setOpened] = useState(false);
  const outputMenu = menu.filter((item) => {
    if (vegetarianFilter && !item.vegetarian) {
      return false;
    }
    if (spicyFilter && item.spicy) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-[480px] py-2">
      {/* clicking portion */}
      <div className="hover:cursor-pointer" onClick={() => setOpened(!opened)}>
        <div className="flex flex-row items-center h-5">
          <div className="text-xl">{category_title}</div>
          <img
            src={downArrow}
            className={`h-2 ml-auto ${opened ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <div className="text-xs italic py-1">{available_time}</div>
        <div className="h-[1px] w-full bg-black"></div>
      </div>
      <div className={`${opened ? "" : "hidden"}`}>
        {outputMenu.map((item, index) => {
          return (
            <MenuItem
              key={index}
              itemName={item.itemName}
              vegetarian={item.vegetarian}
              spicy={item.spicy}
              recommended={item.recommended}
              price={item.price}
              description={item.description}
              addOns={item.addOns}
            />
          );
        })}
      </div>
    </div>
  );
}
