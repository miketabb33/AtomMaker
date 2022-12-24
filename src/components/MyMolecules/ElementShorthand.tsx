import { findElementByAtomicNumber } from '../../DataStore/PeriodicTable'

type ElementShorthandProps = {
  elementAtomicIds: number[]
}

type ElementGroup = {
  elementAtomicId: number
  symbol: string
  amount: number
}

const groupElements = (orderedIds: number[]) => {
  const groupedIds: ElementGroup[] = []
  orderedIds.forEach((id) => {
    if (groupedIds[groupedIds.length - 1]?.elementAtomicId === id) {
      groupedIds[groupedIds.length - 1].amount += 1
    } else {
      const element = findElementByAtomicNumber(id)
      const newGroup: ElementGroup = {
        elementAtomicId: id,
        amount: 1,
        symbol: element?.symbol || 'Null',
      }
      groupedIds.push(newGroup)
    }
  })
  return groupedIds
}

const ElementShorthand = ({ elementAtomicIds }: ElementShorthandProps) => {
  const orderedIds = elementAtomicIds.sort((a, b) => a - b)
  const elementGroups = groupElements(orderedIds)
  console.log(elementGroups)

  return (
    <p>
      {elementGroups.map((group) => {
        return (
          <span>
            {group.symbol}
            <sup>{group.amount > 1 && group.amount}</sup>
          </span>
        )
      })}
    </p>
  )
}

export default ElementShorthand
