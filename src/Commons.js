export const findIndex = (list, id) => list.findIndex(item => item.id === id)

export const getById = (list, id) => Object.assign({}, list.find(item => item.id === id))

export const addItem = (list, item) => [...list, item]

export const addItems =(list, items) => {
  items.map(item => {
    list = addItem(list, item)
  })
  return list
}

export const removeItem = (list, id) => list.filter(item => item.id !== id)

export const updateList = (list, item) => {
  const index = findIndex(list,item.id)
  return [
    ...list.slice(0, index),
    item,
    ...list.slice(index+1)
  ]
}

export const getDiffs = (list, items) => {
  return list.filter(function(n) {
    return items.indexOf(n) === -1;
  });
}


    // let filter = grupos.map(grupo =>
    //               grupo.users.map(usuario => {
    //                 return usuarios.filter(user => {
    //                   console.log('usuario de grupo', user);
    //                   console.log('usuario seleccionado', usuario);
    //                   return usuario.id !== user.id
    //                 })
    //               })
    //             )
    // console.log(filter);
