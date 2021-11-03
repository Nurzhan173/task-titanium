import React, { useState } from "react";
import { categories } from "./service/service";

const FiltersContext = React.createContext(null);
const emptyCategories = Object.keys(categories).reduce((a, b) => ({ ...a, [b]: [] }), {})

export const FiltersProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState(emptyCategories);

  const onCategoryTypeToggle = (categoryTypeId, categoryTitle) => {
    setSelectedFilters((prev) => {
      const selectedCategoryTypes = prev[categoryTitle];
      return ({
        ...prev,
        [categoryTitle]:
          selectedCategoryTypes.includes(categoryTypeId)
            ? selectedCategoryTypes.filter((n) => n !== categoryTypeId)
            : [...selectedCategoryTypes, categoryTypeId]
      });
    });
  }

  const onRemoveType = (typeId, categoryTitle) => {
    setSelectedFilters((prev) => {
      const selectedCategoryTypes = prev[categoryTitle];
      return ({
        ...prev,
        [categoryTitle]:
          selectedCategoryTypes.filter((n) => n !== typeId)
      });
    });
  }

  const onClearAll = () => {
    setSelectedFilters(emptyCategories)
  }

  const onCategoryClear = (categoryTitle) => {
    setSelectedFilters((prev) => {
      return ({
        ...prev,
        [categoryTitle]:
          []
      });
    });
  }

  return <FiltersContext.Provider value={{ categories, selectedFilters, onCategoryTypeToggle, onRemoveType, onClearAll, onCategoryClear }}>{children}</FiltersContext.Provider>
}

export const useFilters = () => React.useContext(FiltersContext);
