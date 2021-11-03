import { useState } from "react";
import { useFilters } from "../filters.context";

export const Category = (props) => {
  const { title, types } = props;
  const { selectedFilters, onCategoryTypeToggle, onCategoryClear } = useFilters();

  const [isVisible, setVisible] = useState(false);

  const onCategoryClick = () => {
    setVisible((prev) => !prev);
  }

  const onCategoryItemClick = (id) => () => {
    onCategoryTypeToggle(id, title);
  }

  const onCategoryClearClick = () => {
    onCategoryClear(title)
  }

  return (
    <div>
      <div onClick={onCategoryClick}>
        {title}
      </div>
      {isVisible && types.map((item) => (
        <p
          key={item.id}
          style={{ background: selectedFilters[title].includes(item.id) ? 'red' : 'white' }}
          onClick={onCategoryItemClick(item.id)}
        >
          {item.title}
        </p>
      ))}

      {selectedFilters[title].length > 0 && (
        <p onClick={onCategoryClearClick} className="btn_clear">Clear</p>
      )}
    </div>
  )
}