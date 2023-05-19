<template>
    <div class="flex justify-center overflow-hidden">
        <svg
            :class="{ icon_animated: playAnimation }"
            class="icon block w-full max-w-md"
            viewBox="0 0 239 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g class="icon__sparks icon__sparks_first">
                <path
                    id="Vector 12"
                    d="M2 174.24C13.3283 178.506 37.7503 181.566 44.8122 159.675M44.8122 159.675C45.8421 153.643 44.8123 141.711 32.4542 142.241C30.1002 148.052 29.2762 159.675 44.8122 159.675ZM44.8122 159.675C49.9615 160.631 61.9372 159.719 68.6458 148.42"
                    stroke="#6E89FA"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    id="Vector 11"
                    d="M195.555 50.1581C203.464 50.9271 220.007 48.3786 222.907 32.0331C225.807 15.6875 233.563 11.1617 237.078 10.942"
                    stroke="#F3603F"
                    stroke-width="3"
                    stroke-linecap="round"
                />
                <path
                    id="Vector 10"
                    d="M184.526 195.908C191.908 198.04 206.18 206.144 204.212 221.498"
                    stroke="#F7A707"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>

            <g class="icon__sparks icon__sparks_second">
                <circle
                    id="Ellipse 20"
                    cx="147.771"
                    cy="232.727"
                    r="7.57962"
                    fill="#637BFE"
                />
                <circle
                    id="Ellipse 23"
                    cx="219.425"
                    cy="112.7"
                    r="7.07962"
                    stroke="#C05EFD"
                />
                <circle
                    id="Ellipse 24"
                    cx="99.1062"
                    cy="8.30033"
                    r="8.30033"
                    fill="#28A73B"
                />
                <circle
                    id="Ellipse 25"
                    cx="122.673"
                    cy="22.3102"
                    r="4.38348"
                    fill="#F3603F"
                />
                <circle
                    id="Ellipse 26"
                    cx="26.0588"
                    cy="86.6853"
                    r="7.18199"
                    stroke="#F7A707"
                />
                <circle
                    id="Ellipse 21"
                    cx="43.7037"
                    cy="207.816"
                    r="7.94695"
                    stroke="#28A73B"
                />
                <circle
                    id="Ellipse 22"
                    cx="4.03543"
                    cy="4.03543"
                    r="4.03543"
                    transform="matrix(-1 0 0 1 128.239 220)"
                    fill="#28A73B"
                />
            </g>

            <g class="icon__icon">
                <circle
                    id="Ellipse 19"
                    cx="125.319"
                    cy="116.831"
                    r="79.0761"
                    fill="#666723"
                />
                <g
                    id="Ellipse 20_2"
                    filter="url(#filter0_d_14_6)"
                >
                    <circle
                        cx="125.319"
                        cy="116.831"
                        r="68.1416"
                        stroke="white"
                        stroke-opacity="0.7"
                        stroke-width="2"
                    />
                </g>
                <path
                    id="Vector"
                    d="M160.46 99.5319C160.46 101.685 159.615 103.764 158.079 105.249L122.362 139.848C120.749 141.333 118.598 142.224 116.371 142.224C114.143 142.224 111.993 141.333 110.456 139.848L92.5597 122.548C91.0235 121.063 90.1786 118.985 90.1786 116.831C90.1786 114.678 91.1003 112.674 92.6365 111.114C94.2495 109.629 96.3234 108.813 98.5509 108.739C100.778 108.739 102.852 109.555 104.465 111.04L116.371 122.548L146.173 93.7406C147.786 92.2557 149.86 91.439 152.087 91.439C154.315 91.5132 156.389 92.33 158.002 93.8891C159.538 95.3741 160.46 97.3787 160.46 99.5319Z"
                    fill="white"
                />
            </g>
        </svg>
    </div>

    <div class="text-center">
        <div class="mb-3 text-lg font-medium">Спасибо за заказ #2563</div>

        <div>Мы получили ваш заказ и свяжемся с вами в ближайшее время для уточнения деталей</div>
    </div>
</template>

<script setup lang="ts">
    const playAnimation = ref<Boolean>(false);

    onMounted(() => {
        setTimeout(() => {
            playAnimation.value = !playAnimation.value;
        }, 250);
    });
</script>

<style lang="scss">
    .icon {
        transform: scale(0);
        opacity: 0;

        &__sparks {
            transform-origin: center center;
            transform: scale(0.3);
            opacity: 0;
        }

        &__sparks_second {
            animation-delay: 150ms !important;
        }

        &_animated {
            animation: sparksanimation 2s cubic-bezier(0.25, 0.1, 0.32, 1.29);
            animation-fill-mode: both;
        }

        &_animated &__sparks {
            animation: explode 2s cubic-bezier(0, 0.99, 0.25, 0.97), fade 2s;
        }
    }

    @keyframes sparksanimation {
        0% {
            transform: scale(0);
            opacity: 0;
        }

        20%,
        100% {
            transform: scale(1);
            opacity: 1;
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
