import styles from './DropDown.module.scss'

export type DropDownItem = {
  id: string
  name: string
}

type DropDownProps = {
  items: DropDownItem[]
  onClick: (item: DropDownItem) => void
}

const DropDown = ({ items, onClick }: DropDownProps) => {
  return (
    <div className={styles.dropdown}>
      {items.map((item) => (
        <p
          key={item.name}
          className={styles.item}
          onClick={() => {
            onClick(item)
          }}
        >
          {item.name}
        </p>
      ))}
    </div>
  )
}

export default DropDown
