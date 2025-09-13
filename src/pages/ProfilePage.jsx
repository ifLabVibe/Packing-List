import React from 'react'
import './ProfilePage.css'

const ProfilePage = ({ onClearAllData }) => {
  const handleClearData = () => {
    if (window.confirm('确定要清空所有数据吗？此操作无法撤销。')) {
      onClearAllData()
    }
  }

  return (
    <div className="profile-page">
      <header className="page-header">
        <h1>我的</h1>
        <p>应用设置与数据管理</p>
      </header>

      <div className="settings-section">
        <div className="settings-group">
          <h3>数据管理</h3>
          <div className="setting-item">
            <div className="setting-info">
              <h4>清空所有数据</h4>
              <p>删除所有保存的清单和设置，恢复到初始状态</p>
            </div>
            <button
              className="danger-button"
              onClick={handleClearData}
            >
              清空数据
            </button>
          </div>
        </div>

        <div className="settings-group">
          <h3>关于应用</h3>
          <div className="setting-item">
            <div className="setting-info">
              <h4>版本信息</h4>
              <p>行者清单 v1.0.0</p>
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <h4>应用介绍</h4>
              <p>高效整理出行物品，避免遗漏重要物品。支持场景化模板和自定义清单。</p>
            </div>
          </div>
        </div>

        <div className="settings-group">
          <h3>使用提示</h3>
          <div className="tip-list">
            <div className="tip-item">
              <div className="tip-icon">💡</div>
              <div className="tip-content">
                <h4>选择合适的模板</h4>
                <p>根据出行类型选择对应的预设模板，可以大幅提升整理效率</p>
              </div>
            </div>
            <div className="tip-item">
              <div className="tip-icon">📝</div>
              <div className="tip-content">
                <h4>添加个人物品</h4>
                <p>每个人的出行需求不同，记得添加个人必需的特殊物品</p>
              </div>
            </div>
            <div className="tip-item">
              <div className="tip-icon">💾</div>
              <div className="tip-content">
                <h4>保存常用清单</h4>
                <p>将经常使用的清单保存下来，下次出行时可以直接使用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage