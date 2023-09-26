import {describe, it, expect} from 'vitest';
import { store } from '../store';
import { initBreeds, initialState, selectBreed } from '../reducers/breedsReducer'
const myStore = store.getState()
describe('initBreedsStore', ()=> {
    it('should return the initial state of store', ()=>{
        expect(myStore.breeds).toBe(initialState)
    })

    it('should update data as payload has recived', async ()=>{
        await store.dispatch(initBreeds({dogBreed: []}))
        const actualStore = store.getState()
        expect(actualStore.breeds.breedsList).toStrictEqual({dogBreed: []})
    })
})

describe('selectBreed', () => {
    it('should update "selectedBreed" value to event payload value', async ()=>{
        await store.dispatch(selectBreed({breed:'perrito', subBreed:[]}))
        const actualStore = store.getState().breeds
        console.log(actualStore.selectedBreed)
        expect(actualStore.selectedBreed).toStrictEqual({breed:'perrito', selectedSubBreed:'', subBreed:[]})
    })
 })
