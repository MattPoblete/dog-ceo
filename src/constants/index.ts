export const baseURL = 'https://dog.ceo/api/'
export const breedsURL = 'breeds/list/all'

export interface apiResponse {
    status: string;
    message: {};
}

export interface filter {
    breed: string;
    src: string;
    subBreed: string;
}