import { useDispatch, useSelector } from "react-redux"
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { addFilter } from "../../redux/reducers/filtersReducer"
import getImageUrl from "../../services/getImageUrl/getImgaeUrl"
import { fetchData } from "../../services"


const AddSearchFilterButton = () => {
    const selectedBreed = useSelector((state: any)=> state.breeds.selectedBreed)
    const dispatch = useDispatch()
    const createWithSrc = (dog: any)=>{
        fetchData(getImageUrl(dog.breed, dog.subBreed))
        .then((res: any)=>res.message)
        .then(data=>dispatch(addFilter({breed: selectedBreed.breed, src: data, subBreed: selectedBreed.selectedSubBreed })))
      }

    const handleClick = ()=>{
        const dog = {
            breed: selectedBreed.breed,
            subBreed:selectedBreed.selectedSubBreed
        }
        createWithSrc(dog)
      
    }
    return (
        <>
            <Button shape='round' icon={<PlusOutlined />} type="primary" onClick={handleClick}>Add filter</Button>
        </>
    )
}

export default AddSearchFilterButton
