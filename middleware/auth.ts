export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`auth: ${from?.fullPath} -> ${to?.fullPath}`)
    // isAuthenticated() is an example method verifying if a user is authenticated
    // if (isAuthenticated() === false) {
    //     return navigateTo('/login')
    // }
})