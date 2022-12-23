export const makeId = (length: number) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const randomId = Array(length)
    .join()
    .split(',')
    .map((_) =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    )
    .join('')
  return randomId
}
