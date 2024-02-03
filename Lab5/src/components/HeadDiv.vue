<template>
    <div :style="position" :id = "$style.primary">
        <div>
            <img src = "src\assets\image2.svg" />
            <div :class = "$style.foreign">
                <p>
                    <span>КОРПОРАТИВЫ</span> <br> <br>
                    {{text.slice(0, 24)}} <br> {{text.slice(25, 52)}}
                </p>
            </div>
        </div>
        <div>
            <img src = "src\assets\image1.svg" />
            <div :class = "$style.foreign">
                <p>
                    <span>СВАДЬБЫ</span> <br> <br>
                    {{text.slice(0, 24)}} <br> {{text.slice(25, 52)}}
                </p>
            </div>
        </div>
        <div>
            <img src = "src\assets\image3.svg" />
            <div :class = "$style.foreign">
                <p>
                    <span>ЗВАНЫЕ ВЕЧЕРА</span> <br> <br>
                    {{text.slice(0, 24)}} <br> {{text.slice(25, 52)}}
                </p>
            </div>
        </div>
        <div v-for = "div in divs" >
            <img src = "src\assets\image2.svg" />
            <div :class = "$style.foreign">
                <p>
                    <span>КОРПОРАТИВЫ</span> <br> <br>
                    {{text.slice(0, 24)}} <br> {{text.slice(25, 52)}}
                </p>
            </div>
        </div>
    </div>
</template>

<style module>
    #primary {
        position: relative;
        transition: right 500ms linear;
        display: flex;
    }

    #primary > div {
        flex: 1 0 33.5%;
        position: relative;
    }

    .foreign {
        background-color: rgba(209, 169, 84, 0.9);
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        outline-offset: -1rem;
        outline: 0.1rem solid #FFFFFF;
        position: absolute;
        bottom: 0;
    }

    .foreign * {
        font-family: "Trebuchet MS"; 
        color: #FFFFFF;
        flex: 1 1 1fr;
        text-align: center;
    }

    .foreign span {
        font-size: 1.6rem;
    }
</style>

<style scoped>
    img {
        width: 100%;
    }
</style>

<script>
    export default {
        props: ['text', 'divs', 'pstn'],
        computed: {
            position: function() {
                return `right: ${this.pstn}%`;
            }
        },
    }
</script>