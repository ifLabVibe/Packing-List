const STORAGE_KEYS = {
  CURRENT_TEMPLATE: 'travel_checklist_current_template',
  CURRENT_ITEMS: 'travel_checklist_current_items',
  CUSTOM_TEMPLATES: 'travel_checklist_custom_templates',
  SAVED_CHECKLISTS: 'travel_checklist_saved_checklists'
}

export const saveCurrentTemplate = (template) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_TEMPLATE, JSON.stringify(template))
  } catch (error) {
    console.error('Failed to save template:', error)
  }
}

export const loadCurrentTemplate = () => {
  try {
    const template = localStorage.getItem(STORAGE_KEYS.CURRENT_TEMPLATE)
    return template ? JSON.parse(template) : null
  } catch (error) {
    console.error('Failed to load template:', error)
    return null
  }
}

export const saveCurrentItems = (items) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_ITEMS, JSON.stringify(items))
  } catch (error) {
    console.error('Failed to save items:', error)
  }
}

export const loadCurrentItems = () => {
  try {
    const items = localStorage.getItem(STORAGE_KEYS.CURRENT_ITEMS)
    return items ? JSON.parse(items) : []
  } catch (error) {
    console.error('Failed to load items:', error)
    return []
  }
}

export const saveCustomTemplates = (templates) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_TEMPLATES, JSON.stringify(templates))
  } catch (error) {
    console.error('Failed to save custom templates:', error)
  }
}

export const loadCustomTemplates = () => {
  try {
    const templates = localStorage.getItem(STORAGE_KEYS.CUSTOM_TEMPLATES)
    return templates ? JSON.parse(templates) : {}
  } catch (error) {
    console.error('Failed to load custom templates:', error)
    return {}
  }
}

export const saveSavedChecklists = (checklists) => {
  try {
    localStorage.setItem(STORAGE_KEYS.SAVED_CHECKLISTS, JSON.stringify(checklists))
  } catch (error) {
    console.error('Failed to save checklists:', error)
  }
}

export const loadSavedChecklists = () => {
  try {
    const checklists = localStorage.getItem(STORAGE_KEYS.SAVED_CHECKLISTS)
    return checklists ? JSON.parse(checklists) : []
  } catch (error) {
    console.error('Failed to load checklists:', error)
    return []
  }
}

export const saveChecklist = (name, template, items) => {
  try {
    const savedChecklists = loadSavedChecklists()
    const newChecklist = {
      id: 'checklist_' + Date.now(),
      name,
      template,
      items: [...items],
      createdAt: new Date().toISOString()
    }

    const updatedChecklists = [newChecklist, ...savedChecklists]
    saveSavedChecklists(updatedChecklists)
    return newChecklist
  } catch (error) {
    console.error('Failed to save checklist:', error)
    return null
  }
}

export const deleteChecklist = (checklistId) => {
  try {
    const savedChecklists = loadSavedChecklists()
    const filteredChecklists = savedChecklists.filter(checklist => checklist.id !== checklistId)
    saveSavedChecklists(filteredChecklists)
  } catch (error) {
    console.error('Failed to delete checklist:', error)
  }
}

export const clearAllData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key)
    })
  } catch (error) {
    console.error('Failed to clear data:', error)
  }
}