import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectBreed, selectSubBreed } from '../../redux/reducers/breedsReducer'
const BreedsListSelect = () => {
  const breeds = useSelector((state: any)=>state.breeds)
  const selectedBreed = breeds.selectedBreed
  const subBreeds = breeds.selectedBreed.subBreed
  const dispatch = useDispatch()

  const handleChange = (event: any)=> {
    const targetBreed = event.target.value
    const newSelectedBreed = {
      breed: targetBreed,
      subBreed: breeds.breedsList[targetBreed]
    }
    dispatch(selectBreed(newSelectedBreed))
  }
  const handleSubBreedChange = (event: any) => {
    const subBreed = event.target.value
    dispatch(selectSubBreed(subBreed))
  }

  useEffect(()=>{
    
  },[])
  return (
    <div>
      <h1>Breeds:</h1>
      <select value={selectedBreed.breed} onChange={handleChange}>
        {Object.keys(breeds.breedsList).map((breed, i) => (
          <option key={i}>{breed}</option>
        ))}
      </select>
      {subBreeds.length > 0 &&
      <select value={selectedBreed.selectedSubBreed} onChange={handleSubBreedChange}>
        {selectedBreed.subBreed.map((subBreed: string, key: number)=> (
          <option key={key}>{subBreed}</option>
        ))}
      </select>
      }
    </div>
  )
}

export default BreedsListSelect