import { PeriodicTableHerokuResponse } from '../types/PeriodicTableHerokuResponse'

export const getAllElements = (): Promise<PeriodicTableHerokuResponse[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const results = await fetch(
        'https://periodic-table-elements-info.herokuapp.com/elements'
      )
      const data: PeriodicTableHerokuResponse[] = await results.json()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
