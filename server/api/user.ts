export default defineEventHandler((event) => {
    console.log('[api] user >')
    console.log('cookie:', event.node.req.headers.cookie)
    return {
        "id": 1,
        "name": "Obi-Wan Kenobi",
        "authenticated": true
    }
})