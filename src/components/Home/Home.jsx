import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';


export default function Home() {
 
  const [meals,setMeals]=useState([]);
  async function getData() {
   let {data}= await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
   setMeals(data.meals)
  };

 

  useEffect(()=>{
    getData()
  },[])


  return <>
  {meals.length>0 ?  <div className="row g-3">
  {meals.map((mealInfo)=> <Card meal={mealInfo} key={mealInfo.idMeal}/>)}

  </div>: <Loading/>}
 
    </>
   
  
}

