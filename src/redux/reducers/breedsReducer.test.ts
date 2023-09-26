import {describe, it, expect} from 'vitest';
import { store } from '../store';
import { initBreeds, initialState, selectBreed } from './breedsReducer'
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
    it('should set the first selected with the first breed recived', async ()=>{
        await store.dispatch(initBreeds({dogBreed: []}))
        const actualStore = store.getState()
        expect(actualStore.breeds.selectedBreed.breed).toBe('dogBreed')
    })
})

describe('selectBreed', () => {
    it('should update "selectedBreed" value to event payload value', async ()=>{
        await store.dispatch(selectBreed({breed:'perrito', subBreed:[]}))
        const actualStore = store.getState().breeds
        expect(actualStore.selectedBreed).toStrictEqual({breed:'perrito', selectedSubBreed:'', subBreed:[]})
    })
 })
