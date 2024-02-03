<template>
    <div :id = "$style.wrapper">
        <div @mousedown="svipeleft"> &lt </div> 
        <div :id = "$style.first">
            <div :style="width" :id = "$style.second"> </div>
        </div>
        <div @mouseup="sviperight"> &gt </div> 
    </div>
</template>

<style module>
    #wrapper {
        text-align: center;
    }

    #wrapper *:not(#first, #second) {
        cursor: pointer;
        display: inline-block;
        transform: scale(2);
    }

    #first {
        display: inline-block;
        position: relative;
        width: 20%;
        margin: 0 2%;
        border: 0.2rem solid #E5E5E5;
        border-radius: 1rem;
    }

    #second {
        position: absolute;
        width: 100%;
        border: 0.2rem solid #000000;
        border-radius: 1rem;
        transition: width 500ms linear; 
    }
</style>

<script>
    export default {
        props: ['wdth'],
        emits: ['toleft', 'toright'],
        computed: {
            width: function() {
                return `width: ${this.wdth}%`;
            }
        },
        methods: {
            sviperight() {
                this.$emit('toright');
            },
            svipeleft() {
                this.$emit('toleft');
            }
        }
    }
</script>