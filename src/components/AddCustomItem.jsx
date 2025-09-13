import React, { useState } from 'react'
import { ITEM_CATEGORIES, CATEGORY_LABELS } from '../data/templates'
import './AddCustomItem.css'

const AddCustomItem = ({ onAddItem }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(ITEM_CATEGORIES.OTHER)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (itemName.trim()) {
      const newItem = {
        id: 'custom_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        name: itemName.trim(),
        category: selectedCategory,
        checked: false,
        isCustom: true
      }
      onAddItem(newItem)
      setItemName('')
      setSelectedCategory(ITEM_CATEGORIES.OTHER)
      setIsOpen(false)
    }
  }

  const handleCancel = () => {
    setItemName('')
    setSelectedCategory(ITEM_CATEGORIES.OTHER)
    setIsOpen(false)
  }

  return (
    <div className="add-custom-item">
      {!isOpen ? (
        <button
          className="add-item-button"
          onClick={() => setIsOpen(true)}
        >
          + 添加自定义物品
        </button>
      ) : (
        <div className="add-item-form">
          <h4>添加自定义物品</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="item-name">物品名称:</label>
              <input
                type="text"
                id="item-name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="请输入物品名称"
                autoFocus
              />
            </div>

            <div className="form-group">
              <label htmlFor="item-category">分类:</label>
              <select
                id="item-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="confirm-button">
                添加
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={handleCancel}
              >
                取消
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default AddCustomItem