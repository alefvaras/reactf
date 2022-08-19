import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';


const apiKey = '9MUKydmrQOEkfBWWSPUOYkrka2ORDcjy';

export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['dragon ball'])
  const onAddCategory = (newCategory) => {
    //  setcategories([...categories,'ale']);
 
    if(categories.includes(newCategory)) return;
    setcategories(cat => {
      return [...cat, newCategory]
    });
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* <AddCategory setcategories={setcategories} /> */}
      <AddCategory onNewCategory={value=>onAddCategory(value)}/>
      {/* <button onClick={onAddCategory}>Agregar</button> */}

        {categories.map(category => 

           (
            <GifGrid key={category} category={category}/>
        
          )
        )}
 
    </>

  )
}
