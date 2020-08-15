<template>
    <div class="showcase">
        <div class="custom-container">
            <div class="row">
                <div class="col-lg-3 col-6">
                    <router-link to="/">
                        <div class="cat living-room">
                            <div class="img">
                                <img
                                    src="..\assets\images\cat_living_room.jpg"
                                    alt="living-room"
                                    class="img-fluid"
                                />
                            </div>
                            <div class="desc">
                                <span>4 products</span>
                                <div class="desc-name">
                                    <h2>Living Room</h2>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-3 col-6">
                    <router-link to="/">
                        <div class="cat bathroom">
                            <div class="img">
                                <img
                                    src="..\assets\images\cat_bathroom.jpg"
                                    alt="living-room"
                                    class="img-fluid"
                                />
                            </div>
                            <div class="desc">
                                <span>4 products</span>
                                <div class="desc-name">
                                    <h2>Bathroom</h2>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-3 col-6">
                    <router-link to="/">
                        <div class="cat accessories">
                            <div class="img">
                                <img
                                    src="..\assets\images\cat_accessories.jpg"
                                    alt="living-room"
                                    class="img-fluid"
                                />
                            </div>
                            <div class="desc">
                                <span>4 products</span>
                                <div class="desc-name">
                                    <h2>accessories</h2>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-3 col-6">
                    <router-link to="/">
                        <div class="cat kitchen">
                            <div class="img">
                                <img
                                    src="..\assets\images\cat_kitchen.jpg"
                                    alt="living-room"
                                    class="img-fluid"
                                />
                            </div>
                            <div class="desc">
                                <span>4 products</span>
                                <div class="desc-name">
                                    <h2>kitchen</h2>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.showcase {
    div[class^="col-"] {
        padding: 0;
    }
    .cat {
        position: relative;
        .img {
            overflow: hidden;
            img {
                transition: transform 2s cubic-bezier(0, 0, 0.44, 1.18);
            }
        }
        .desc {
            position: absolute;
            bottom: 30px;
            left: 20px;
            .desc-name {
                h2 {
                    position: relative;
                    &::after {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        content: "";
                        width: 0%;
                        height: 1px;
                        background: #000;
                        transition: 1s cubic-bezier(0.19, 1, 0.22, 1);
                    }
                }
            }
        }
        &:hover {
            img {
                transform: scale(1.1);
            }
            .desc-name h2::after {
                width: 100%;
            }
        }
    }
    @media #{$maxMobile} {
        .cat .desc {
            position: initial;
            margin-bottom: 20px;
            span {
                font-size: 17px;
                font-weight: 200;
            }
            .desc-name {
                h2 {
                    font-size: 25px;
                    &::after {
                        content: none;
                    }
                }
            }
        }
    }
}
</style>
