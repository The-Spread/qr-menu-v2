import { useState } from "react";
import filterIcon from "../assets/filter.svg";

export default function Filter({
  vegetarianFilter,
  setVegetarianFilter,
  spicyFilter,
  setSpicyFilter,
}) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div
        className="border-[1px] rounded-md border-black max-w-28 hover:cursor-pointer flex items-center p-1"
        onClick={() => setOpened(!opened)}
      >
        <img src={filterIcon} className="h-5 mx-2" />
        Filters
      </div>
      <div className={`${opened ? "" : "hidden"}`}>
        <div
          className="flex gap-2"
          onClick={() => setVegetarianFilter(!vegetarianFilter)}
        >
          <input
            name="vegetarianFilter"
            type="checkbox"
            checked={vegetarianFilter}
          />
          <label htmlFor="vegetarianFilter">Vegetarian</label>
        </div>
        <div
          className="flex gap-2"
          onClick={() => setSpicyFilter(!spicyFilter)}
        >
          <input name="spicyFilter" type="checkbox" checked={spicyFilter} />
          <label htmlFor="spicyFilter">Non-Spicy Items</label>
        </div>
      </div>
    </>
  );
}
