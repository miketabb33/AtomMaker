export const prettyTitle = (title: string) => {
  return title.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => {
    return str.toUpperCase()
  })
}
