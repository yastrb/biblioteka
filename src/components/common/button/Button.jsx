import styles from "../../../style"
const Button = ({ label, onClick, className }) => {
    return (
        <button
            onClick={onClick}
<<<<<<< HEAD
            className={`${styles.button} ${className} border border-button rounded-xl`}>
=======
            className={`${styles.button} ${className} py-[14px] w-[240px] border border-button rounded-xl`}>
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
            {label}
        </button>
    )
}

export default Button