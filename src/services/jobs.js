export const getJobs = async (limit = 10, offset = 0) => {
    const res = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({limit, offset})
        })
    const data = await res.json()
    return data?.['jdList']
}