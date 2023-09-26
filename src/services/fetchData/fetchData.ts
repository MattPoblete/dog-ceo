/* export async function fetchData(url: string) {
    if(!url){
        throw new Error()
    }
    let response
    await fetch(url).then(res=> res.json()).then(res=> response = res)
    return response
} */

export const fetchData = async (url: string) => {
    if(!url) {
        throw new Error('no url was provided')
    }
    let response = {}
    await fetch(url)
    .then((response)=> response.json())
    .then((data)=>{ 
        response = data 
    })
    return response
}

