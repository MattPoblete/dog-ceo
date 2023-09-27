import {useSelector, useDispatch} from 'react-redux'
import { selectBreed, selectSubBreed } from '../../redux/reducers/breedsReducer'

import { Select } from 'antd'
const BreedsListSelect = () => {
  const breeds = useSelector((state: any)=>state.breeds)
  const selectedBreed = breeds.selectedBreed
  const subBreeds = breeds.selectedBreed.subBreed
  const dispatch = useDispatch()

  const handleChange = (breed: any)=> {
    const targetBreed = breed.title
    const newSelectedBreed = {
      breed: targetBreed,
      subBreed: breeds.breedsList[targetBreed]
    }
    dispatch(selectBreed(newSelectedBreed))
  }

  const handleSubBreedChange = (SubBreed: any) => {
    dispatch(selectSubBreed(SubBreed.title))
  }

  return (
    <div>
      <Select value={selectedBreed.breed}  onClick={(event)=> handleChange(event?.target)}>
        {Object.keys(breeds.breedsList).map((breed: string, index:number) => (
          <Select.OptGroup key={index} label={breed}/>
        ))}
      </Select>
      {subBreeds.length > 0 &&
      <Select value={selectedBreed.selectedSubBreed} onClick={(event)=> handleSubBreedChange(event.target)}>
        {selectedBreed.subBreed.map((subBreed: string, index: number)=> (
          <Select.OptGroup  key={index} label={subBreed}/>
        ))}
      </Select>
      }
    </div>
  )
}

export default BreedsListSelect