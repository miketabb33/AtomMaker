import periodicTableJson from './periodicTable.json'
import { parseElements } from '../logic/parseElements'
import { PeriodicElement } from '../types/PeriodicElement'

export const getAllElements = (): PeriodicElement[] => {
  return parseElements(periodicTableJson)
}

export const findElementByAtomicNumber = (
  atomicNumber: number
): PeriodicElement | undefined => {
  return getAllElements().find((element) => element.number === atomicNumber)
}
