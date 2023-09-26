import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFilter } from '../../redux/reducers/filtersReducer'

const FiltersList = () => {
  const filters = useSelector((state: any)=>state.filters.currentFilters)
  const dispatch = useDispatch()
  const handleDelete = (index) =>{
    dispatch(removeFilter(index))
  }
  return (
    <>
      {filters.length > 0 && filters.map((filter, i)=>(
        <div key={i}>
          <p>{`${filter.breed}/${filter.subBreed}`}</p>
          <button onClick={()=>handleDelete(i)}>delete</button>
        </div>
      ))}
    </>
  )
}

export default FiltersList