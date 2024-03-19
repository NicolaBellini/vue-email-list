const{createApp}=Vue

createApp({
  data() {
    return {
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      title:'',
      emails:[],
      counter:0
    }
  },
  methods: {
    // in quetsa function l' api quando ritorna la risposta ne apllica il valore ad una costante
   getApi(){
    for(let i = 1; i<=10; i++){
      axios.get(this.apiUrl)
      .then((res)=>{
        const newMail = res.data.response;
        this.emails.push(newMail);
        console.log(newMail, this.emails);
      });
    };
    
   }

  },
  mounted() {
    console.log(axios);
    this.getApi()
  },

}).mount('#app')