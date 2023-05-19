<template>
    <button
        type="button"
        @click.prevent="animation = !animation"
        class="relative flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 fill-gray-600 outline-none transition duration-75 focus-visible:outline-indigo-600 active:opacity-75"
    >
        <svg
            ref="iconNode"
            :class="{
                '!scale-0 opacity-0': animation,
            }"
            class="block h-6 w-6 scale-100 transition duration-200"
        >
            <use xlink:href="~/assets/sprite.svg#shop-bag"></use>
        </svg>

        <svg
            :class="{
                'sparks-icon_animate': animation,
            }"
            ref="sparksIconNode"
            class="sparks-icon pointer-events-none absolute left-1/2 top-1/2 h-full w-full"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g class="sparks-icon__sparks sparks-icon__sparks_first">
                <path
                    id="Vector"
                    d="M34.206 42.9821C33.6833 43.1986 33.4351 43.7978 33.6516 44.3203C33.8681 44.8429 34.4671 45.0912 34.9898 44.8747C35.5124 44.6581 35.7605 44.0592 35.5442 43.5365C35.3276 43.0138 34.7284 42.7658 34.206 42.9821Z"
                    fill="#EB5757"
                />
                <path
                    id="Vector_2"
                    d="M21.0104 11.1254C20.4878 11.3418 20.2396 11.9409 20.4561 12.4635C20.6725 12.9861 21.2717 13.2343 21.7943 13.0178C22.3169 12.8014 22.565 12.2022 22.3485 11.6796C22.1321 11.157 21.5329 10.9089 21.0104 11.1254Z"
                    fill="#27AE60"
                />
                <path
                    id="Vector_3"
                    d="M13.0179 34.2057C12.8014 33.6833 12.2023 33.435 11.6797 33.6516C11.1571 33.8681 10.9089 34.4671 11.1254 34.9897C11.3419 35.5124 11.941 35.7604 12.4636 35.5441C12.9862 35.3276 13.2343 34.7284 13.0179 34.2057Z"
                    fill="#F2C94C"
                />
                <path
                    id="Vector_4"
                    d="M44.8747 21.0103C44.6584 20.4877 44.0592 20.2395 43.5365 20.456C43.0138 20.6725 42.7658 21.2716 42.9823 21.7942C43.1986 22.3168 43.7978 22.565 44.3205 22.3485C44.8429 22.132 45.0912 21.5329 44.8747 21.0103Z"
                    fill="#56CCF2"
                />
                <path
                    id="Vector_5"
                    d="M42.9823 34.2057C42.7658 34.7284 43.0138 35.3276 43.5365 35.5441C44.0592 35.7604 44.6584 35.5124 44.8747 34.9897C45.0912 34.4671 44.8429 33.8681 44.3205 33.6516C43.7978 33.435 43.1986 33.6833 42.9823 34.2057Z"
                    fill="#BB6BD9"
                />
                <path
                    id="Vector_6"
                    d="M11.1253 21.0103C10.9089 21.5329 11.1571 22.132 11.6797 22.3485C12.2023 22.5649 12.8014 22.3168 13.0178 21.7942C13.2343 21.2716 12.9861 20.6724 12.4635 20.456C11.9409 20.2395 11.3418 20.4877 11.1253 21.0103Z"
                    fill="#219653"
                />
                <path
                    id="Vector_7"
                    d="M21.7942 42.9821C21.2716 42.7658 20.6725 43.0138 20.456 43.5365C20.2396 44.0592 20.4877 44.6581 21.0103 44.8747C21.5329 45.0912 22.1321 44.8429 22.3485 44.3205C22.565 43.7978 22.3168 43.1986 21.7942 42.9821Z"
                    fill="#F2994A"
                />
                <path
                    id="Vector_8"
                    d="M34.9897 11.1253C34.4671 10.9088 33.8681 11.157 33.6516 11.6796C33.435 12.2022 33.6833 12.8013 34.2057 13.0178C34.7284 13.2343 35.3276 12.9861 35.5441 12.4635C35.7604 11.9409 35.5124 11.3418 34.9897 11.1253Z"
                    fill="#2F80ED"
                />
            </g>

            <g class="sparks-icon__sparks sparks-icon__sparks_second">
                <path
                    id="Vector_9"
                    d="M28 5.83333C28.7733 5.83333 29.4 5.20652 29.4 4.43333C29.4 3.66013 28.7733 3.03333 28 3.03333C27.2267 3.03333 26.6 3.66013 26.6 4.43333C26.6 5.20652 27.2267 5.83333 28 5.83333Z"
                    fill="#EB5757"
                />
                <path
                    id="Vector_10"
                    d="M28 52.9667C28.7733 52.9667 29.4 52.3399 29.4 51.5667C29.4 50.7934 28.7733 50.1667 28 50.1667C27.2267 50.1667 26.6 50.7934 26.6 51.5667C26.6 52.3399 27.2267 52.9667 28 52.9667Z"
                    fill="#27AE60"
                />
                <path
                    id="Vector_11"
                    d="M50.1667 28C50.1667 28.7733 50.7934 29.4 51.5667 29.4C52.3399 29.4 52.9667 28.7733 52.9667 28C52.9667 27.2267 52.3399 26.6 51.5667 26.6C50.7934 26.6 50.1667 27.2267 50.1667 28Z"
                    fill="#F2C94C"
                />
                <path
                    id="Vector_12"
                    d="M3.03334 28C3.03334 28.7733 3.66014 29.4 4.43334 29.4C5.20654 29.4 5.83334 28.7733 5.83334 28C5.83334 27.2267 5.20654 26.6 4.43334 26.6C3.66014 26.6 3.03334 27.2267 3.03334 28Z"
                    fill="#56CCF2"
                />
                <path
                    id="Vector_13"
                    d="M12.3258 12.3258C12.8725 11.7791 12.8725 10.8926 12.3258 10.3459C11.7791 9.79917 10.8926 9.79917 10.3459 10.3459C9.79917 10.8926 9.79917 11.7791 10.3459 12.3258C10.8926 12.8725 11.7791 12.8725 12.3258 12.3258Z"
                    fill="#BB6BD9"
                />
                <path
                    id="Vector_14"
                    d="M45.6542 45.6542C46.2009 45.1073 46.2009 44.2211 45.6542 43.6742C45.1073 43.1275 44.2209 43.1275 43.6742 43.6742C43.1275 44.2211 43.1275 45.1073 43.6742 45.6542C44.2209 46.2009 45.1073 46.2009 45.6542 45.6542Z"
                    fill="#219653"
                />
                <path
                    id="Vector_15"
                    d="M43.6742 12.3258C44.2209 12.8725 45.1073 12.8725 45.6542 12.3258C46.2009 11.7791 46.2009 10.8926 45.6542 10.3459C45.1073 9.79917 44.2209 9.79917 43.6742 10.3459C43.1275 10.8926 43.1275 11.7791 43.6742 12.3258Z"
                    fill="#F2994A"
                />
                <path
                    id="Vector_16"
                    d="M10.3459 45.6542C10.8927 46.2009 11.7791 46.2009 12.3258 45.6542C12.8726 45.1075 12.8726 44.2211 12.3258 43.6742C11.7791 43.1275 10.8927 43.1275 10.3459 43.6742C9.7992 44.2211 9.7992 45.1075 10.3459 45.6542Z"
                    fill="#2F80ED"
                />
            </g>

            <path
                class="sparks-icon__icon"
                d="M26.7849 32L23 28.1872L23.7266 27.4553L26.7849 30.5362L33.2734 24L34 24.7319L26.7849 32Z"
                fill="#E27395"
            />
        </svg>
    </button>
