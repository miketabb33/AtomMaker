import styles from './Chip.module.scss'
import cross from '../../images/cross-sign.png'

export type ChipIdentity = {
  id: string
  name: string
}

type ChipProps = {
  identity: ChipIdentity
  onClickClose: (id: string) => void
}

const Chip = ({ identity, onClickClose }: ChipProps) => {
  return (
    <div className={styles.chip}>
      <div className={styles.container}>
        <p className={styles.name}>{identity.name}</p>
        <img
          className={styles.cross}
          src={cross}
          onClick={() => onClickClose(identity.id)}
          alt={'cross-image'}
        />
      </div>
    </div>
  )
}

export default Chip
