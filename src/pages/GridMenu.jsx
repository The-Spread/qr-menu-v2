import { useState, useMemo } from "react";
import GridMenuItem from "../components/GridMenuItem";
import MenuItemModal from "../components/MenuItemModal";
import Filter from "../components/Filter";

import Logo from "../../src/assets/the_spread_black.png";

import {
  breakfastMenu,
  snackMenu,
  saladMenu,
  italianMenu,
  sandwichMenu,
  mainsMenu,
  bakedGoodsMenu,
  fusionMenu,
  asianMenu,
  beverageMenu,
} from "../assets/constants";

export default function GridMenu() {
  const [vegetarianFilter, setVegetarianFilter] = useState(false);
  const [spicyFilter, setSpicyFilter] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  // Define menu categories with their data and display names
  const menuCategories = useMemo(
    () => [
      { name: "Breakfast", items: breakfastMenu, key: "breakfast" },
      { name: "Baked Goods", items: bakedGoodsMenu, key: "bakedGoods" },
      { name: "Snacks", items: snackMenu, key: "snacks" },
      { name: "Salads & Healthy Bowls", items: saladMenu, key: "salads" },
      { name: "Italian", items: italianMenu, key: "italian" },
      { name: "Fusion", items: fusionMenu, key: "fusion" },
      { name: "Asian", items: asianMenu, key: "asian" },
      { name: "Sandwiches & Burgers", items: sandwichMenu, key: "sandwiches" },
      { name: "Mains", items: mainsMenu, key: "mains" },
      { name: "Beverages", items: beverageMenu, key: "beverages" },
    ],
    []
  );

  // Filter menu items for each category
  const filteredCategories = useMemo(() => {
    return menuCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          // Filter out items without proper data
          if (!item.itemName) return false;

          // Apply filters
          if (vegetarianFilter && !item.vegetarian) return false;
          if (spicyFilter && !item.spicy) return false;

          return true;
        }),
      }))
      .filter((category) => category.items.length > 0); // Only show categories with items
  }, [menuCategories, vegetarianFilter, spicyFilter]);

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with filters */}
      <div className="sticky top-0 bg-white shadow-sm z-40 p-4 flex flex-col">
        <div className="flex mb-4 self-center">
          {/* <a
            href={`${import.meta.env.BASE_URL}/home`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Other Menus
          </a> */}
          {/* <h1 className="text-2xl font-bold">The Spread Menu</h1> */}
          <img src={Logo} className="h-[2rem]" />
        </div>

        <Filter
          vegetarianFilter={vegetarianFilter}
          setVegetarianFilter={setVegetarianFilter}
          spicyFilter={spicyFilter}
          setSpicyFilter={setSpicyFilter}
        />
      </div>

      {/* Menu Categories */}
      <div className="p-4">
        {filteredCategories.map((category) => (
          <div key={category.key} className="mb-4">
            {/* Category Header */}
            <button
              onClick={() => toggleSection(category.key)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {category.name}
              </h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">
                  {category.items.length} items
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections[category.key] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Category Items Grid */}
            {expandedSections[category.key] && (
              <div className="mt-2 bg-white rounded-lg border border-gray-200 p-2">
                <div className="grid grid-cols-3 gap-1">
                  {category.items.map((item, index) => (
                    <GridMenuItem
                      key={`${category.key}-${item.itemName}-${index}`}
                      item={item}
                      onClick={handleItemClick}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <MenuItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
