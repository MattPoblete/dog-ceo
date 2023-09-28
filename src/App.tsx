import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Space } from 'antd';


import './App.css'
import {fetchData} from './services';
import { baseURL, breedsURL, apiResponse } from './constants';
import { initBreeds } from './redux/reducers/breedsReducer';
import DogsImagesDisplay from './components/dogsImagesDisplay/dogsImagesDisplay';
import SearchInput from './components/searchInput/searchInput';
import FiltersDisplay from './components/filtersDisplay/filtersDisplay';
import { setLoading } from './redux/reducers/filtersReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    fetchData(baseURL+breedsURL).then((data)=>{
      const breedsData = data as apiResponse
      dispatch(initBreeds(breedsData.message))
      dispatch(setLoading(false))
    })
  }, [])
  return (
      <Space direction='vertical' className='main_container'>
          <SearchInput/>
          <FiltersDisplay/>
          <DogsImagesDisplay/>
      </Space>
  )
}

export default App
