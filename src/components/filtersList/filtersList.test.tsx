import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import  configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import FiltersList from "./filtersList"

const mockStore = configureStore([])
describe('<FiltersList/>', ()=>{
    const initialState = {
        filters: {
            currentFilters: [
                {breed:'african',subBreed:''},
                {breed:'appenzeller',subBreed:''},
                {breed:'bulldog',subBreed:'french'}
            ]
        }
    }
    const store = mockStore(initialState)
    render(
        <Provider store={store}>
            <FiltersList/>
        </Provider>
        )
    it('should display every filter on the array', ()=> {
        screen.getByText('african/')
        screen.getByText('appenzeller/')
        screen.getByText('bulldog/french')
    })

    it('should display a delete button for each filter', ()=>{
        const deleteButtons = screen.getAllByText('delete')
        expect(deleteButtons.length).toBe(3)
    })
})