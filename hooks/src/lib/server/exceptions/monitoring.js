// @ts-nocheck
import * as fsp from 'fs/promises'
export async function logToMonitoringService(type, data) {
    const log = JSON.stringify({
        type,
        data,
        timestamp: new Date().toISOString()
    })
    await fsp.appendFile('src/lib/server/exceptions/exceptions.txt', log, 'utf-8', (err) => {
        if (err) {
            console.error(err)
        }
        console.log('Log has been written')
    })
}