</template>

<script setup lang="ts">
    const iconNode = ref<Element>();
    const sparksIconNode = ref<Element>();
    const animation = ref<Boolean>(false);

    let animationTimer: number;

    watch(animation, () => {
        clearTimeout(animationTimer);

        if (animation.value) {
            animationTimer = setTimeout(() => {
                animation.value = false;
            }, 1500);
        }
    });
</script>

<style lang="scss" scoped>
    .sparks-icon {
        opacity: 0;
        transform: translate(-50%, -50%);

        &__sparks {
            transform-origin: center center;
            transform: scale(0.3);
            opacity: 0;
        }

        &_animate {
            animation: sparksanimation 1.5s cubic-bezier(0.64, 0.57, 0.67, 1.53);
        }

        &_animate &__sparks {
            animation: explode 2s cubic-bezier(0, 0.99, 0.25, 0.97), fade 2s;
        }

        &_animate &__sparks_second {
            animation-delay: 200ms;
        }
    }

    @keyframes sparksanimation {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }

        20%,
        90% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 1;
        }

        100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
    }

    @keyframes explode {
        0% {
            transform: scale(0.3);
        }

        50%,
        100% {
            transform: scale(1);
        }
    }

    @keyframes fade {
        1% {
            opacity: 1;
        }

        60%,
        100% {
            opacity: 0;
        }
    }
</style>
