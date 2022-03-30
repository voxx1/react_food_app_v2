import './Header.module.css'
import mealsImg from '../../assets/table-of-food.jpg'
import classes from "./Header.module.css"
import HeaderCardButton from './HeaderCardButton'

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h2>React Meals App</h2>
                <HeaderCardButton showCard={props.showCard} />
            </header>
            <div className={classes[`main-image`]}>
                <img src={mealsImg} alt="Table of food" />
            </div>
        </>

    )
}

export default Header