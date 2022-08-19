
import React from 'react';
import {useEffect, useState}  from 'react';
import { getGifs } from '../helpers/getGifs,js';
const UseFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages= async()=>{

        const newImages= await getGifs(category);

        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
  
    }, []);

    return {
        images,
    //    images:images,
       isLoading

    };
}

export default UseFetchGifs;
