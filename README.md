# 行者清单 (Travel Checklist)

一个现代化的旅行清单管理应用，帮助用户为不同类型的出行准备必需品。

## ✨ 功能特色

### 📋 多样化模板
- **短途出差(1-3天)** - 商务出行必需品
- **长途旅行(7天+)** - 长期旅行全面清单
- **露营/户外** - 户外露营装备清单
- **海岛度假** - 海滨度假必备物品

### 🔧 核心功能
- 选择预设模板快速创建清单
- 实时勾选/取消勾选物品
- 添加自定义物品到清单
- 保存完整的清单记录
- 重置清单状态
- 删除已保存的清单
- 清空所有数据

### 📱 用户界面
- 响应式设计，支持移动端和桌面端
- 分类显示物品（衣物、电子设备、证件文件等）
- 底部导航栏，三大功能页面：
  - 首页：模板选择和清单管理
  - 清单页：查看所有已保存的清单
  - 个人页：数据管理设置

## 🚀 快速开始

### 环境要求
- Node.js (建议 16.0.0 或更高版本)
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用

### 构建生产版本
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

### 代码检查
```bash
npm run lint
```

## 🛠️ 继续开发

### 技术栈
- **前端框架**: React 19.1.1
- **构建工具**: Vite 7.1.2
- **开发语言**: JavaScript (JSX)
- **样式**: CSS Modules
- **代码规范**: ESLint

### 项目结构
```
src/
├── components/          # 可复用组件
│   ├── BottomNavigation # 底部导航栏
│   ├── ChecklistDisplay # 清单显示组件
│   ├── TemplateSelector # 模板选择器
│   ├── ItemCategory     # 物品分类组件
│   └── AddCustomItem    # 添加自定义物品
├── pages/              # 页面组件
│   ├── HomePage        # 首页
│   ├── ChecklistsPage  # 清单管理页
│   └── ProfilePage     # 个人设置页
├── data/              # 数据定义
│   └── templates.js   # 清单模板数据
├── utils/             # 工具函数
│   └── storage.js     # 本地存储管理
└── App.jsx           # 主应用组件
```

### 开发指南

#### 添加新的清单模板
在 `src/data/templates.js` 中的 `TRAVEL_TEMPLATES` 对象中添加新模板：

```javascript
NEW_TEMPLATE: {
  id: 'unique_id',
  name: '模板名称',
  description: '模板描述',
  items: [
    {
      id: 'item_id',
      name: '物品名称',
      category: ITEM_CATEGORIES.CATEGORY_NAME,
      checked: false
    }
  ]
}
```

#### 添加新的物品分类
1. 在 `ITEM_CATEGORIES` 中添加新分类常量
2. 在 `CATEGORY_LABELS` 中添加对应的中文标签

#### 本地存储
应用使用 localStorage 保存数据，相关函数在 `src/utils/storage.js`：
- `saveCurrentTemplate()` - 保存当前模板
- `loadCurrentTemplate()` - 加载当前模板
- `saveChecklist()` - 保存完整清单
- `loadSavedChecklists()` - 加载所有保存的清单

### 代码规范
- 使用 ESLint 进行代码检查
- 组件命名使用 PascalCase
- 文件名与组件名保持一致
- 样式文件与组件文件同目录放置

### 贡献指南
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -m '添加新功能'`)
4. 推送到分支 (`git push origin feature/新功能`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。
