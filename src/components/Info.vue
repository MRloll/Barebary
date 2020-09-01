<template>
    <div class="info pt-5">
        <div class="text-banner mx-auto text-center">
            <div class="text">
                <h3 class="h1 bold">
                    It's all New, <br />
                    It all arrived this week
                </h3>
                <p class="lead">
                    Furniture axe heirloom ethical man bun sustainable. <br />
                    Pickled normcore selvage, bespoke four dollar toast neutra
                    chartreuse vinyl.
                </p>
            </div>
            <router-link to="/" class="base-button"
                ><span>view all new products</span></router-link
            >
        </div>
        <div class="images-banner d-flex mt-5">
            <div class="img-wrapper">
                <div class="img-1"></div>
                <div class="text">
                    <h4 class="h2">
                        visit us
                    </h4>
                    <p class="lead">
                        head office <br />
                        16 Boulevard Saint-Germain <br />
                        75005 Paris
                    </p>
                    <a
                        href="https://www.instagram.com/walid.elloll/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >contact us</a
                    >
                </div>
            </div>
            <div class="img-wrapper">
                <div class="img-2"></div>
                <div class="text">
                    <h4 class="h2">
                        Follow our store <br />
                        on instagram
                    </h4>
                    <a
                        href="https://www.instagram.com/walid.elloll/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >@walid.elloll</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
    background-color: white;
    .text-banner {
        h3 {
            font-weight: bold;
        }
        p {
            color: #848181;
            line-height: 1.6;
        }
        .base-button {
            position: relative;
            z-index: 3;
            @include baseButton(
                black,
                white,
                $afterTransition: transform 0.5s
                    cubic-bezier(0.59, 0.03, 0.2, 1)
            );
            padding: 15px 35px;
            border: 2px solid black;
        }
    }
    .images-banner {
        flex-wrap: wrap;
        .img-wrapper {
            height: 450px;
            position: relative;
            overflow: hidden;
            // height: 100%;
            width: 50%;
            div[class^="img-"] {
                height: 100%;
                width: 100%;
                background-size: cover;
                background-position: center center;
                transition: transform 2s ease;
            }
            .img-1 {
                background: url("../assets/images/home-bg-01.jpg");
            }
            .img-2 {
                background: url("../assets/images/home-bg-02.jpg");
            }
            .text {
                position: absolute;
                top: 70px;
                left: 70px;
                p {
                    color: #848181;
                }
                a {
                    position: relative;
                    text-transform: uppercase;
                    &::after {
                        content: "";
                        position: absolute;
                        bottom: -4px;
                        left: 0;
                        width: 100%;
                        height: 3px;
                        transition: opacity 0.6s ease;
                        background: black;
                    }
                    &:hover {
                        &::after {
                            opacity: 0;
                        }
                    }
                }
            }
            &:hover {
                div[class^="img-"] {
                    transform: scale(1.1);
                }
            }
        }
    }
    @media #{$maxMedium} {
        .text-banner {
            max-width: 70%;
            p {
                font-size: 17px;
                letter-spacing: 0;
            }
        }
        .images-banner {
            .img-wrapper {
                width: 100%;
            }
        }
    }
    @media #{$maxMobile} {
        .text-banner {
            max-width: 80%;
            h3 {
                font-size: 30px;
            }
            p {
                font-size: 15px;
            }
        }
    }
}
</style>
