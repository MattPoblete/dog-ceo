import { useDispatch, useSelector } from "react-redux"
import { addFilter } from "../../redux/reducers/filtersReducer"
import getImageUrl from "../../services/getImageUrl/getImgaeUrl"
import { fetchData } from "../../services"
import { addImage } from "../../redux/reducers/filtersReducer"

const AddSearchFilterButton = () => {
    const selectedBreed = useSelector((state: any)=> state.breeds.selectedBreed)
    const dispatch = useDispatch()
    const createWithSrc = (dog)=>{
        fetchData(getImageUrl(dog.breed, dog.subBreed))
        .then(res=>res.message)
        .then(data=>dispatch(addFilter({breed: selectedBreed.breed, src: data, subBreed: selectedBreed.subBreed })))
      }
    const handleClick = ()=>{
        const dog = {
            breed: selectedBreed.breed,
            subBreed:selectedBreed.subBreed
        }
        createWithSrc(dog)
      
    }
    return (
        <>
            <button onClick={handleClick}>Add filter</button>
        </>
    )
}

export default AddSearchFilterButton
