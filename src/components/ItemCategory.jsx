import React from 'react'
import './ItemCategory.css'

const ItemCategory = ({ category, items, onItemToggle }) => {
  return (
    <div className="item-category">
      <h3 className="category-title">{category}</h3>
      <div className="items-list">
        {items.map(item => (
          <div
            key={item.id}
            className={`item ${item.checked ? 'checked' : ''}`}
            onClick={() => onItemToggle(item.id)}
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onItemToggle(item.id)}
              className="item-checkbox"
            />
            <span className="item-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemCategory