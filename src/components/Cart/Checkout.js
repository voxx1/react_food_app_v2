import classes from "./Checkout.module.css"
import { useRef } from "react";

const Checkout = (props) => {


    let nameInputRef = useRef();
    const surnameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();


    const formSubmit = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredSurname = surnameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;

        const enteredInfo = {
            name: enteredName,
            surname: enteredSurname,
            street: enteredStreet,
            postal: enteredPostal
        }

        props.onConfirm(enteredInfo)

    }

    return (
        <form onSubmit={formSubmit} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input required name="name" ref={nameInputRef} type="text" />
            </div>
            <div className={classes.control}>
                <label htmlFor="surname">Surname</label>
                <input required name="surname" ref={surnameInputRef} type="text" />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input required name="street" ref={streetInputRef} type="text" />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal-code">Postal code</label>
                <input required name="zip" ref={postalInputRef} type="text" pattern="[0-9]{5}" />
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit" className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout