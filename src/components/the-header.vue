<template>
    <header class="sticky left-0 top-0 z-50 w-full bg-white/80 backdrop-blur">
        <div class="container">
            <div class="grid grid-cols-3 items-center py-3 shadow">
                <div></div>

                <div class="flex justify-center">
                    <NuxtLink
                        to="/"
                        class="block transition duration-75 focus-visible:outline-indigo-600 active:opacity-75"
                    >
                        <img
                            class="w-16"
                            src="~/assets/images/logo-icon.svg"
                            alt="Logo"
                        />
                    </NuxtLink>
                </div>

                <div class="flex justify-end">
                    <BaseButton />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup></script>
