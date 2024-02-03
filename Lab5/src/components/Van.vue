<template>
    <nav>
        <img v-show="visible" src = "\src\assets\logo.svg" />
        <span @mouseover="addborder" @mouseout="popborder" v-for = "span in spansInVan"> 
            {{span}} 
        </span>
        <img @mousedown="show" src = "\src\assets\menu.png" style="cursor: pointer"/>
    </nav> 
</template>

<style scoped>
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    span {
        font-family: "Trebuchet MS"; 
        color: #D1A954;
        flex: 1 1 1fr;
        text-align: center;
        cursor: pointer;
    }
</style>

<script>
    export default {
        props: ['spansInVan'],
        data () {
            return {
                visible: true
            }
        },
        emits: ['add'],
        methods: {
            show() {
                if (!this.visible) {
                    this.visible = true;
                    return;
                }
                this.visible = false;
                this.$emit('add');
            },
            addborder(event) {
                event.target.style = "border: 0.2rem solid #D1A954";
            },
            popborder(event) {
                event.target.style = "border: 0";
            }
        }
    }
</script>