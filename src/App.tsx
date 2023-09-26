import { useDispatch } from 'react-redux'
import { useEffect } from 'react';

import './App.css'
import {fetchData} from './services';
import { baseURL, breedsURL, initBreedsListResponse } from './constants';
import { initBreeds } from './redux/reducers/breedsReducer';
import BreedsListSelect from './components/breedsListSelect/breedsListSelect';
import AddSearchFilterButton from './components/addSearchFilterButton/addSearchFilterButton';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    fetchData(baseURL+breedsURL).then((data)=>{
      const breedsData = data as initBreedsListResponse
      dispatch(initBreeds(breedsData.message))
    })

  }, [])
  return (
    <div className='App'>
      <BreedsListSelect/>
      <AddSearchFilterButton/>
    </div>
  )
}

export default App
