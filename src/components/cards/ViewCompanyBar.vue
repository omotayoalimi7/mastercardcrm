<template>


<div class="card">
  <div class="card-body">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page">Company</li>
      <li class="breadcrumb-item active" aria-current="page" v-if="this.mycurrentcompany.length>0">{{this.mycurrentcompany[0].companyname}}</li>
    </ol>
  </nav>

<div class="row">
      <div class="col-md-6">
        <div class="card" style="width: 18rem;">
          <img v-if="this.mycurrentcompany.length>0" :src="this.mycurrentcompany[0].companylogo" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="card-title" v-if="this.mycurrentcompany.length>0">{{this.mycurrentcompany[0].companyname}}</h6>
          </div>
        </div>
        </div>
        <div class="col-md-6">
        <p class="form-title">Company Details</p>
            <FormulateForm @submit="submit" v-if="this.mycurrentcompany.length>0">
              <FormulateInput
                name="companyname"
                type="text"
                label="Company Name"
                validation="required"
                validation-name="Company Name"
                placeholder="ABC LTD"
                :value="this.mycurrentcompany[0].companyname"
              />
              <FormulateInput
                  name="companylogo"
                  type="text"
                  label="Company Logo"
                  validation="required"
                  validation-name="Company Logo"
                  placeholder="https://www.abcltd.com/logo.png"
                  :value="this.mycurrentcompany[0].companylogo"
                />
                <FormulateInput
                  name="companyurl"
                  type="text"
                  label="Company Url"
                  validation="required"
                  validation-name="Company Url"
                  placeholder="https://www.abcltd.com"
                  :value="this.mycurrentcompany[0].companyurl"
                />
                <FormulateInput
                  name="id"
                  type="hidden"
                  label=""
                  validation="required"
                  validation-name="Company ID"
                  placeholder="id"
                  :value="this.mycurrentcompany[0].id"
                />

              <FormulateInput type="submit" label="save" />
            </FormulateForm>
        </div>





      </div>
      </div>
</div>




</template>

<script>
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import router from "../../router/router";

export default {
  name: "ViewCompanyBar",
  data() {
      return {
      };
  },
  methods: {
    fetchcurrentcompany() {
        StoreUtils.commit("company/SET_CURRENT_COMPANY", []);
        this.tcompanyname="";
        let emailaddress=this.currentuser.emailaddress;
        let currentcompanycode=this.$route.query.id;
        let payload = {
            "emailaddress" : emailaddress,
             "companycode" : currentcompanycode
        };
        StoreUtils.dispatch("company/companyByCompanycode",payload);

    },
    submit(data){
        StoreUtils.commit("form/BUILD_FORM_BODY", data);
        StoreUtils.dispatch("company/updateCompany");
    }
  },
  computed: {
    currentuser() {
      return StoreUtils.rootGetters("auth/getUser");
    },
    mycurrentcompany() {
        return StoreUtils.rootGetters("company/getMyCurrentCompany");
    }
  },
  created(){
      this.fetchcurrentcompany();
   },
};
</script>

<style scoped></style>
