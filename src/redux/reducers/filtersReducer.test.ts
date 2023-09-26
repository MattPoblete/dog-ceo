import { describe, it, expect } from "vitest";
import { store } from '../store';
import { addFilter, removeFilter, addImage } from "./filtersReducer";

describe('addFilter action', ()=>{
    it('should add an object to the array filters', async ()=>{
        await store.dispatch(addFilter({ breed: 'kiltro', subBreed:'lipigas', src:''}))
        const actualStore = store.getState().filters.currentFilters
        expect(actualStore).toStrictEqual([{ breed: 'kiltro', subBreed: 'lipigas', src:'' }])
    })

    it('should not add the same filter twice', async () => {
        await store.dispatch(addFilter({ breed: 'kiltro', subBreed:'lipigas', src:''}))
        await store.dispatch(addFilter({ breed: 'kiltro', subBreed:'lipigas', src:''}))
        await store.dispatch(addFilter({ breed: 'kiltro', subBreed:'lipigas', src:''}))
        const actualStore = store.getState().filters.currentFilters
        expect(actualStore).toStrictEqual([{ breed: 'kiltro', subBreed: 'lipigas', src:'' }])
    })
})

describe('removeFilter action', ()=>{
    it('should remove the selected filter', async ()=>{
        await store.dispatch(addFilter({ breed: 'bulldog', subBreed:'boston', src:''}))
        await store.dispatch(addFilter({ breed: 'basenji', subBreed:'', src:''}))
        const fullFiledFiltersState = store.getState().filters.currentFilters
        expect(fullFiledFiltersState).toStrictEqual([
            { breed: 'kiltro', subBreed:'lipigas', src:''},
            { breed: 'bulldog', subBreed:'boston', src:''},
            { breed: 'basenji', subBreed:'', src:''}
        ])
        await store.dispatch(removeFilter(2))
        const removeOneFilter = store.getState().filters.currentFilters
        expect(removeOneFilter).toStrictEqual([
            { breed: 'kiltro', subBreed:'lipigas', src:''},
            { breed: 'bulldog', subBreed:'boston', src:''},
        ])
    })
})

describe('addImage',()=>{
    it('should update src property to the current filter', async ()=>{
        await store.dispatch(addImage({src:'url', index:0}))
        expect(store.getState().filters.currentFilters[0]).toStrictEqual({ breed: 'kiltro', src: 'url', subBreed:'lipigas'})
    })
})