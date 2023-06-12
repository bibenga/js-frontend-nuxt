<template>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Root</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <slot />
    <div>Footer</div>
</template>

<style>
body {
    font-family: 'Ubuntu'
}
</style>