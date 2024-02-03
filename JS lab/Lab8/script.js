let val = document.querySelector("#form-2 .button");
val.onclick = function()
{
    let email = document.querySelectorAll("#form-2 .input")[0].value;
    let dog = 0;
    let dot = 0;

    for(let i = 0; i < email.length; i++){
        if(email[i] == "@") dog = i;
        if(email[i] == ".") dot = i;
    }

    if (dog >= dot || dog == 0 || dot == 0 || dot == dog + 1)
    {      
      alert("Е-майл указан некорректно");
      return false;
    }

    if (email == "")
    {      
      alert("Укажите ваш Е-майл");
      return false;
    }
    
    let name = document.querySelectorAll("#form-2 .input")[1].value;
    if (name == "")
    {
      alert("Укажите ваше имя");
      return false;
    }

    let famile = document.querySelectorAll("#form-2 .input")[2].value;
    if (famile == "")
    {
      alert("Укажите вашу фамилию");
      return false;
    }

    let birthday = document.querySelectorAll("#form-2 .input")[3].value;
    if (birthday == "")
    {
      alert("Укажите вашу дату рождения");
      return false;
    }

    let nowDate = new Date();

    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowDay = nowDate.getDate();
    console.log(birthday);

    let year = Number(birthday.slice(0, 4));
    let month = Number(birthday.slice(5, 7));
    let day = Number(birthday.slice(8, 10));
    // console.log(year);
    // console.log(month);
    // console.log(day);
    // console.log("-----");
    // console.log(nowYear);
    // console.log(nowMonth);
    // console.log(nowDay);
    if(year >= nowYear && month >= nowMonth && day >= nowDay ) {
      alert ("Некорректная дата рождения");
    }

    let password = document.querySelectorAll("#form-2 .input")[4].value;
    if (password.length < 4)
    {
      alert("Пароль слишком короткий!");
      return false;
    }

    if (password == "")
    {
      alert("Укажите ваш пароль");
      return false;
    }

    if (!ckbox.checked) { alert("Приймите условия регистрации"); }
}
val = document.querySelector("#form-1 .button");
val.onclick = function()
{
    let email = document.querySelectorAll("#form-1 .box-input .input")[0].value;
    let dog = 0;
    let dot = 0;

    for(let i = 0; i < email.length; i++){
        if(email[i] == "@") dog = i;
        if(email[i] == ".") dot = i;
    }

    if (dog >= dot || dog == 0 || dot == 0 || dot == dog + 1)
    {      
      alert("Е-майл указан некорректно");
      return false;
    }

    if (email == "")
    {      
      alert("Укажите ваш Е-майл");
      return false;
    }

    let password = document.querySelectorAll("#form-1 .box-input .input")[1].value;
    if (password.length < 4)
    {
      alert("Вы ввели слишком короткий пароль!");
      return false;
    }

    if (password == "")
    {
      alert("Вы не ввели пароль");
      return false;
    }
}