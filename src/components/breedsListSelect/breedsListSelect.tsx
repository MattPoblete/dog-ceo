import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'
import { selectBreed, selectSubBreed } from '../../redux/reducers/breedsReducer'

import { Col, Row, Select } from 'antd'
import './breedsListSelect.css'
const BreedsListSelect = () => {
  const breeds = useSelector((state: any)=>state.breeds)
  const selectedBreed = breeds.selectedBreed
  const subBreeds = breeds.selectedBreed.subBreed
  const dispatch = useDispatch()

  const [breedsHandler, setBreedsHandler] = useState(false)
  const [subBreedsHandler, setSubBreedsHandler] = useState(false)

  const handleChange = (breed: any)=> {

    const targetBreed = breed.title
    const newSelectedBreed = {
      breed: targetBreed,
      subBreed: breeds.breedsList[targetBreed]
    }
    dispatch(selectBreed(newSelectedBreed))
    setBreedsHandler(!breedsHandler)
  }

  const handleSubBreedChange = (SubBreed: any) => {
    dispatch(selectSubBreed(SubBreed.title))
    setSubBreedsHandler(!subBreedsHandler)
  }

  return (
    <Row gutter={[8,8]}>
      <Col xs={24} md={12} >
        <Select className='list_select' value={selectedBreed.breed} open={breedsHandler} onClick={(event)=>{handleChange(event.target)}}>
          {Object.keys(breeds.breedsList).map((breed: string, index:number) => (
            <Select.OptGroup className='dropdown' key={index} label={breed}/>
          ))}
        </Select>
      </Col>
      <Col xs={24} md={12}>
        <Select className='list_select' open={subBreedsHandler} disabled={subBreeds.length === 0} value={selectedBreed.selectedSubBreed} onClick={(event)=> handleSubBreedChange(event.target)}>
          {selectedBreed.subBreed.map((subBreed: string, index: number)=> (
            <Select.OptGroup  key={index} label={subBreed}/>
          ))}
        </Select>
      </Col>
    </Row>
  )
}

export default BreedsListSelect