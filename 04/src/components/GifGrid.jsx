import {useEffect, useState}  from 'react';
import { getGifs } from '../helpers/getGifs,js';
import UseFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifGrid = ({category}) => {


    const {images,isLoading} =UseFetchGifs(category);


    // const [images, setImages] = useState([]);

    // const getImages= async()=>{

    //     const newImages= await getGifs(category);

    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
  
    // }, []);
   
    return (
      <>
      <h3>{category}</h3>
      {
        isLoading?(<h2>cargando...</h2>):null
      }
      

<div className='card-grid'>

{images.map((image) => (
 <GifItem key={image.id}
//  title={image.title}
//  url={image.url}
{...image}
 />
))

}
</div>

      </>
    );
}

export default GifGrid;
