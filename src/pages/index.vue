<template>
    <div class="mb-32">
        <ul>
            <li>
                <NuxtLink to="/success">Страница успешной покупки</NuxtLink>
            </li>
        </ul>
    </div>

    <div class="relative lg:grid lg:grid-cols-10 lg:gap-8">
        <div class="lg:col-span-2">
            <div class="lg:sticky lg:left-0 lg:top-[101px]">
                <ShopSidebar />
            </div>
        </div>

        <div
            class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:col-span-8 lg:grid-cols-5"
        >
            <ProductCard v-for="n in 30" />
        </div>
    </div>
</template>

<script setup>
    // Testing FakeStoreApi

    import FakeStoreApi from '~/packages/fake-store/lib/src/fake-store-api';

    onMounted(async () => {
        const response = await new FakeStoreApi().getProducts();

        console.log(response);
    });
</script>
