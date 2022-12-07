import { PeriodicElement } from '../types/PeriodicElement'
import { PeriodicTableDto } from '../types/PeriodicTableDto'

export const parseElements = (
  periodicTableDto: PeriodicTableDto[]
): PeriodicElement[] => {
  return periodicTableDto.map((dto) => {
    return {
      name: dto.name || 'No Name',
      atomicMass: dto.atomic_mass || 0,
      category: dto.category || 'No Category',
      discoveredBy: dto.discovered_by || 'Unknown',
      melt: dto.melt || 0,
      boil: dto.boil || 0,
      density: dto.density || 0,
      molarHeat: dto.molar_heat || 0,
      namedBy: dto.named_by || 'Unknown',
      number: dto.number || -1,
      period: dto.period || 0,
      phase: dto.phase || 'Unknown',
      symbol: dto.symbol || 'Unknown',
      xpos: dto.xpos || 0,
      ypos: dto.ypos || 0,
      shells: dto.shells || [],
      electronConfiguration: dto.electron_configuration || 'Unknown',
      electronConfigurationSemantic:
        dto.electron_configuration_semantic || 'Unknown',
      electronAffinity: dto.electron_affinity || 0,
      electronegativityPauling: dto.electronegativity_pauling || 0,
      cpkHex: dto['cpk-hex'] || 'Unknown',
    }
  })
}
