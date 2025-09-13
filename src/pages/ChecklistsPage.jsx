import React from 'react'
import './ChecklistsPage.css'

const ChecklistsPage = ({ savedChecklists, onSelectChecklist, onDeleteChecklist }) => {
  if (savedChecklists.length === 0) {
    return (
      <div className="checklists-page">
        <header className="page-header">
          <h1>已有清单</h1>
          <p>管理你保存的出行清单</p>
        </header>
        <div className="empty-state">
          <div className="empty-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>暂无保存的清单</h3>
          <p>在主页创建并保存清单后，将会显示在这里</p>
        </div>
      </div>
    )
  }

  return (
    <div className="checklists-page">
      <header className="page-header">
        <h1>已有清单</h1>
        <p>管理你保存的出行清单</p>
      </header>

      <div className="checklists-grid">
        {savedChecklists.map(checklist => {
          const checkedCount = checklist.items.filter(item => item.checked).length
          const totalCount = checklist.items.length
          const progress = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0

          return (
            <div key={checklist.id} className="checklist-card">
              <div className="card-header">
                <h3>{checklist.name}</h3>
                <button
                  className="delete-button"
                  onClick={() => onDeleteChecklist(checklist.id)}
                  title="删除清单"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="card-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">{progress}% 完成</span>
              </div>

              <div className="card-info">
                <span className="item-count">{totalCount} 项物品</span>
                <span className="save-date">
                  {new Date(checklist.createdAt).toLocaleDateString('zh-CN')}
                </span>
              </div>

              <button
                className="select-button"
                onClick={() => onSelectChecklist(checklist)}
              >
                使用此清单
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChecklistsPage