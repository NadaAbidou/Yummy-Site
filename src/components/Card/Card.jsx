import React from 'react'
import style from './Card.module.css';
import { Link } from 'react-router-dom';


export default function Card({meal}) {
  return <>
  <div className={`${style.meal} col-md-3`}>
        <Link className="text-dark" to={`/${meal.idMeal}`} >
          <div
            className={`${style.inner} position-relative rounded-3 overflow-hidden`}>
            <img src={meal.strMealThumb} className="w-100" alt={meal.strMeal} />
            <div className="layer w-100 h-100 position-absolute start-0 d-flex align-items-center p-3">
              <h2>{meal.strMeal}</h2>
            </div>
          </div>
        </Link>
      </div>
  </>
}

