import { baseURL } from "../../constants"
const getImageUrl = (breed, subBreed) =>{
    if(breed === undefined || subBreed === undefined){
        throw new Error('no parameters was recived')
    }
    if(subBreed.length < 1){
        return `${baseURL}breed/${breed}/images/random/1`
    }
    return `${baseURL}breed/${breed}/${subBreed}/images/random/1`
}

export default getImageUrl