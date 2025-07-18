import React, { useState } from 'react';

// Sample config – replace with actual JSON
import config from '../db.json';

type ItemType = {
  tabname: string;
  visible: boolean;
  data: { [key: string]: any };
};

type CategoryType = {
  category: string;
  category_type?: string[];
  items: ItemType[];
};

export default function PlantConfigView() {
  const [configData, setConfigData] = useState<CategoryType[]>(config.response);

  const handleCheckboxChange = (categoryIndex: number, itemIndex: number) => {
    const updatedConfig = [...configData];
    const item = updatedConfig[categoryIndex].items[itemIndex];
    item.visible = !item.visible;
    setConfigData(updatedConfig);
  };

  return (
    <div className="p-4">
      {configData.map((category, categoryIndex) => (
        <div key={category.category} className="mb-6 border p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">{category.category}</h2>
          {category.items.length > 0 ? (
            category.items.map((item, itemIndex) => (
              <div key={item.tabname} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={item.visible}
                  onChange={() => handleCheckboxChange(categoryIndex, itemIndex)}
                  className="mr-2"
                />
                <span className="font-medium">{item.tabname}</span>
                {item.visible && (
                  <div className="ml-4 text-sm text-gray-600">
                    {Object.entries(item.data).map(([key, value]) => (
                      <div key={key}>
                        <strong>{key}:</strong> {value?.toString() || '—'}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items available.</p>
          )}
        </div>
      ))}
    </div>
  );
}
