<template>
    <div class="slider-wrapper">
        <flickity ref="flickity" :options="flickityOptions">
            <div class="carousel-cell">
                <div class="carousell-text  d-flex  align-items-center">
                    <div class="text">
                        <h5 class="text-uppercase">new arrivals</h5>
                        <p>
                            new portable <br />
                            bluetooth speaker
                        </p>
                        <a href="#" class="text-uppercase"> shop now</a>
                    </div>
                </div>
                <div class="carousell-bg"></div>
            </div>
            <div class="carousel-cell">
                <div
                    class="carousell-text  d-flex justify-content-center align-items-center"
                >
                    <div class="text text-center">
                        <h5 class="text-uppercase">november sales</h5>
                        <p>
                            clearance sales <br />
                            up to 30% off
                        </p>
                        <a href="#" class="text-uppercase"> shop now</a>
                    </div>
                </div>
                <div class="carousell-bg"></div>
            </div>
            <div class="carousel-cell">
                <div class="carousell-text d-flex align-items-center">
                    <div class="text">
                        <h5 class="text-uppercase">living room</h5>
                        <p>
                            new autumn <br />
                            furniture collection
                        </p>
                        <a href="#" class="text-uppercase"> shop now</a>
                    </div>
                </div>
                <div class="carousell-bg"></div>
            </div>
        </flickity>
    </div>
</template>

<script>
import Flickity from "vue-flickity";
export default {
    components: {
        Flickity
    },
    data() {
        return {
            flickityOptions: {
                initialIndex: 3,
                wrapAround: true,
                imagesLoaded: true,
                percentPosition: false
            }
        };
    }
};
</script>

<style lang="scss">
.slider-wrapper {
    //   @@@@@@@@@@@@@@@@@@@@
    //  carousell cell
    //  @@@@@@@@@@@@@@@@@@@@
    .carousel-cell {
        width: 100%;
        height: 700px;
        overflow: hidden;

        //   @@@@@@@@@@@@@@@@@@@@
        //  carousell text
        //  @@@@@@@@@@@@@@@@@@@@
        .carousell-text {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            padding-right: 100px;
            padding-left: 100px;
            z-index: 1;
            .text {
                transform: skew(8deg);
                h5 {
                    font-size: 12px;
                    color: #e34343;
                    line-height: 1.1;
                    letter-spacing: 3px;
                    margin-bottom: 25px;
                    font-weight: 600;
                }
                p {
                    font-size: 45px;
                    line-height: 1.2;
                    font-weight: 600;
                    color: #000;
                }
                a {
                    border-bottom: 2px solid;
                    padding-bottom: 4px;
                }
            }
        }

        //   @@@@@@@@@@@@@@@@@@@@
        //  carousell background
        //  @@@@@@@@@@@@@@@@@@@@
        .carousell-bg {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-position: center top !important;
            background-size: cover !important;
            transition: 1s all ease;
            transform: scale(1.3);
        }

        //   @@@@@@@@@@@@@@@@@@@@
        //  active cell
        //  @@@@@@@@@@@@@@@@@@@@
        &.is-selected {
            .carousell-text {
                .text {
                    transform: skew(0);
                    transition: transform 1.6s ease;
                    transition-delay: 0.2s;
                }
            }
            .carousell-bg {
                transform: scale(1);
            }
        }
        //  @@@@@@@@@@@@@@@@@@@@
        //  carousel images back-g
        //  @@@@@@@@@@@@@@@@@@@@
        &:first-of-type > .carousell-bg {
            background: url("../assets/images/slide-1.jpg");
        }
        &:nth-of-type(2) > .carousell-bg {
            background: url("../assets/images/slide-2.jpg");
        }
        &:last-of-type > .carousell-bg {
            background: url("../assets/images/slide-3.jpg");
        }
    }
    //  @@@@@@@@@@@@@@@@@@@@
    //  hovering on carousell cell
    //  @@@@@@@@@@@@@@@@@@@@
    &:hover .flickity-button {
        opacity: 1;
        &.previous {
            left: 20px;
        }
        &.next {
            right: 20px;
        }
    }

    //  @@@@@@@@@@@@@@@@@@@@
    //  navigation buttons
    //  @@@@@@@@@@@@@@@@@@@@
    .flickity-button {
        transition: 0.5s all ease;
        opacity: 0;
        background: transparent;
        &.previous {
            left: 50px;
        }
        &.next {
            right: 50px;
        }
        svg {
            width: 40px;
            height: 40px;

            path {
                d: path("M 10,50 L 60,100 L 60,95 L 15,50  L 60,5 L 60,0 Z");
            }
        }
    }

    //  @@@@@@@@@@@@@@@@@@@@
    //  paginators
    //  @@@@@@@@@@@@@@@@@@@@
    .flickity-page-dots {
        display: none;
        bottom: 20px;
        li {
            margin: 0 8px;
            transform: scale(0.7);
            transition: all 1s ease;
            &.is-selected {
                transform: scale(1);
            }
        }
    }

    //  @@@@@@@@@@@@@@@@@@@@
    //  media query
    //  @@@@@@@@@@@@@@@@@@@@
    @media #{$maxMedium} {
        .carousel-cell {
            height: 550px;
            .carousell-text {
                .text {
                    p {
                        font-size: 30px;
                    }
                }
            }
        }
    }
    @media #{$maxMobile} {
        .flickity-page-dots {
            display: block;
        }
        .flickity-button {
            display: none;
        }
        .carousel-cell {
            height: 300px;
            .carousell-text {
                padding-left: 40px;
                padding-right: 40px;

                .text {
                    p {
                        font-size: 26px;
                    }
                }
            }
        }
    }
}
</style>
