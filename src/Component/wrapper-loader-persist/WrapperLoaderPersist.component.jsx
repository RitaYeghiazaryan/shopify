
import styles from "./wrapper-loader-persist.module.scss";
import classNames from "classnames";
import Loader from "../loader/Loader.component";

const WrapperLoaderPersist = (props) => {
    const { children, isLoading } = props;

    const childrenClasses = classNames({
        notVisible: isLoading,
    });

    return (
        <>
            {isLoading && (
                <div className={styles.container}>
                    <Loader />
                </div>
            )}
            <div className={childrenClasses}>{children}</div>
        </>
    );
};

export default WrapperLoaderPersist;