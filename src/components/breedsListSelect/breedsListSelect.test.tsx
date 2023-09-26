import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import  configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import BreedsListSelect from './breedsListSelect.tsx'

const mockStore = configureStore([])
describe('<BreedsListSelect/>', () => {
    const initialState = {
        breeds: {
            isLoading: false,
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
                subBreed: ['shepherd', 'boston']
            },
            error: null
        }
    }
    const store = mockStore(initialState)
    render(
        <Provider store={store}>
            <BreedsListSelect />
        </Provider>
    )

 /*    it('should render the title', ()=>{
        screen.getByText(/Breeds:/i)
    }) */

    it('should create a selector with the provided breeds', ()=>{
        screen.getByText('australian')
    })
   
    it('should render a new selector if the selected breed has one or more sub-breeds', ()=>{
        const selects = screen.getAllByLabelText('Search')
        expect(selects.length).toBe(2)

    })
})