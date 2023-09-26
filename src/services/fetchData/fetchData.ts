
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

