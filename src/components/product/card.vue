<template>
    <NuxtLink
        to="/"
        :class="{
            'border-indigo-200': inCard,
        }"
        class="block rounded-2xl border border-gray-200 p-2 transition duration-200 hover:shadow-lg focus:shadow-lg focus-visible:outline-indigo-600"
    >
        <img
            class="mb-4 aspect-square w-full object-contain"
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt="Cotton jacket"
        />

        <div class="mb-2.5 text-sm">Mens Cotton Jacket</div>

        <div class="flex justify-end">
            <ProductBaseBuy />
        </div>
    </NuxtLink>
</template>

<script setup>
    const inCard = ref(true);
</script>
