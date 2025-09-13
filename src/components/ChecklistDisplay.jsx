import React from 'react'
import ItemCategory from './ItemCategory'
import { CATEGORY_LABELS } from '../data/templates'
import './ChecklistDisplay.css'

const ChecklistDisplay = ({ items, onItemToggle }) => {
  const groupedItems = items.reduce((groups, item) => {
    const category = item.category
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(item)
    return groups
  }, {})

  const checkedCount = items.filter(item => item.checked).length
  const totalCount = items.length
  const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0

  return (
    <div className="checklist-display">
      <div className="progress-section">
        <h3>打包进度</h3>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text">
          已完成 {checkedCount} / {totalCount} 项 ({Math.round(progress)}%)
        </div>
      </div>

      <div className="categories-container">
        {Object.entries(groupedItems).map(([categoryKey, categoryItems]) => (
          <ItemCategory
            key={categoryKey}
            category={CATEGORY_LABELS[categoryKey] || categoryKey}
            items={categoryItems}
            onItemToggle={onItemToggle}
          />
        ))}
      </div>
    </div>
  )
}

export default ChecklistDisplay