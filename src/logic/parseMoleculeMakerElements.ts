import { MoleculeMakerElement } from '../types/MoleculeMakerElement'
import { PeriodicElement } from '../types/PeriodicElement'

export const parseMoleculeMakerElements = (
  periodicTable: PeriodicElement[]
): MoleculeMakerElement[] =>
  periodicTable.map((item) => {
    return {
      atomicNumber: item.number || -1,
      name: item.name || 'Invalid',
    }
  })
