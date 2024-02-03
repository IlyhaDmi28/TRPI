<script>
    export default {
        name: "d",
        data() {
            return {
                names: '',
                email: '',
                
            
            }
        },
        methods: {
            onSubmit() {
                if(this.names.includes(' ') && this.names[this.names.length - 1] != ' ') alert("В имени не должно быть пробелов");
                if(this.names == "") alert("Вы не ввели имя");
                if(this.email == "") alert("Вы не ввели email")
                else {
                    let dog = 0;
                    let dot = 0;

                    for(let i = 0; i < this.email.length; i++){
                        if(this.email[i] == "@") dog = i;
                        if(this.email[i] == ".") dot = i;
                    }
                
                    if(dot == 0) alert("В email нет точки");
                    else if(dog >= dot) alert("@ в email должна быть перед точкой");
                }
            }
        }
    }
</script>

<template>
    <form id = "d" @submit.prevent="onSubmit" >
            <label for="names">Ваше имя:</label>
            <input v-model="names" type="text" id="name" name="name" style=" margin-bottom: 10px;">

            <label for="email">Ваш e-mail:</label>
            <input v-model="email" type="email" id="email" name="email" style="margin-bottom: 10px;">

           
            <textarea :class="$style.message" name="message" rows="5"  placeholder="Сообщение"></textarea>
            

        <button >Отправить</button>
    </form>
    
</template>

<style scoped>
    form {
        float: right;
        margin-left: 10px;
        font-family: 'Trebuchet MS';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 135%;
        color: #616161;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        
    }

    input {
        border: none;
        border-bottom: 0.5px solid #D0D0D0;
    }


  button {
    width: 182px;
    height: 45px;
    margin-top: 35px;
    background: #D1A954;
    color: white;
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 135%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
</style>

<style module>
.message {
    width: 600px;
    height: 200px;
    resize: none;
    padding: 10px;
    border: 0.5px solid #D0D0D0;
    margin-top: 30px;
  }
</style>