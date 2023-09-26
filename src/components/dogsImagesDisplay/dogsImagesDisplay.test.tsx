import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import  configureStore from 'redux-mock-store'

import { fetchData } from "../../services";
import DogsImagesDisplay from "./dogsImagesDisplay";


const mockStore = configureStore([])
describe('<DogsImagesDisplay/>', ()=> {
    let initialState = {
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
            <DogsImagesDisplay/>
        </Provider>
        )
    it('should render an image for each element on the filters array', async ()=>{
        const imgContainers = await screen.findAllByAltText('dog-image')
        const currentFilters = store.getState().filters.currentFilters
        expect(imgContainers.length).toBe(currentFilters.length)
    })

    it('should add a custom url to the image', async ()=>{
        const imgContainers = await screen.findAllByAltText('dog-image')

    })
})