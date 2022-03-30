import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { useContext, useState } from 'react'
import CardContext from '../../store/card-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = (props) => {

    const ctx = useContext(CardContext)
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
    const itemsInCart = ctx.items.length > 0;
    const [fillingForm, setFillingForm] = useState(false)
    const [formSubmited, setFormSubmited] = useState(false)

    const cartItemRemoveHandler = id => {
        ctx.removeItem(id);
    }

    const orderingHandler = () => {
        setFillingForm(true)
    }

    const cancelingOrder = () => {
        setFillingForm(false)
    }

    const cartItemAddHandler = item => {
        ctx.addItem({ ...item, amount: 1 })
    }

    async function submitOrderHandler(userData) {
        const response = await fetch("https://react-h-1bba3-default-rtdb.europe-west1.firebasedatabase.app/userOrder.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedItems: ctx.items
            }),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        const data = await response.json();
        console.log(data)
        setFormSubmited(true)
        ctx.clearCart();
    }

    const cartItems = ctx.items.map(item => <CartItem name={item.name} key={item.id} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />)


    let cartModalContent = <Modal>
        <ul className={classes["cart-items"]}>
            {cartItems}
        </ul>
        <div className={classes.total}>
            <span>Total amount:</span>
            <span>{totalAmount}</span>
        </div>
        {fillingForm && itemsInCart ? <Checkout onConfirm={submitOrderHandler} onCancel={cancelingOrder} /> :
            <div className={classes.actions}>
                <button onClick={props.closeCart} className={classes['button--alt']}>Close</button>
                {itemsInCart ? <button onClick={orderingHandler} className={classes.button}>Order</button> : null}
            </div>
        }
    </Modal>

    if (formSubmited === true) {
        cartModalContent =
            <Modal>
                <p>Your order was sent! :)</p>
                <div className={classes.actions}>
                    <button onClick={props.closeCart} className={classes['button--alt']}>Close</button>
                </div>
            </Modal>

    }

    return (
        <>
            {cartModalContent}
        </>

    )
}

export default Cart