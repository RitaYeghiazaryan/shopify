//COMPONENT
import SingIn from './component/sign-in/SignIn.component'
import SignUp from './component/sign-up/SignUp.component'

//STYLES
import styles from './Auth.module.scss'
const Auth= () => {
    return (
        <div className={styles.container}>
            <SingIn/>
            <SignUp/>
            
        </div>
    )
}

export default Auth;
