async function getAllFood () {
    const api = await fetch(process.env.REACT_APP_LIFOODIE_BACKEND_API, {mode: 'no-cors', method: 'get'})
    const data = await api.json()

    return(data[1])
}