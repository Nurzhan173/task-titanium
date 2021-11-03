import { useFilters } from "../filters.context";

export function AppliedFilters() {

  const { selectedFilters, onRemoveType, onClearAll } = useFilters();


  const onRemoveSelectedType = (typeId, categoryTitle) => () => {
    onRemoveType(typeId, categoryTitle);
  }

  console.log(selectedFilters);

  return (
    <>
      <div className="applied_block">Applied Filters:
      {Object.entries(selectedFilters).map(([title, data]) => (
        <div key={title} className="applied_category">
          {data.map((selectedType) => (
            <div key={selectedType} className="applied_item">
              <p>{selectedType}</p>
              <span onClick={onRemoveSelectedType(selectedType, title)} className="remove_button">X</span>
            </div>
          ))}
        </div>
      ))}
      </div>
      <p onClick={onClearAll} className="btn_clear_all">Clear all</p>
    </>
  )
}