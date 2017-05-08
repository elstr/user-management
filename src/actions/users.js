export const removeUser = user => ({
  type: 'REMOVE_USER',
  user
});
export const editUser = (idx, editedUser) => ({
  type: 'EDIT_USER',
  idx,
  editedUser
});
