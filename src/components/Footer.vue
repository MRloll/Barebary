<template>
    <div class="footer">
        <div class="custom-container">
            <div class="row">
                <div class="col-lg-2 col-sm-4 col-12 pt-5">
                    <ul class="links">
                        <li><a href="#"> about us</a></li>
                        <li><a href="#">Read Our Blog</a></li>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">store locations</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-4 col-12 pt-5">
                    <ul class="links">
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">order tracking</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">shipping and returns</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-4 col-12 pt-5">
                    <ul class="links">
                        <li><a href="#">living</a></li>
                        <li><a href="#">Bathroom</a></li>
                        <li><a href="#">kitchen</a></li>
                        <li><a href="#">lighting</a></li>
                    </ul>
                </div>
                <div
                    class="col-lg-6 col-sm-12 subscribe pt-5 text-lg-right text-left"
                >
                    <h3 class="h2">newletter subscribe</h3>
                    <p>
                        Get instant updates about our new products and special
                        promos!
                    </p>
                    <form action="POST">
                        <input type="email" placeholder="Your Email Adress" />
                        <input type="button" value="SING UP" />
                    </form>
                </div>
            </div>
        </div>
        <div class="copy-rights-section my-5">
            <div class="custom-container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-3 col-sm-6 text-center text-sm-left">
                        <ul class="social">
                            <li>
                                <a href="https://twitter.com/WalidElloll">
                                    <i class="fab fa-twitter"></i><span></span
                                ></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/walidloll"
                                    ><i class="fab fa-facebook-f"></i>
                                    <span></span
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/walid.elloll/"
                                    ><i class="fab fa-pinterest"></i
                                    ><span></span
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/walid.elloll/"
                                    ><i class="fab fa-instagram"></i
                                    ><span></span
                                ></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-6 text-center text-sm-right">
                        <div class="copy-right">
                            &copy; 2018 Barberry. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.footer {
    ul.links {
        li {
            font-size: 19px;
            margin-bottom: 0.25rem;
            font-weight: lighter;
            a {
                color: #908d8d;
                transition: color 0.5s ease;
                &:hover {
                    color: #c7c1c1;
                }
            }
        }
    }
    .subscribe {
        h3 {
            font-weight: bold;
        }
        p {
            color: #908d8d;
            font-weight: normal;
        }
        form {
            input[type="email"] {
                padding: 11px 10px;
                font-size: 1rem;
                color: #858585;
                border-right-width: 0px;
                border-color: #000;
                font-weight: 300;
                outline: 0;
            }
            input[type="button"] {
                padding: 11px 10px;
                background-color: #000;
                outline: 0;
                border: 2px solid #000;
                color: white;
                transition: color 1s ease, background-color 1s ease;
                &:hover {
                    background-color: transparent;
                    color: #000;
                }
            }
        }
        @media (min-width: 577px) {
            input[type="email"] {
                max-width: 250px;
                width: 100%;
            }
        }
        @media #{$maxSmall} {
            h3 {
                font-size: 25px;
            }
        }
    }
    .copy-rights-section {
        ul.social {
            li {
                display: inline-block;
                margin-right: 19px;
                position: relative;
                width: 30px;
                height: 30px;
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    color: #000;
                    text-align: center;
                    i {
                        font-size: 30px;
                    }
                    span {
                        z-index: -1;
                        position: absolute;
                        top: 0;
                        right: 0;
                        left: 0;
                        bottom: 0;
                        transform: scale(0);
                        border-radius: 50%;
                        background-color: #000;
                        transition: transform 0.4s ease;
                    }
                    &:hover {
                        color: white;
                        span {
                            transform: scale(1.5);
                        }
                    }
                }
            }
        }
    }
}
</style>
