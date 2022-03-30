import classes from './MealItemForm.module.css'
import { useRef } from 'react'

const MealItemForm = (props) => {
    const amountInputRef = useRef();

    const formHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount



        props.onAddToCart(enteredAmountNumber);
    }



    return (
        <form onSubmit={formHandler} className={classes.form}>
            <div className={classes.input}>
                <label>Amount</label>
                <input ref={amountInputRef} id={props.mealId} type="number" min="1" max="10" step="1" defaultValue="1" />

            </div>
            <button type="submit">+ Add</button>
        </form>
    )
}

export default MealItemForm