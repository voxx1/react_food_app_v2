import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CardContext from '../../store/card-context';

const MealItem = (props) => {

    const ctx = useContext(CardContext);

    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        ctx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} mealId={props.id} />
            </div>
        </li>
    )
}

export default MealItem