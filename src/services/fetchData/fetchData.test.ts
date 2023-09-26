import {describe, expect, it, should} from 'vitest';
import { fetchData } from './fetchData';
import { baseURL, breedsURL } from '../../constants';


describe('fetchData', ()=>{
    it('should be a function', () => {
        expect(typeof(fetchData)).toBe('function')
    })

    it('should throw if url was not provided', async ()=> {
        const promise = fetchData() // eslint-disable-line
        expect(promise).rejects.toThrow() 
    })

    it('should connect to the api and return the response object', async () => {
        global.fetch = () => Promise.resolve({status: 200, json: ()=> Promise.resolve({status:'success', message:{}})}) // eslint-disable-line
        const promise = await fetchData(baseURL+breedsURL)
        expect(promise).toContain({status:'success'})
    })
})
