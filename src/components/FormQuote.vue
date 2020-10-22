<template>
    <div class="container">
    <h1>{{ title }}</h1>
        <v-alert v-if="isFormValid" type="success" style="background:green">
            <span v-if="this.fromPage == 'add'">Le devis a été ajouté !</span>
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
                        <v-col md="4">
                            <v-text-field v-model="dataForm.number" label="Numéro du Devis" required></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <v-text-field v-model="dataForm.commercial_devis" label="Nom du commercial" required></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <v-text-field v-model="dataForm.price" label ="Prix Unitaire HT"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">
                            <v-text-field v-model="dataForm.name" label="Nom du client" required></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <v-select v-model="selection" :hint="`${selection.statut}, ${select.abbr}`"
                                :items="item" item-text="statut" item-value="abr"
                                label="Statut du devis" persistent-hint return-object
                                single-line>
                            </v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">
                            <v-text-field v-model="dataForm.firstname" label ="Prénom du client" required></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <v-select
                                v-model="select" :hint="`${select.gamme}, ${select.abbr}`"
                                :items="items" item-text="gamme" item-value="abbr"
                                label="Gamme de produits" persistent-hint return-object
                                single-line>
                            </v-select>
                        </v-col>
                        <v-col md="4">
                            <v-date-picker v-model="picker" :show-current="false" label="Date de réalisation du Devis" required></v-date-picker>
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
            select: { 
                gamme: 'Modulaires', 
                abbr: 'MOD' 
            },
            items: [
            { gamme: 'Maisons', abbr: 'MAI' },
            { gamme: 'Bois', abbr: 'BOI' },
            { gamme: 'Mobil-Homes', abbr: 'MH' },
            { gamme: 'Bureaux', abbr: 'BUR' },
            { gamme: 'Autres', abbr: 'AUT' },
            ],
            selection: {
                statut: 'En cours', abr: 'ec'
            },
            item: [
                { statut: 'En cours', abr: 'EC' },
                { statut: 'Envoyé', abr: 'EV' },
                { statut: 'Signé', abr: 'SG'},
            ],
            shortid : this.$shortid,
            picker : new Date().toISOString().substr(0, 10),
            // picker : '1998-09-10',
            // les données du formulaire
            valid: true,
            isFormValid: false,
            errors: [],
            dataForm: {
                num_devis: '',
                date_devis: '',
                commercial_devis:'',
                nom_client:'',
                prenom_client:'',
                gamme_produit:'',
            },          
        }
    },
    methods: {
        // règles spécifiques sur certains champs
        fieldRules(field) {
            let rules = []
            rules.push(v => !!v || 'Le champ ' + field + ' est obligatoire')
            if (field == 'Date du devis') {
                rules.push(v => (v && v.length >= 10))
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
                _id : "devis_" + data.num_devis+ "_" + data.nom_client+ "_" + data.commercial_devis + "_"+ data.key,
                key : data.key,
                num_devis : data.num_devis,
                date_devis : data.date_devis,
                commercial_devis : data.commercial_devis,
                nom_client : data.nom_client.toUpperCase(),
                gamme_produit: data.gamme_produit 
            };
        vu.$db.put(devis, function callback(err) {
            if(!err){
                console.log("Devis Ajouté")
                console.log(vu.dataForm)
                console.log(vu.valid)
                vu.dataForm = []
                vu.valid = !vu.valid
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
