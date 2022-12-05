import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'
import styles from './HeaderLogo.module.scss'

const HeaderLogo = () => {
  return (
    <Link to={'/'} className={styles.container}>
      <img src={logo} className={styles.logoImage} alt={'logo'} />
      <p className={styles.text}>AtomMaker</p>
    </Link>
  )
}

export default HeaderLogo
