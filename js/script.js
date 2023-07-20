Vue.createApp({
    data() {
        return {
            /**
             * @type {object[]}
             */
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],

            /**
             * @type {string}
             */
            slideClass: "thumb",

            /**
             * @type {number}
             */
            activeSlideIndex: 0,

            /**
             * @type {number}
             */
            autoplay: 0
        }
    },

    methods: {
        /**
         * When the previous slide button is clicked decrement by 1 the slide index
         */
        previousSlideClick(){
            //check if the previous element index is less than than zero
            if(this.activeSlideIndex <= 0) {
                //restarted the index to the last one possible
                this.activeSlideIndex = (this.slides.length - 1)
            }
            else {
                //else decrement it by one
                this.activeSlideIndex--;
            }
        },

        /**
         * When the previous slide button is clicked increment by 1 the slide index
         */
        nextSlideClick() {
            //check if the next element index is over the number of possible index
            if(this.activeSlideIndex >= (this.slides.length - 1)) {
                //restarted the index to the first one
                this.activeSlideIndex = 0
            }
            else {
                //else increment it by one
                this.activeSlideIndex++;
            }
        },

        /**
         * Function called when the slide is clicked and activate it in the slider
         * @param {number} index the index of the element clicked
         */
        slideClick(index) {
            //make the index of the active slide the same as the one clicked
            this.activeSlideIndex = index;
        },

        /**
         * Start the autoplay of the slider
         */
        startAutoplay() {
            //activate the timer and save it in a variable
            this.autoplay = setInterval(this.nextSlideClick, 3000);
        },

        /**
         * Block the autoplay of the slider
         */
        stopAutoplay() {
            //clear the timer previously started
            clearInterval(this.autoplay);
        }
    },

    mounted() {
        //start the autoplay of the slider
        this.startAutoplay();
    } 
}
).mount("#app");