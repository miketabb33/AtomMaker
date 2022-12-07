type TableRowProps = {
  item: any
}

const TableRow = ({ item }: TableRowProps) => {
  const parseValue = (v: unknown) => {
    let value: any = v
    if (typeof value == 'object') {
      value = JSON.stringify(value)
    }
    return value
  }
  return (
    <>
      {Object.entries(item).map(([k, v]) => {
        return <td key={`${item.number}${k}`}>{parseValue(v)}</td>
      })}
    </>
  )
}

export default TableRow
