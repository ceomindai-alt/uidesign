import { useState } from "react";
import { MENU_ITEMS, MENU_CATEGORIES } from "../data/menuData";

const MenuPage = () => {
  const [cat, setCat] = useState("All");

  const filteredItems =
    cat === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === cat);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Our Menu</h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button
          onClick={() => setCat("All")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            cat === "All"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>

        {MENU_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              cat === c
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Dish Image */}
            <div
              className="h-52 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <span className="font-semibold text-gray-900">
                  ₹{item.price}
                </span>
              </div>

              <p className="text-gray-500 text-sm mb-6">
                {item.description}
              </p>

              <button className="w-full border border-black py-2 text-sm font-semibold hover:bg-black hover:text-white transition">
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
