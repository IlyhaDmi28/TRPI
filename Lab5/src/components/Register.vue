<script>
import Forma from './Forms.vue'
export default {
  props: ['infoList'], 
  components: {
    Forma
  }
  
}

</script>

<template>
    <div :class="$style.Center_Form">
        <div :class="$style.text_info">
        <h1>ХОТИТЕ ПРОВЕСТИ МЕРОПРИЯТИЕ?</h1>
        <div :class="$style.under_main_text">
            Или у вас остались вопросы, на которые мы сможем вам ответить 
            в процессе разговора - напишите нам. Мы открыты для диалога!
        </div>
        <div :class="$style.name_contact_info">   
            <span>
                ресторан
            </span>
            <span style="margin-left: 150px;">
                офис
            </span>
        </div>
        <div :class="$style.contact_info">
            <ul>
                <li v-for = "info in infoList"> {{ info }}</li>
            </ul>
            <ul style="margin-left: 70px;">
                <li v-for = "info in infoList"> {{ info }}</li>
            </ul>
        </div>
        
    </div>
    <Forma />
    </div>
    
</template>

<style module>

    .Center_Form {
        display: flex;
        justify-content: center;
        margin-top: 40px;
    }
    .text_info {
        width: 540px;
    }

    h1 { 
        width: 400px;
        font-family: 'Trebuchet MS';
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 145%;

        letter-spacing: 0.05em;
        text-transform: uppercase;
    }

    .under_main_text {
        margin-top: 30px;
        font-family: 'Trebuchet MS';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 135%;
        color: #616161;
    }

    .name_contact_info {
        font-family: 'Trebuchet MS';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 135%;

        letter-spacing: 0.05em;
        text-transform: uppercase;

        margin-top: 60px;
        color: #616161;
        
    }
    .name_contact_info span {
        color: #616161;
    }

    .contact_info {
        width: 170px;
        font-family: 'Trebuchet MS';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 135%;
        margin-top: 15px;
        display: flex;
        color: #616161;
        margin-left: -10px;
    }

    ul {
        float: right;
    }

    li {
        margin-top: 12px;
        list-style-type: none;
        padding-left: 10px;
    }

    li:hover {
        text-decoration: underline;
    }

    ul li:nth-child(1) {
        list-style-image: url(../assets/placeholder.svg);
    }

    ul li:nth-child(2) {
        list-style-image: url(../assets/smartphone.svg);
    }

    ul li:nth-child(3) {
        list-style-image: url(../assets/mail.svg);
    }
</style>