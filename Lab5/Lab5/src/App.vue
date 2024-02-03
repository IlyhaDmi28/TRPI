<script>
import Van from './components/Van.vue'
import HeadDiv from './components/HeadDiv.vue'
import Slider from './components/Slider.vue'
import FirstDiv from './components/FirstDiv.vue'
import SecondDiv from './components/SecondDiv.vue'
import ThreethDiv from './components/ThreethDiv.vue'
import Footer_info from './components/Footer_info.vue'
import Footer_pictures from './components/Fotter_pictures.vue'
import Footer_under from './components/Footer_under.vue'
import Register from './components/Register.vue'
import Downland from './components/Downland.vue'

export default {
  name:'app',
  components: {
    Van,
    HeadDiv,
    Slider,
    FirstDiv,
    SecondDiv,
    ThreethDiv,
    Footer_info,
    Footer_pictures,
    Footer_under,
    Register,
    Downland,
  },
    data() {
      return {
        spansInVan: ['ГЛАВНАЯ', 'SOFIT EVENT HOUSE', 'МЕРОПРИЯТИЯ', 'ТУРИСТАМ', 'КЕЙТЕРИНГ', 'ДЛЯ АГЕНТСТВ'],
        infoList: ["Санкт-Петербургское шоссе, д 130, к. 7", "+7 (812) 210 67 95", "hello@summerpalace.ru"],
        wdth: 100,
        pstn: 0,
        divs: 0,
        text: "Отметьте лучший праздник в лучшем дворце Петербурга!"
      }
    },
    methods: {
      toright() {
        if (this.pstn != 33.5 * this.divs) {
          this.pstn += 33.5;
          this.wdth *= 4/3;
        }
      },
      toleft() {
        if (this.pstn != 0) {
          this.pstn -= 33.5;
          this.wdth /= 4/3;
        }
      },
	    add() {
        this.divs += 1;
        this.wdth /= 4/3;
	    }
    }
}
</script>

<template>
  <header>
    <Van :spansInVan="spansInVan" @add="add"/>
    <br>
      <HeadDiv :text="text" :divs="divs" :pstn="pstn"/>
    <br>
    <Slider :wdth="wdth" @toright="toright" @toleft="toleft"/>
  </header>

  <main>
    <br> <br>
    <FirstDiv />
    <SecondDiv />
    <br> <br>
    <ThreethDiv />
    <br> <br> <br> <br>
    <Downland/>
    <Register v-bind:infoList="infoList"/>
  </main>
  <footer>
    <Footer_info/>
    <Footer_pictures/>
    <Footer_under/>
  </footer>
  
</template>

<style scoped>
header {
  overflow: hidden;
}

footer {
  background-color: rgb(247, 244, 240);
  
}
</style>
