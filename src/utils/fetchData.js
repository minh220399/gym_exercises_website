export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        //'X-RapidAPI-Key': '116812fc4bmshba3104e3c2982a8p1fae6ejsn8afe470b078d',

        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}
