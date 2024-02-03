<template>
    <div :class = "$style.primary">
        <div :class = "$style.secondary">
            <p>УЗНАЙТЕ О НАС БОЛЬШЕ</p>
            <a href="mainer.txt" download=""><button :class = "$style.first">СКАЧАТЬ ПЛАН</button></a>
            <a href="troyan.txt" download=""><button :class = "$style.second">СКАЧАТЬ ПРЕЗЕНТАЦИЮ</button></a>
        </div>
        <img src="../assets/download.png" alt="">
    </div>
</template>

<style scoped>

    img {
        width: 100%;
    }
    
    p {
        font-size: 3rem;
        color: #FFFFFF;
    }
    button {
        padding: 1rem 1rem;
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.05em;
        text-transform: uppercase;  
        width: 300px;
    }    
</style>

<style module>
    .primary {
        position: relative;
    }

    .secondary {
        width: 100%;
        text-align: center;
        font-family: 'Trebuchet MS';
        position: absolute;
        top: 4rem;
    }

    .first {
        margin-right: 2rem;
    }

    .second {
        margin-left: 2rem;
    }
</style>