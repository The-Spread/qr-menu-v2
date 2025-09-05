import vegetarianIcon from "../assets/vegetarian.png";
import spicyIcon from "../assets/spicy.png";
import recommendedIcon from "../assets/recommended.png";

export default function MenuItem({
  itemName,
  vegetarian,
  spicy,
  recommended,
  price,
  description,
  addOns,
}) {
  return (
    <div className="py-2">
      <div className="flex items-center">
        <div className="font-bold">{itemName}</div>
        <img
          src={recommendedIcon}
          className={`h-4 ml-2 ${recommended ? "" : "hidden"}`}
        />
        <img
          src={vegetarianIcon}
          className={`h-4 ml-2 ${vegetarian ? "" : "hidden"}`}
        />
        <img src={spicyIcon} className={`h-4 ml-2 ${spicy ? "" : "hidden"}`} />
        <div className="ml-auto">{price}</div>
      </div>
      <div className="italic text-gray-700">{description}</div>
      {addOns.map((addOn) => {
        return (
          <div className="flex">
            {addOn.showPlusSign ? (
              <div className="italic text-gray-700">
                {"+ " + addOn.addOnName}
              </div>
            ) : (
              <div className="italic text-gray-700">{addOn.addOnName}</div>
            )}
            <div className="ml-auto italic text-gray-700">{addOn.price}</div>
          </div>
        );
      })}
    </div>
  );
}
