export const findIndex = (list, id) => list.findIndex(item => item.id === id)

export const getById = (list, id) => Object.assign({}, list.find(item => item.id === id))

export const addItem = (list, item) => [...list, item]

export const removeItem = (list, id) => list.filter(item => item.id !== id)

export const updateList = (list, item) => {
  const index = findIndex(list,item.id)
  return [
    ...list.slice(0, index),
    item,
    ...list.slice(index+1)
  ]
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


// Filtrado de los que no estan en el array1 del array2, devuelve sandra y peter
// var result1 = [
//     {id:1, name:'Sandra', type:'user', username:'sandra'},
//     {id:2, name:'John', type:'admin', username:'johnny2'},
//     {id:3, name:'Peter', type:'user', username:'pete'},
//     {id:4, name:'Bobby', type:'user', username:'be_bob'}
// ];
//
// var result2 = [
//     {id:2, name:'John', email:'johnny@example.com'},
//     {id:4, name:'Bobby', email:'bobby@example.com'}
// ];
//
//
// var result = result1.filter(function(o1){
//     // filter out (!) items in result2
//     return !result2.some(function(o2){
//         return o1.id === o2.id;          // assumes unique id
//     })
// })


// retornar array de ids
// var usersInGroups = groups.map(group => group.users.map(function(user){
//     return user.id;
// }).concat())
