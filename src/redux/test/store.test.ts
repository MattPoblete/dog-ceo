import {describe, it, expect} from 'vitest';
import { store } from '../store';
import { initBreeds, initialState } from '../reducers/breedsReducer'
describe('initBreedsStore', ()=> {
    const myStore = store.getState()
    it('should return the initial state of store', ()=>{
        expect(myStore.breeds).toBe(initialState)
    })

    it('should update data as payload has recived', async ()=>{
        await store.dispatch(initBreeds({dogBreed: []}))
        const actualStore = store.getState()
        expect(actualStore.breeds.breeds).toStrictEqual({dogBreed: []})
    })
})
