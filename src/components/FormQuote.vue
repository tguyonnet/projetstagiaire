<template>
    <div class="container">
        <v-app id="inspirer">
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="5">
                            <v-text-field v-model="dataForm.number" label="Numéro du Devis" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="5">
                            <v-date-picker v-model="picker" label="Date de réalisation du Devis" required></v-date-picker>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="5">
                            <v-text-field v-model="dataForm.commercial_devis" label="Nom du commercial" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="5">
                            <v-text-field v-model="dataForm.name" label="Nom du client" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="5">
                            <v-text-field v-model="dataForm.firstname" label ="Prénom du client" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-subheader>
                                Gammes de produits 
                            </v-subheader>
                        </v-col>
                        <v-col>
                            <v-select
                                v-model="select" :hint="`${select.state}, ${select.abbr}`"
                                :items="items" item-text="state" item-value="abbr"
                                label="Select" persistent-hint return-object
                                single-line>
                            </v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="5">
                            <v-text-field v-model="dataForm.price" label ="Prix Unitaire HT"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-btn v-if="fromPage == 'add'" :disabled="!valid" color="success" class="mr-4" @click="validate">Valider</v-btn>
                    <v-btn v-if="fromPage == 'edit'" :disabled="!valid" color="warning" class="mr-4" @click="modifiate">Modifier</v-btn>
                    <v-btn color="blue" class="mr-4" @click="reset">Réinitialiser</v-btn>
                </v-container>
            </v-form>
        </v-app>
    </div>
</template>
<script>
export default {
    
    name:'FormDevis',
    data(){
        return {
        select: { gamme: 'Modulaires', abbr: 'MOD' },
        items: [
          { gamme: 'Maisons', abbr: 'MAI' },
          { gamme: 'Bois', abbr: 'BOI' },
          { gamme: 'Mobil-Homes', abbr: 'MH' },
          { gamme: 'Bureaux', abbr: 'BUR' },
          { gamme: 'Autres', abbr: 'AUT' },
        ],
            shortid : this.$shortid,
            picker : new Date().toISOString.substr(0.10),
            valid:true,
            isFormValid:false,
            Error:[],
            dataForm: {
                num_devis: '',
                date_devis: '',
                commercial_devis:'',
                nom_client:'',
                prenom_client:'',
                gamme_devis:'',

            },          
        }
    },
    methods: {
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
                    nom_client : data.nom_client,
                    gamme_devis: data.gamme_devis 
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
}
</script>
