/* eslint-disable react/prop-types */
export default function Category({
  categoryData,
  handleSelect,
  selectedCategory,
}) {
  return (
    <div className="category">
      {categoryData.map((category, index) => (
        <button
          key={index}
          className="categoryCell"
          onClick={() => handleSelect(index)}
          style={{
            backgroundColor: category.color,
            border: index === selectedCategory ? "5px solid black" : "none",
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
