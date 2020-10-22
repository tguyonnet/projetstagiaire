<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="col-m-4">
        <h2>Répartition des documents</h2>
        <vc-donut 
          :sections="sections"
          :total="100"
          has-legend legend-placement="bottom"
        >
          <h1 style="margin: 0;">{{ nbDocuments }}</h1> documents
        </vc-donut>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        nbDocuments: 0,
        documents: [],
        customers: [],
        quotes: [],
        sections: []
      };
    },
    created(){
      let vm = this
      //on va chercher les documents en bdd locale
      this.$db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function(docs) {
        //sur 100
        vm.nbDocuments = docs.total_rows
        let pourcentage = 100 / docs.total_rows

        //nombre client
        vm.customers = docs.rows.filter(cust =>{
          if( cust.id.includes('client')){
            return true
          }
          return false
        })

        //nombre Devis
        vm.quotes = docs.rows.filter(q =>{
          if(q.id.includes('devis')){
            return true
          }
          return false
        })

        vm.sections.push ({label: 'Clients', value: vm.customers.length * pourcentage, color: 'green'})
        vm.sections.push ({label: 'Devis', value: vm.quotes.length * pourcentage, color: 'blue'})

        // console.log(vm.sections)
      })     
    },
  }
</script>
