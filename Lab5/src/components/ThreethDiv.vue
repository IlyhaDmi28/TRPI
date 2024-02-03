<template>
    <div :id = "$style.wrapper">
        <div :id = "$style.M"> 
            <span>ГАЛЕРЕЯ</span> <br>
            <img src = "src\assets\pic1.svg" /> <br>
            <span>летний дворец</span>
        </div>
            <img src = "src\assets\image5.svg" :id = "$style.A"/>
            <img src = "src\assets\image6.svg" :id = "$style.B"/>
            <img src = "src\assets\image8.svg" :id = "$style.C"/>
            <img src = "src\assets\image7.svg" :id = "$style.D" />
            <img src = "src\assets\image9.svg" :id = "$style.E" />
    </div>
</template>

<style module>
    #wrapper {
        margin: auto;
        display: grid; 
        grid-gap: 2% 1%;
        grid-template-areas: "m m a a a b"
                             "m m a a a b"
                             "c c c c d d"
                             "c c c c d d"
                             "c c c c e e"
                             "c c c c e e";
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    #M {
        grid-area: m;
        font-family: "Trebuchet MS"; 
    }

    #M span:first-child{
        font-size: 1.6rem;
    }

    #A {
        grid-area: a;
    }

    #B {
        grid-area: b;
    }

    #C {
        grid-area: c;
    }

    #D {
        grid-area: d;
    }

    #E {
        grid-area: e;
    }
</style>