import { useState } from "react";
import vegetarianIcon from "../assets/vegetarian.png";
import spicyIcon from "../assets/spicy.png";
import recommendedIcon from "../assets/recommended.png";
import dummyPhoto from "../assets/dummy_photo.png";

export default function MenuItemModal({ item, isOpen, onClose }) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu Item</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Image */}
          <div className="w-full h-64 mb-4">
            <img
              src={dummyPhoto}
              alt={item.itemName}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Item name and icons */}
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-bold text-gray-900">{item.itemName}</h3>
            <div className="flex ml-auto gap-2">
              {item.recommended && (
                <img src={recommendedIcon} alt="Recommended" className="h-5" />
              )}
              {item.vegetarian && (
                <img src={vegetarianIcon} alt="Vegetarian" className="h-5" />
              )}
              {item.spicy && (
                <img src={spicyIcon} alt="Spicy" className="h-5" />
              )}
            </div>
          </div>

          {/* Price */}
          {item.price && (
            <div className="text-lg font-semibold text-green-600 mb-3">
              {item.price}
            </div>
          )}

          {/* Description */}
          {item.description && (
            <div className="text-gray-700 mb-4 leading-relaxed">
              {item.description}
            </div>
          )}

          {/* Add-ons */}
          {item.addOns && item.addOns.length > 0 && (
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-gray-900 mb-3">
                Add-ons & Options
              </h4>
              <div className="space-y-2">
                {item.addOns.map((addOn, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700">
                      {addOn.showPlusSign ? "+ " : ""}
                      {addOn.addOnName}
                    </span>
                    {addOn.price && (
                      <span className="text-gray-600 font-medium">
                        {addOn.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
