export default defineEventHandler((event) => {
    console.log('[server] request: ' + getRequestURL(event))
})