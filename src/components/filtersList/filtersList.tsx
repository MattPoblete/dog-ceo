import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Col } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';

import { removeFilter } from '../../redux/reducers/filtersReducer'

const FiltersList = () => {
  const filters = useSelector((state: any)=>state.filters.currentFilters)
  const dispatch = useDispatch()
  const handleDelete = (index) =>{
    dispatch(removeFilter(index))
  }
  return (
    <>
      <Row gutter={{sm:2}}>
        {filters.length > 0 && filters.map((filter, i)=>(
          <Col key={i} className='py-8'>
            <Button shape='round' type='primary' danger icon={<DeleteOutlined />} onClick={()=>handleDelete(i)}>
              {filter.breed + ' ' + filter.subBreed}
              </Button>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default FiltersList