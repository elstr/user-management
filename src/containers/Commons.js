export const generateId = () => Math.floor(Math.random()*1000)

export const addItem = (list, item) => [...list, item]

export const updateItem = (item) => ({...item, isActive: !item.isActive})

export const updateList = (list, updatedItem) => {
  const updatedIndex = list.findIndex(item => item.id === updatedItem.id)
  return [
    ...list.slice(0, updatedIndex),
    updatedItem,
    ...list.slice(updatedIndex+1)
  ]
}

export const findById = (id, list) => list.find(item => item.id === id)

export const persistState = (key, value) => sessionStorage.setItem(key, JSON.stringify(value))

export const getState = (key) => JSON.parse(sessionStorage.getItem(key)) 

export const getArray = (value) => Array.isArray(value) ? value : []
