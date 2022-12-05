import styles from './Chip.module.scss'
import cross from '../../images/cross-sign.png'

type ChipProps = {
  id: string
  name: string
  onClickClose: (id: string) => void
}

const Chip = ({ id, name, onClickClose }: ChipProps) => {
  return (
    <div className={styles.chip}>
      <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <img
          className={styles.cross}
          src={cross}
          onClick={() => onClickClose(id)}
          alt={'cross-image'}
        />
      </div>
    </div>
  )
}

export default Chip
