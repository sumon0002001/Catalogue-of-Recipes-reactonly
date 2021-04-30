import React, { useState, useEffect} from 'react';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const RandomMeal = () => {
    const [meal, setMeal] = useState(undefined);

    useEffect(() => {
      
      async function getMeal() {
         const res = await fetch(API_URL);
         const data = await res.json();
         setMeal(data.meals[0]); 
      }
      getMeal();
            }, [])


    if(!meal) return null;

    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strCategory,
        strArea
    } = meal;
    return (
      <div className="meal">
          <div className="img-container">
              <img src={strMealThumb} alt={strMeal}/>
          </div>
          <div>
              <h2 className="meal-title">{strMeal}</h2>
              <p className="meal-instruction">{strInstructions}</p>
              <ul className="meal-info">
                  <li>
                    Category:
                  <strong>{strCategory}</strong>
                  </li>
                  <li>
                      Aria:
                   <strong>{strArea}</strong>

                  </li>
              </ul>
          </div>
      </div>
  )
}

export default RandomMeal;