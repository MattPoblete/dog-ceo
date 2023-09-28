import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Col, Space, Collapse  } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';

import { removeFilter } from '../../redux/reducers/filtersReducer'
import { filter } from '../../constants';
import './filtersList.css'

const FiltersList = () => {
  const filters = useSelector((state: any)=>state.filters.currentFilters)
  const dispatch = useDispatch()
  const handleDelete = (index: number) =>{
    dispatch(removeFilter(index))
  }
  return (
    <Row gutter={[8,8]} justify={'center'}>
      {filters.length > 0 && filters.map((filter: filter, index: number)=>(
        <Col key={index}>
          <Button className='filter' danger icon={<DeleteOutlined />} onClick={()=>handleDelete(index)}>
            {filter.breed + ' ' + filter.subBreed}
            </Button>
        </Col>
      ))}
    </Row>
  )
}

export default FiltersList