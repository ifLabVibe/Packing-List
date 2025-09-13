import React, { useState } from 'react'
import TemplateSelector from '../components/TemplateSelector'
import ChecklistDisplay from '../components/ChecklistDisplay'
import AddCustomItem from '../components/AddCustomItem'
import './HomePage.css'

const HomePage = ({
  selectedTemplate,
  onTemplateChange,
  currentItems,
  onItemToggle,
  onAddCustomItem,
  onResetChecklist,
  onSaveChecklist
}) => {
  const [checklistName, setChecklistName] = useState('')
  const [showSaveDialog, setShowSaveDialog] = useState(false)

  const handleSaveClick = () => {
    setShowSaveDialog(true)
    setChecklistName(selectedTemplate?.name || '')
  }

  const handleSaveConfirm = () => {
    if (checklistName.trim()) {
      onSaveChecklist(checklistName.trim())
      setShowSaveDialog(false)
      setChecklistName('')
    }
  }

  const handleSaveCancel = () => {
    setShowSaveDialog(false)
    setChecklistName('')
  }

  return (
    <div className="home-page">
      <header className="page-header">
        <h1>行者清单</h1>
        <p>选择或自定义你的出行清单</p>
      </header>

      <div className="page-content">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          onTemplateChange={onTemplateChange}
        />

        {selectedTemplate && (
          <div className="checklist-section">
            <div className="checklist-header">
              <h2>{selectedTemplate.name}</h2>
              <div className="header-actions">
                <button
                  className="save-button"
                  onClick={handleSaveClick}
                >
                  保存清单
                </button>
                <button
                  className="reset-button"
                  onClick={onResetChecklist}
                >
                  重置
                </button>
              </div>
            </div>

            <AddCustomItem onAddItem={onAddCustomItem} />
            <ChecklistDisplay
              items={currentItems}
              onItemToggle={onItemToggle}
            />
          </div>
        )}

        {showSaveDialog && (
          <div className="save-dialog-overlay">
            <div className="save-dialog">
              <h3>保存清单</h3>
              <input
                type="text"
                value={checklistName}
                onChange={(e) => setChecklistName(e.target.value)}
                placeholder="请输入清单名称"
                autoFocus
              />
              <div className="dialog-actions">
                <button className="confirm-button" onClick={handleSaveConfirm}>
                  保存
                </button>
                <button className="cancel-button" onClick={handleSaveCancel}>
                  取消
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage