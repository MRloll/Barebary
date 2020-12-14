<template>
    <div class="product-reviews">
        <div class="row">
            <div class="col-lg-7 col-12">
                <div class="reviews">
                    <div>
                        <h2 class="font-weight-bold">Reviews</h2>
                        <div class="d-flex align-items-center total">
                            <star-rating
                                :read-only="true"
                                :rating="5"
                                :star-size="20"
                                :increment="0.1"
                                :fixed-points="2"
                                :show-rating="false"
                                style="margin-bottom: 10px"
                                class="mr-2"
                            ></star-rating>
                            <span class="h4 mb-0"> Based on reviews</span>
                        </div>
                        <div class="reviews-wrapper mt-4">
                            <div
                                class="one-review mb-4"
                                v-for="(review, index) in reviews"
                                :key="index"
                            >
                                <h3
                                    class="d-flex align-items-center justify-content-between font-weight-bold"
                                >
                                    {{ review.title }}
                                    <star-rating
                                        :read-only="true"
                                        :rating="review.stars"
                                        :star-size="15"
                                        :increment="0.1"
                                        :fixed-points="2"
                                        :show-rating="false"
                                        style="margin-bottom: 10px"
                                        class="ml-2"
                                    ></star-rating>
                                </h3>
                                <p>
                                    {{ review.name }}
                                    <span>on {{ review.date }}</span>
                                </p>
                                <p>{{ review.text }}</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-12">
                <div class="add-review">
                    <h2 class="font-weight-bold">Add a review</h2>
                    <form method="post">
                        <label for="review-author"> name </label>
                        <input
                            type="text"
                            id="review-author"
                            placeholder="Enter Your Name"
                            v-model="name"
                            @blur="$v.name.$touch()"
                            autocomplete="off"
                        />
                        <transition name="fade">
                            <template v-if="$v.name.$dirty">
                                <p
                                    v-if="!$v.name.required"
                                    class="alert alert-danger mt-3"
                                >
                                    Name is Required
                                </p>
                            </template>
                        </transition>

                        <label for="review-email"> Email </label>
                        <input
                            type="email"
                            id="review-email"
                            placeholder="Enter Your Email"
                            v-model="email"
                            @blur="$v.email.$touch()"
                            autocomplete="off"
                        />
                        <transition name="fade">
                            <template v-if="$v.email.$dirty">
                                <p
                                    v-if="!$v.email.required"
                                    class="alert alert-danger mt-3"
                                >
                                    Email is Required
                                </p>
                                <p
                                    v-if="!$v.email.email"
                                    class="alert alert-danger mt-3"
                                >
                                    Email is not valid
                                </p>
                            </template>
                        </transition>

                        <label>Rating </label>
                        <star-rating
                            :star-size="35"
                            :increment="0.1"
                            :fixed-points="2"
                            :show-rating="false"
                            v-model="ratingSelected"
                            @rating-selected="setRating"
                        ></star-rating>

                        <label for="review-title"> Title </label>
                        <input
                            type="text"
                            id="review-title"
                            placeholder="Give your Review a Title"
                            v-model="title"
                            @blur="$v.title.$touch()"
                            autocomplete="off"
                        />
                        <transition name="fade">
                            <template v-if="$v.title.$dirty">
                                <p
                                    v-if="!$v.title.required"
                                    class="alert alert-danger mt-3"
                                >
                                    Title is Required
                                </p>
                            </template>
                        </transition>

                        <label for="review-body">
                            Body of Review ({{ remainingChars }})
                        </label>
                        <textarea
                            :maxlength="maxLength"
                            id="review-body"
                            placeholder="Write your Comments here"
                            v-model="text"
                            @input="calcTextLength"
                            @blur="$v.text.$touch()"
                            autocomplete="off"
                        />
                        <transition name="fade">
                            <template v-if="$v.text.$dirty">
                                <p
                                    v-if="!$v.text.required"
                                    class="alert alert-danger mt-3"
                                >
                                    Comment is Required
                                </p>
                                <p
                                    v-if="!$v.text.minLength"
                                    class="alert alert-danger mt-3"
                                >
                                    Comment must be more than 40 letters
                                </p>
                            </template>
                        </transition>

                        <input
                            @click="addReview()"
                            type="button"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StarRating from "vue-star-rating";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
    name: "prdouct-reviews",
    props: ["product"],
    data() {
        return {
            reviews: [
                {
                    title: "I like everything About this",
                    name: "Jackson Mal",
                    text:
                        " Thestructural integrity of this wooden elephant is incredible! It can safely sustain the succulent weight of my grandma",
                    date: new Date(2019, 10, 14).toDateString(),
                    stars: 3
                },
                {
                    title: "5 Stars!",
                    name: "YAn",
                    text: "Some Awesome Review Text",
                    date: new Date(2020, 7, 7).toDateString(),
                    stars: 5
                },
                {
                    title: "That's a really great thing.",
                    name: "Jhon Whick",
                    text: "I like everything About this",
                    date: new Date(2019, 1, 4).toDateString(),
                    stars: 4.5
                },
                {
                    title: "Amazing product",
                    name: "Simona Jack",
                    text: "This is the exam form.",
                    date: new Date(2018, 11, 24).toDateString(),
                    stars: 4
                }
            ],
            maxLength: 1500,
            remainingChars: 1500,
            title: "",
            name: "",
            email: "",
            text: "",
            ratingSelected: 0
        };
    },
    methods: {
        calcTextLength() {
            this.remainingChars = this.maxLength - this.text.length;
        },
        setRating(rating) {
            this.ratingSelected = rating;
        },
        addReview() {
            if (!this.title || !this.name || !this.email || !this.text) {
                this.$v.$touch();
            } else {
                this.reviews.push({
                    title: this.title,
                    name: this.name,
                    text: this.text,
                    date: new Date().toDateString(),
                    stars: this.ratingSelected
                });
                this.title = "";
                this.name = "";
                this.email = "";
                this.text = "";
                this.ratingSelected = 0;
                this.remainingChars = this.maxLength;
                this.$v.$reset();
            }
        }
    },
    components: {
        StarRating
    },
    validations: {
        name: {
            required
        },
        email: {
            required,
            email
        },
        title: {
            required
        },
        text: {
            required,
            minLength: minLength(40)
        }
    }
};
</script>

<style lang="scss" scoped>
.product-reviews {
    max-width: 1400px;
    margin: auto;
    .reviews {
        padding-right: 50px;
        .total {
            span {
                color: #878787;
            }
        }
        .reviews-wrapper {
            .one-review {
                h3 {
                    font-size: 20px;
                }
                p {
                    color: #878787;
                }
            }
        }
    }
    .add-review {
        form {
            display: flex;
            flex-wrap: wrap;
            & > * {
                flex-basis: 100%;
            }
            label {
                margin-top: 30px;
                font-weight: bold;
            }
            input,
            textarea {
                height: 3rem;
                padding: 0 1rem;
                font-size: 1rem;
                font-weight: inherit;
                outline: none;
                width: 100%;
                max-width: 100%;
                border-radius: 0;
                box-shadow: none;
                background-color: transparent;
                border: 2px solid #e7e7e7;
                color: #3a3a3a;
                @extend %transition;
                transition-property: border;
                &:focus {
                    border-color: #000;
                }
            }
            textarea {
                height: 10rem;
                @extend %transition;
                transition-property: border;
                &:focus {
                    border-color: #000;
                }
            }
            input[type="button"] {
                margin-top: 30px;
                padding: 11px 10px;
                background-color: #000;
                outline: 0;
                border: 2px solid #000;
                color: white;
                @extend %transition;
                &:hover {
                    background-color: transparent;
                    color: #000;
                }
            }
        }
    }
    @media #{$maxMobile} {
        .reviews {
            .total {
                span {
                    font-size: 20px;
                }
            }
            .reviews-wrapper {
                .one-review {
                    p {
                        color: #878787;
                    }
                }
            }
        }
    }
}
</style>
