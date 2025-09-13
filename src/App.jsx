import { useState, useEffect } from 'react'
import BottomNavigation from './components/BottomNavigation'
import HomePage from './pages/HomePage'
import ChecklistsPage from './pages/ChecklistsPage'
import ProfilePage from './pages/ProfilePage'
import { TRAVEL_TEMPLATES } from './data/templates'
import {
  saveCurrentTemplate,
  loadCurrentTemplate,
  saveCurrentItems,
  loadCurrentItems,
  loadSavedChecklists,
  saveChecklist,
  deleteChecklist,
  clearAllData
} from './utils/storage'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [currentItems, setCurrentItems] = useState([])
  const [savedChecklists, setSavedChecklists] = useState([])

  useEffect(() => {
    const savedTemplate = loadCurrentTemplate()
    const savedItems = loadCurrentItems()
    const checklists = loadSavedChecklists()

    setSavedChecklists(checklists)

    if (savedTemplate) {
      setSelectedTemplate(savedTemplate)
      if (savedItems.length > 0) {
        setCurrentItems(savedItems)
      } else {
        setCurrentItems(savedTemplate.items)
      }
    }
  }, [])

  const handleTemplateChange = (template) => {
    const templateWithFreshItems = {
      ...template,
      items: template.items.map(item => ({ ...item, checked: false }))
    }
    setSelectedTemplate(templateWithFreshItems)
    setCurrentItems(templateWithFreshItems.items)

    saveCurrentTemplate(templateWithFreshItems)
    saveCurrentItems(templateWithFreshItems.items)
  }

  const handleItemToggle = (itemId) => {
    const updatedItems = currentItems.map(item =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    )
    setCurrentItems(updatedItems)
    saveCurrentItems(updatedItems)
  }

  const handleResetChecklist = () => {
    if (selectedTemplate) {
      const resetItems = selectedTemplate.items.map(item => ({ ...item, checked: false }))
      setCurrentItems(resetItems)
      saveCurrentItems(resetItems)
    }
  }

  const handleAddCustomItem = (newItem) => {
    const updatedItems = [...currentItems, newItem]
    setCurrentItems(updatedItems)
    saveCurrentItems(updatedItems)
  }

  const handleSaveChecklist = (name) => {
    if (selectedTemplate && currentItems.length > 0) {
      const savedChecklist = saveChecklist(name, selectedTemplate, currentItems)
      if (savedChecklist) {
        const updatedChecklists = [savedChecklist, ...savedChecklists]
        setSavedChecklists(updatedChecklists)
      }
    }
  }

  const handleSelectChecklist = (checklist) => {
    setSelectedTemplate(checklist.template)
    setCurrentItems(checklist.items)
    saveCurrentTemplate(checklist.template)
    saveCurrentItems(checklist.items)
    setActiveTab('home')
  }

  const handleDeleteChecklist = (checklistId) => {
    deleteChecklist(checklistId)
    const updatedChecklists = savedChecklists.filter(checklist => checklist.id !== checklistId)
    setSavedChecklists(updatedChecklists)
  }

  const handleClearAllData = () => {
    clearAllData()
    setSelectedTemplate(null)
    setCurrentItems([])
    setSavedChecklists([])
  }

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            selectedTemplate={selectedTemplate}
            onTemplateChange={handleTemplateChange}
            currentItems={currentItems}
            onItemToggle={handleItemToggle}
            onAddCustomItem={handleAddCustomItem}
            onResetChecklist={handleResetChecklist}
            onSaveChecklist={handleSaveChecklist}
          />
        )
      case 'checklists':
        return (
          <ChecklistsPage
            savedChecklists={savedChecklists}
            onSelectChecklist={handleSelectChecklist}
            onDeleteChecklist={handleDeleteChecklist}
          />
        )
      case 'profile':
        return (
          <ProfilePage
            onClearAllData={handleClearAllData}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="app">
      <main className="app-main">
        {renderCurrentPage()}
      </main>
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}

export default App
