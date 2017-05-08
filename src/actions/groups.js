export const removeGroup = group => ({
  type: 'REMOVE_GROUP',
  group
});

export const editGroup = (idx, editedGroup) => ({
  type: 'EDIT_GROUP',
  idx,
  editedGroup
});
