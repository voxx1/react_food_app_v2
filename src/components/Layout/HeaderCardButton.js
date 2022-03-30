
import classes from "./HeaderCardButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CardContext from "../../store/card-context"
import { useContext } from "react"

const HeaderCardButton = (props) => {

    const ctx = useContext(CardContext);

    const cartItemsNumber = ctx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)
    return (
        <button onClick={props.showCard} className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemsNumber}</span>
        </button >

    )
}

export default HeaderCardButton