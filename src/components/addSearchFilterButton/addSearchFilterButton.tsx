import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { Button, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { addFilter, setError, setLoading } from "../../redux/reducers/filtersReducer"
import getImageUrl from "../../services/getImageUrl/getImgaeUrl"
import { fetchData } from "../../services"


const AddSearchFilterButton = () => {
    const [messageApi, contextHolder] = message.useMessage();
    let error = false
    const selectedBreed = useSelector((state: any)=> state.breeds.selectedBreed)
    const isLoading = useSelector((state: any)=>state.filters.isLoading)
    const dispatch = useDispatch()
    const createWithSrc = (dog: any)=>{
        fetchData(getImageUrl(dog.breed, dog.subBreed))
        .then((res: any)=>res.message)
        .then(data=>dispatch(addFilter({breed: selectedBreed.breed, src: data, subBreed: selectedBreed.selectedSubBreed })))
        .finally(()=>dispatch(setLoading(false)))
        .catch(displayError)
    }
    const displayError = () => {
        messageApi.error({
            type: 'error',
            content: 'Ocurrió un error, por favor intente nuevamente',
            duration: 3,
          })
    }
    const handleClick = ()=>{
        dispatch(setLoading(true))
        const dog = {
            breed: selectedBreed.breed,
            subBreed:selectedBreed.selectedSubBreed
        }
        createWithSrc(dog)
    }

    return (
        <>
           {contextHolder}
            <Button 
                style={{width: '100%'}}
                icon={<PlusOutlined />} 
                type="primary" 
                onClick={handleClick}
                loading={isLoading}
                aria-label="addFilterButton"
            />
        </>
    )
}

export default AddSearchFilterButton
