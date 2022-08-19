export const getImange = async()=>{
    const apiKey = '9MUKydmrQOEkfBWWSPUOYkrka2ORDcjy';
try {
    const httpCall = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data}= await httpCall.json();
   

    const {url}=  data.images.original;
 
    return url;
} catch (error) {
    return "No se encontro la imagen"
}
   
}


