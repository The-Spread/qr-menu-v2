import dummyPhoto from "../assets/dummy_photo.png";
import vegetarianIcon from "../assets/vegetarian.png";
import spicyIcon from "../assets/spicy.png";
import recommendedIcon from "../assets/recommended.png";

export default function GridMenuItem({ item, onClick }) {
  return (
    <div
      className="relative aspect-square cursor-pointer group"
      onClick={() => onClick(item)}
    >
      {/* Image */}
      <img
        src={dummyPhoto}
        alt={item.itemName}
        className="w-full h-full object-cover"
      />

      {/* Top right icons - always visible */}
      <div className="absolute top-2 right-2 flex gap-1">
        {item.recommended && (
          <div className="bg-white bg-opacity-90 rounded-full p-1">
            <img src={recommendedIcon} alt="Recommended" className="h-3 w-3" />
          </div>
        )}
        {item.vegetarian && (
          <div className="bg-white bg-opacity-90 rounded-full p-1">
            <img src={vegetarianIcon} alt="Vegetarian" className="h-3 w-3" />
          </div>
        )}
        {item.spicy && (
          <div className="bg-white bg-opacity-90 rounded-full p-1">
            <img src={spicyIcon} alt="Spicy" className="h-3 w-3" />
          </div>
        )}
      </div>

      {/* Bottom overlay with item name and price - always visible */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-black bg-opacity-75 text-white p-2">
          <div
            className="text-[8px] font-semibold leading-tight overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.itemName}
          </div>
          {item.price && (
            <div className="text-[8px] text-green-300 mt-1">{item.price}</div>
          )}
        </div>
      </div>
    </div>
  );
}
