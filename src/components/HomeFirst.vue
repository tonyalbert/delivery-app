<script>
import Promocao from "@/assets/img/30.png";
import Food1 from "@/assets/img/foods/food1.png";
import Hamburguer from "@/assets/img/foods/hamburguer.jpg";
import Pizza from "@/assets/img/foods/pizza.jpg";
import HotDog from "@/assets/img/foods/hotdog.jpg";
import Sushi from "@/assets/img/foods/sushi.jpg";
import Salada from "@/assets/img/foods/salada.webp";
import FrangoFrito from "@/assets/img/foods/frangofrito.jpg";
import Macarrao from "@/assets/img/foods/macarrao.jpg";
import ArrozFeijao from "@/assets/img/foods/arrozfeijao.jpg";


export default {
  data() {
    return {
      promocao: Promocao,
      items: [
        { id: 1, img: Food1, nome: "Sopa de panera", valor: "R$ 25" },
        { id: 2, img: Hamburguer, nome: "Hamburguer", valor: "R$ 15" },
        { id: 3, img: Pizza, nome: "Pizza", valor: "R$ 30" },
        { id: 4, img: HotDog, nome: "Hot Dog", valor: "R$ 10" },
        { id: 5, img: Sushi, nome: "Sushi", valor: "R$ 50" },
        { id: 6, img: Salada, nome: "Salada", valor: "R$ 20" },
        { id: 7, img: FrangoFrito, nome: "Frango frito", valor: "R$ 25" },
        { id: 8, img: Macarrao, nome: "Macarrão", valor: "R$ 15" },
        { id: 9, img: ArrozFeijao, nome: "Arroz com feijão", valor: "R$ 10" },
      ],
      searchTerm: "",
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return item.nome
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
  },
};
</script>

<template>
    <div class="min-h-screen">
      <div id="home" class="px-9 py-4">
        <input
          v-model="searchTerm"
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-sm py-2 pl-9 pr-3 drop-shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="O que deseja comer hoje?"
          type="text"
          name="search"
        />
  
        <img :src="promocao" class="mt-4" />
  
        <h1 class="text-center text-2xl mt-4 font-medium">Perto de você</h1>

        <div class="">
          <div v-for="item in filteredItems" :key="item.id" class="p-7">
            <a href="">
              <img :src="item.img" class="w-56 h-32 rounded-xl"/>
              <div class="mt-2">
                <h2 class="float-right hover:underline underline-offset-1">{{ item.valor }}</h2>
                <h2 class="flex">{{ item.nome }}</h2>
              </div>
              <p class="text-sm">Fast-Food</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>