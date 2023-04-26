<script>
import { RouterLink } from 'vue-router'
import Lista from "../assets/img/Lista.svg";
import Coracao from "../assets/img/Coracao.svg";
import Casa from "../assets/img/Casa.svg";
import Sino from "../assets/img/Sino.svg";
import Livro from "../assets/img/Livro.svg";


export default {
  data() {
    return {
      Lista: Lista,
      Coracao: Coracao,
      Casa: Casa,
      Sino: Sino,
      Livro: Livro
    };
  },
};
</script>

<template>
  <div id="aside" class="h-screen flex items-center">
    <ul class="ml-12 space-y-4">
      <RouterLink to="/favoritos"><li class="h-20"><img :src="Lista"></li></RouterLink>
      <RouterLink to="/"><li class="h-20 bg-"><img :src="Coracao"></li></RouterLink>
      <RouterLink to="/favoritos"><li class="h-20"><img :src="Casa"></li></RouterLink>
      <RouterLink to="/"><li class="h-20"><img :src="Sino"></li></RouterLink>
      <RouterLink to="/favoritos"><li class="h-20"><img :src="Livro"></li></RouterLink>
    </ul>
  </div>
</template>



<style>
#aside {
  background-color: #7a0000;
}

#aside li {
  color: blueviolet;
}

</style>
