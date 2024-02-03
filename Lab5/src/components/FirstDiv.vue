<template>
    <div :id = "$style.primary">
        <span>О РЕСТОРАНЕ</span>
        <img src = "src\assets\pic1.svg" />
        <span>летний дворец</span>
        <div :id = "$style.foreign">
            <video @ended="show" poster = "src/assets/image4.svg">
                <source src="\src\assets\gulyanka.mp4" type="video/mp4">
            </video>
            <img v-show="visible" @mouseup="hide" src = "src\assets\play.svg" />
        </div>
    </div>
</template>

<style module>
    #primary {
        font-family: "Trebuchet MS"; 
        background: linear-gradient(#FFFFFF, #F6F4F4);
        display: grid;
        place-items: center center; 
    }

    #primary span:first-child{
        font-size: 2rem; 
    }

    #foreign {
        position: relative; 
    }

    #foreign img:last-child{
        position: absolute; 
        bottom: 15rem;
        left: 28rem;
        cursor: pointer;
    }
</style>

<script>
    export default {
        data() {
            return {
                visible: true,
            }
        },
        methods: {
            hide(event) {
                this.visible = false;
                event.target.previousSibling.play();
            },
            show() {
                this.visible = true;
            }
        }
    }
</script>