import { addItem } from './Commons'
test('addItem should add the passed item to the list', () => {
  const startItem = [
    {id:1, name: 'one', isActive: true},
    {id:2, name: 'two', isActive: true}
  ]

  const newItem = {id:3, name: 'three', isActive: true}

  const expected = [
    {id:1, name: 'one', isActive: true},
    {id:2, name: 'two', isActive: true},
    {id:3, name: 'three', isActive: true}
  ]

  const result = addItem(startItem, newItem)

  expect(result).toEqual(expected)
})
test('addItem should not mutate the existing item array', () => {
  const startItem = [
    {id:1, name:'one', isActive:true},
    {id:2, name:'two', isActive:true}
  ]
  const newItem = {id:3, name:'three', isActive:true}

  const expected = [
    {id:1, name:'one', isActive:true},
    {id:2, name:'two', isActive:true},
    {id:3, name:'three', isActive:true}
  ]

  const result = addItem(startItem, newItem)

  expect(result).not.toBe(startItem)
})
