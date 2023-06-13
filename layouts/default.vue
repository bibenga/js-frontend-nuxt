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
                <li>
                    <NuxtLink to="/profile/1">Profile 1</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/profile/2">Profile 2</NuxtLink>
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