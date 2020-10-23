<template>
    <div class="container">
    <h1>{{ title }}</h1>
        <v-alert v-if="isFormValid" type="success" style="background:green">
            <span v-if="this.fromPage == 'add'">Le devis a été créé !</span>
            <span v-if="this.fromPage == 'edit'">Le devis a été modifié !</span>
        </v-alert>
        <div v-if="errors.length > 0">
            <v-alert type="error" style="background:red" v-for="error in errors" :key="error">
            <span>{{ error }}</span>
            </v-alert>
        </div>
        <v-app id="inspire">
            <v-form v-model="valid" ref="formQuote">
                <v-container>
                    <v-row>
                        <v-col md="6">
                            <v-text-field v-model="dataForm.numQuote" :rules="this.fieldRules('numDevis')" label="Numéro du Devis" required></v-text-field>
                        </v-col>
                        <v-col md="6">
                            <v-text-field v-model="dataForm.keyCommercial" :rules="this.fieldRules('nomCom')" label="Nom du commercial" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <v-text-field v-model="dataForm.nameClient" :rules="this.fieldRules('nomCli')" label="Nom du client" required></v-text-field>
                        </v-col>
                        <v-col md="6">
                            <v-text-field v-model="dataForm.prenomClient" :rules="this.fieldRules('prenomCli')" label ="Prénom du client" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="3">
                            <v-date-picker v-model="picker" :show-current="false" :rules="this.fieldRules('date')" label="Date du Devis" required></v-date-picker>
                        </v-col>
                        <v-col md="3">
                            <v-select v-model="selection" 
                                :items="item" item-text="statut" :rules="this.fieldRules('statut')"
                                label="Statut du devis" persistent-hint return-object
                                single-line>
                            </v-select>
                        </v-col>
                        <v-col md="3">
                            <v-select
                                v-model="select"
                                :items="items" item-text="gamme" :rules="this.fieldRules('gamme')"
                                label="Gamme de produits" persistent-hint return-object
                                single-line>
                            </v-select>
                        </v-col>
                        <v-col md="3">
                            <v-text-field v-model="dataForm.price" :rules="this.fieldRules('puht')" label ="Prix Unitaire HT"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-btn v-if="fromPage == 'add'" :disabled="!valid" color="success" class="mr-4" @click="validate">Valider</v-btn>
                    <v-btn v-if="fromPage == 'edit'" :disabled="!valid" color="warning" class="mr-4" @click="validate">Modifier</v-btn>
                    <v-btn color="gray" class="mr-4" @click="reset">Réinitialiser</v-btn>
                </v-container>
            </v-form>
        </v-app>
    </div>
</template>
<script>
export default {
    name:'FormQuote',
    data(){
        return {
            items: [
            { gamme: 'Maisons'},
            { gamme: 'Bois'},
            { gamme: 'Mobil-Homes'},
            { gamme: 'Bureaux'},
            { gamme: 'Autres'},
            ],      
            item: [
                { statut: 'En cours'},
                { statut: 'Envoyé'},
                { statut: 'Signé'},
            ],
            shortid : this.$shortid,
            picker : new Date().toISOString().substr(0, 10),
            // picker : '1998-09-10',
            // les données du formulaire
            valid: true,
            isFormValid: false,
            errors: [],
            dataForm: {
                numQuote: '',
                dateCreate: '',
                keyCommercial:'',
                nameClient:'',
                prenomClient:'',
                keyGamme:'',
                price:''
            },          
        }
    },
    methods: {
        // règles spécifiques sur certains champs
        fieldRules(field) {
            let rules = []
            rules.push(v => !!v || 'Le champ ' + field + ' est obligatoire')
            if (field == 'puht') {
                rules.push(v => (v && !isNaN(v)) || "Le format du prix n'est pas valide")
            }               
            return rules
        }, 
        validate() {
            if(this.valid){
                this.addDevis(this.dataForm);
            }
        },
        reset(){
            this.$refs.formCustomer.reset()
            this.isFormValid = false
        },
        addDevis(data){
            let vu = this
            data.key = this.shortid.generate()
            var devis = {
                _id : "devis_" + data.numQuote+ "_" + data.keyClient+ "_" + data.keyCommercial + "_"+ data.key,
                key : data.key,
                numQuote : data.numQuote,
                dateCreate : data.dateCreate,
                keyCommercial : data.keyCommercial,
                keyClient : data.keyClient,
                keyGamme: data.keyGamme 
            };
        vu.$db.put(devis, function callback(err) {
            if(!err){
               /*/ console.log("Devis Ajouté")
                console.log(vu.dataForm)
                console.log(vu.valid)*/
                vu.dataForm = []
                vu.valid = !vu.valid
                vu.isFormValid = true
            }
        });           
    }
    },
      props: [
    'title',
    'fromPage',
    'customer'
  ]
}
</script>
