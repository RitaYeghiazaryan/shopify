import Loader from '../loader/Loader.component'
import styles from './WrapperLoader.module.scss'

const WrapperLoader=(props)=>{
    const {isLoading, children}=props
    return isLoading?(
        <div className={styles.container}>
            <Loader/>
        </div>

    ):(children)
}

export  default WrapperLoader;
