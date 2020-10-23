//MIXIN fonctions globales sur les customers
const axios = require('axios');
export default{
    //toutes les variables qu'on utilise dans le template
    data(){
        return {  
        customer:{
            key: '',
            name: '',
            firstName: '',
            address: '',
            city: '',
            postCode: '',
            email: '',
            phone: '',
        },
        customers: [],
        customersFilter:[],
        valueSearch:'',
        
        }
    },
    created: function () {
        this.findAllCustomers()
    },
    methods: {
        //la méthode created() s'appelle toute seule quand on ouvre la page
        findAllCustomers() {
        let vm = this
        axios.get(this.$api + "/_design/function/_view/vue_client_sans_erreur",{
            headers: {
            'Authorization': `Basic ${this.$token}` 
            }
        })
        .then(function (response) {
            // handle success
            //console.log("response")
            //console.log(response)
            vm.customers = response.data.rows
            vm.customersFilter = vm.customers 
            }).catch(function (error) {
                // handle error
                console.log(error);
            })
        },
        search(){
        // console.log(this.customers)
            this.customersFilter = this.customers.filter(cust =>{
                let name = cust.value.name
                if(name){
                if( name.includes(this.valueSearch.toUpperCase())){
                    return true
                }   
                }
                return false
            })
        },
        findOneCustomer(id) {
            let vm = this 
            console.log("before search")
            this.$db.get(id)    
            .then(function (response) {
             // Succes de la requete
             console.log("dans le search")
             console.log(response)
            
             vm.customer = response
          
            }).catch(function (error) {
             // Erreur de la requete
              console.log(error);
            })
          }
    }
}
