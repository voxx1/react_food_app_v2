import classes from './MealsList.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem';
import { useEffect, useState } from 'react'


const MealsList = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [allMeals, setAllMeals] = useState([])


    useEffect(() => {
        const fetchMeals = async () => {
            setError(null)
            try {
                const response = await fetch("https://react-h-1bba3-default-rtdb.europe-west1.firebasedatabase.app/meals.json")
                if (!response.ok) {

                    throw new Error("Something went wrong! :(");
                }
                const data = await response.json();



                const transformedMeals = [];

                for (const key in data) {
                    transformedMeals.push({
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price
                    })
                }

                setAllMeals(transformedMeals)
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)

        }
        fetchMeals();


    }, [])

    let listOfMeals = <p>Your meals are loading...</p>

    if (error === null && isLoading === false) {
        listOfMeals = <ul>
            {allMeals.map(meal => <MealItem name={meal.name} description={meal.description} price={meal.price} id={meal.id} key={meal.id} />)}
        </ul>
    }

    if (error !== null) {
        listOfMeals = error
    }

    return (
        <div className={classes.meals}>
            <Card>
                {listOfMeals}
            </Card>

        </div>
    )

}

export default MealsList