export const load = async ({fetch}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json()
    if (Array.isArray(data)) {
        return data[0]
    }
    return data
}