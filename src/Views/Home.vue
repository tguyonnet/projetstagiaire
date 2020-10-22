<template>
  <div class="container">
    <h1>PAGE D'ACCUEIL</h1>
    <h2>REPARTITIONS DOCUMENTS</h2>
    <vc-donut :sections="sections">{{nbDocuments}} documents</vc-donut>
    <p>{{labelClient}} </p>
    <p>{{labelDevis}} </p>
    <p>{{labelAutre}}</p>
  </div>
</template>

<script>
//const axios = require('axios');

  export default {
    name: 'Home',
    data() {
      
      return {
        labelAutre:"Gris = autres",
        labelClient:"Vert = Client",
        labelDevis:"Bleu = Devis",
        nbDocuments:0,
        documents:[],
        customers:[],
        devis:[],
        sections: []
      };
    },
    created(){
      let vm =this
      console.log(this.$db)
      this.$db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function(docs) {
       // console.log(docs)
        //console.log(docs.total_rows)
        //sur 100
        vm.nbDocuments = docs.total_rows
        let pourcentage = 100/docs.total_rows

        //nombre client
        vm.customers = docs.rows.filter(c =>{
          //console.log(c.id)
          let id = c.id       
          if( id.includes('client')){
            return true
          }else{
            return false
          }
        })

        //nombre devis
        vm.devis = docs.rows.filter(c =>{
          //console.log(c.id)
          let id = c.id       
          if( id.includes('devis')){
            return true
          }else{
            return false
          }
        })



      console.log(vm.customers.length)
        vm.sections.push ({ label: 'Client section' ,value: vm.customers.length * pourcentage, color: 'green' })
        vm.sections.push ({ label: 'Devis section' ,value: vm.devis.length * pourcentage, color: 'blue' })

        console.log(vm.sections)
    })
      
    },
    methods:{
      
    },
    components: {

    },
  }
</script>
