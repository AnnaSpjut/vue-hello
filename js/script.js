const{createApp} = Vue;

createApp({
  data(){
    return{
      messaggio: 'Oggi ci è stato consegnato un esercizio facile!',
      image: "assets/img/pexels-antoni-shkraba-6827117.jpg"
    }
  }
}).mount('#app')

