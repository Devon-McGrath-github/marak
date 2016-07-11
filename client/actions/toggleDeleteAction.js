export const TOGGLE_DELETE = 'TOGGLE_DELETE'

export function toggleDelete(id) {
  return {
    type: TOGGLE_DELETE,
    id: id
  }
}
