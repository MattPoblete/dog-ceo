import {  useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../services"
import getImageUrl from "../../services/getImageUrl/getImgaeUrl"
import { useEffect } from "react"
import { addImage } from "../../redux/reducers/filtersReducer"


function DogsImagesDisplay() {
    const filters = useSelector((state: any)=>state.filters.currentFilters)
    const dispatch = useDispatch()

    useEffect(()=>{
        filters.forEach((element, index) => {
            fetchData(getImageUrl(element.breed, element.subBreed))
            .then(res=>res.message)
            .then(data=>dispatch(addImage({src: data[0], index})))
            
        });
    },[])
    return (
        <div>
            {filters.map((filter,index)=>(
                <img key={index} alt="dog-image" src={filter.src}/>
            ))}
        </div>
    )
}

export default DogsImagesDisplay