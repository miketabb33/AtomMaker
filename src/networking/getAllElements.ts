import { Element } from '../types/Element'

export const getAllElements = (): Promise<Element[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const results = await fetch(
        'https://periodic-table-elements-info.herokuapp.com/elements'
      )
      const data: Element[] = await results.json()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
