// @ts-nocheck
import { randomUUID } from 'crypto'
import { logToMonitoringService } from '$lib/server/exceptions/monitoring'
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
        return await fetch('http://localhos:5173/src/lib/server/db/db.json')
    }
    return await fetch(request)
}
export async function handleError ( { error, event } )
{
    console.error( error.stack )
    const code = randomUUID()
    // sending error to service
    logToMonitoringService('unhandled_exception', {
        errorUrl: event.url,
        user: event.locals.user?.email,
        error: error.stack,
        code
    })
    return {
		message: 'everything is fine',
        name: 'JEREMYBEARIMY',
        code
	};
}
