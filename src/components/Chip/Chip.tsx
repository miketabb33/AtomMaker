import styles from './Chip.module.scss'
import cross from '../../images/cross-sign.png'

export type ChipData = {
  id: string
  name: string
}

type ChipProps = {
  chipData: ChipData
  onClickClose: (id: string) => void
}

const Chip = ({ chipData: data, onClickClose }: ChipProps) => {
  return (
    <div className={styles.chip}>
      <div className={styles.container}>
        <p className={styles.name}>{data.name}</p>
        <img
          className={styles.cross}
          src={cross}
          onClick={() => onClickClose(data.id)}
          alt={'cross'}
        />
      </div>
    </div>
  )
}

export default Chip
