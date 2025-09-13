import React from 'react'
import { TRAVEL_TEMPLATES } from '../data/templates'
import './TemplateSelector.css'

const TemplateSelector = ({ selectedTemplate, onTemplateChange }) => {
  return (
    <div className="template-selector">
      <h2>选择出行场景</h2>
      <div className="templates-grid">
        {Object.values(TRAVEL_TEMPLATES).map(template => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
            onClick={() => onTemplateChange(template)}
          >
            <h3 className="template-name">{template.name}</h3>
            <p className="template-description">{template.description}</p>
            <div className="template-items-count">
              {template.items.length} 项物品
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplateSelector