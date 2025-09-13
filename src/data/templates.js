export const ITEM_CATEGORIES = {
  CLOTHING: 'clothing',
  ELECTRONICS: 'electronics',
  DOCUMENTS: 'documents',
  TOILETRIES: 'toiletries',
  OUTDOOR: 'outdoor',
  MEDICINE: 'medicine',
  ACCESSORIES: 'accessories',
  OTHER: 'other'
}

export const CATEGORY_LABELS = {
  [ITEM_CATEGORIES.CLOTHING]: '衣物',
  [ITEM_CATEGORIES.ELECTRONICS]: '电子设备',
  [ITEM_CATEGORIES.DOCUMENTS]: '证件文件',
  [ITEM_CATEGORIES.TOILETRIES]: '洗漱用品',
  [ITEM_CATEGORIES.OUTDOOR]: '户外装备',
  [ITEM_CATEGORIES.MEDICINE]: '药品',
  [ITEM_CATEGORIES.ACCESSORIES]: '配饰',
  [ITEM_CATEGORIES.OTHER]: '其他'
}

export const TRAVEL_TEMPLATES = {
  BUSINESS_SHORT: {
    id: 'business_short',
    name: '短途出差(1-3天)',
    description: '适合短期商务出差的必需品',
    items: [
      { id: 'laptop', name: '笔记本电脑', category: ITEM_CATEGORIES.ELECTRONICS, checked: false },
      { id: 'charger', name: '充电器', category: ITEM_CATEGORIES.ELECTRONICS, checked: false },
      { id: 'documents', name: '身份证/护照', category: ITEM_CATEGORIES.DOCUMENTS, checked: false },
      { id: 'business_card', name: '名片', category: ITEM_CATEGORIES.DOCUMENTS, checked: false },
      { id: 'business_clothes', name: '正装', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'underwear_2', name: '内衣(2套)', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'toiletry_bag', name: '洗漱包', category: ITEM_CATEGORIES.TOILETRIES, checked: false },
      { id: 'phone_charger', name: '手机充电器', category: ITEM_CATEGORIES.ELECTRONICS, checked: false }
    ]
  },

  LONG_TRAVEL: {
    id: 'long_travel',
    name: '长途旅行(7天+)',
    description: '长期旅行的全面清单',
    items: [
      { id: 'clothes_week', name: '一周换洗衣物', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'shoes_2', name: '2双鞋子', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'toiletry_full', name: '完整洗漱用品', category: ITEM_CATEGORIES.TOILETRIES, checked: false },
      { id: 'medicine_basic', name: '常用药品', category: ITEM_CATEGORIES.MEDICINE, checked: false },
      { id: 'electronics_travel', name: '充电设备', category: ITEM_CATEGORIES.ELECTRONICS, checked: false },
      { id: 'documents_travel', name: '旅行证件', category: ITEM_CATEGORIES.DOCUMENTS, checked: false },
      { id: 'slippers', name: '便携拖鞋', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'laundry_bag', name: '脏衣袋', category: ITEM_CATEGORIES.OTHER, checked: false }
    ]
  },

  CAMPING_OUTDOOR: {
    id: 'camping_outdoor',
    name: '露营/户外',
    description: '户外露营装备清单',
    items: [
      { id: 'tent', name: '帐篷', category: ITEM_CATEGORIES.OUTDOOR, checked: false },
      { id: 'sleeping_bag', name: '睡袋', category: ITEM_CATEGORIES.OUTDOOR, checked: false },
      { id: 'flashlight', name: '手电筒', category: ITEM_CATEGORIES.OUTDOOR, checked: false },
      { id: 'insect_repellent', name: '驱蚊液', category: ITEM_CATEGORIES.OUTDOOR, checked: false },
      { id: 'outdoor_clothes', name: '户外服装', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'hiking_boots', name: '登山鞋', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'water_bottle', name: '水壶', category: ITEM_CATEGORIES.OTHER, checked: false },
      { id: 'first_aid', name: '急救包', category: ITEM_CATEGORIES.MEDICINE, checked: false }
    ]
  },

  BEACH_VACATION: {
    id: 'beach_vacation',
    name: '海岛度假',
    description: '海滨度假必备物品',
    items: [
      { id: 'swimsuit', name: '泳衣', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'sunscreen', name: '防晒霜', category: ITEM_CATEGORIES.TOILETRIES, checked: false },
      { id: 'sun_hat', name: '草帽', category: ITEM_CATEGORIES.ACCESSORIES, checked: false },
      { id: 'beach_shoes', name: '沙滩鞋', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'sunglasses', name: '太阳镜', category: ITEM_CATEGORIES.ACCESSORIES, checked: false },
      { id: 'beach_towel', name: '沙滩巾', category: ITEM_CATEGORIES.OTHER, checked: false },
      { id: 'summer_clothes', name: '夏季衣物', category: ITEM_CATEGORIES.CLOTHING, checked: false },
      { id: 'waterproof_bag', name: '防水袋', category: ITEM_CATEGORIES.OTHER, checked: false }
    ]
  }
}

export const createEmptyTemplate = () => ({
  id: 'custom_' + Date.now(),
  name: '自定义模板',
  description: '用户自定义的出行清单',
  items: []
})