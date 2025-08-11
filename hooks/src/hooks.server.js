export async function handle ( { event, resolve } )
{
    return await resolve( event, {
        transformPageChunk: ({ html }) => {
            return html.replace(
                '<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>',
                '<h2>Hello from Hook</h2>'
            )
        }
    })
}
export async function handleFetch({request, fetch})
{
     if(request.url.startsWith('https://jsonplaceholder.typicode.com/posts/1'))
    {
        console.log('handleFetch has been called')
        return await fetch('http://localhost:5173/src/lib/server/db/db.json')
    }
    return await fetch(request)
}