import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import  configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import AddSearchFilterButton from './addSearchFilterButton.tsx'

const mockStore = configureStore([])

describe('<AddSearchFilterButton />', ()=>{
    const initialState = {
        filters:{
            isLoading: true,
        },
        breeds: {
            breedsList: {
                "australian": [
                    "shepherd"
                ],
                "basenji": [],
                "bulldog": [
                    "boston",
                    "english",
                    "french"
                  ],
            },
            selectedBreed: {
                breed: "australian",
                selectedBreed: 'shepherd',
                subBreed: ['shepherd']
            },
            error: null
        }
    }
    const store = mockStore(initialState)
    render(
        <Provider store={store}>
            <AddSearchFilterButton/>
        </Provider>
        )
    it('should render an add filter button',()=>{
        screen.getByLabelText(/add/i)
    })
})