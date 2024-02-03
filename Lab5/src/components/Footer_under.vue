<script>

</script>

<template>
    <div :class="$style.under_footer">
      <span :class = "$style.first">
        Copyright (с) 2019 Ресторан “Летний дворец”
      </span>
      <span :class = "$style.second">
        Facebook — 	Vkontakte — 	Instagram
      </span>
    </div>
</template>

<style module>
  .under_footer {
    text-align: center;
    font-size: 14px;
    font-family: 'Trebuchet MS';
    margin-top: 30px;
    height: 50px;
  }
  .first {
    padding-right: 12rem;
  }
  .second {
    padding-left: 12rem;
  }
</style>