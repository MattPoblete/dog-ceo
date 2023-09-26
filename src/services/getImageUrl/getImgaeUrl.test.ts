import { describe, it, expect } from "vitest";
import getImageUrl from "./getImgaeUrl";

describe('getImageUrl()', ()=>{
    it('should be a function', ()=>{
        expect(typeof(getImageUrl)).toBe('function')
    })
    it('should trhow if no params was recived',()=>{
        expect(()=>getImageUrl()).toThrow()
    })
    it('should return a string', ()=>{
        expect(getImageUrl('a','b')).toBeTypeOf('string')
    })
    it('should return a full requestable URL', ()=>{
        expect(getImageUrl('bulldog', 'french')).toBe('https://dog.ceo/api/breed/bulldog/french/images/random/1')
    })
    it('should return a requestable URL with no sub breed if this was an empty string', ()=>{
        expect(getImageUrl('bulldog', '')).toBe('https://dog.ceo/api/breed/bulldog/images/random/1')
    })
})