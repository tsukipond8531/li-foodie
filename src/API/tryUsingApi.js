
async function db () {
    const api = await fetch(process.env.REACT_APP_LIFOODIE_BACKEND_API)
    const data = await api.json()
   
    return(data.data)
}

export {db}