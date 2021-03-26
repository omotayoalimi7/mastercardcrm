<template>


<div class="card">
  <div class="card-body">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page">Profile</li>
      <li class="breadcrumb-item active" aria-current="page" v-if="this.mycurrentcompany.length>0">{{this.mycurrentcompany[0].companyname}}</li>
    </ol>
  </nav>

<div class="row">
      <div class="col-md-6">
        <div class="card" style="width: 18rem;">
          <img v-if="this.mycurrentcompany.length>0" :src="this.mycurrentcompany[0].companylogo" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="card-title" v-if="this.mycurrentcompany.length>0">{{this.mycurrentcompany[0].companyname}}</h6>
            <span>{{this.mycurrentcompany[0].companyurl}}</span>

          </div>
        </div>
        </div>
        <div class="col-md-6">
        <p class="form-title">Edit Employee Details</p>
            <FormulateForm @submit="submit" >
              <FormulateInput
                name="firstname"
                type="text"
                label="Fist Name"
                validation="required"
                validation-name="First Name"
                placeholder="John"
                :value="this.currentuser.firstname"
              />
              <FormulateInput
                  name="lastname"
                  type="text"
                  label="Last Name"
                  validation="required"
                  validation-name="Last Name"
                  placeholder="Doe"
                  :value="this.currentuser.lastname"
                />
              <FormulateInput
                  name="profilestatus"
                  type="text"
                  label="Profile status"
                  validation="required"
                  validation-name="Profile status"
                  placeholder="active"
                  disabled="true"
                  :value="this.currentuser.profilestatus"
                />
                <FormulateInput
                      name="role"
                      type="text"
                      label="Role"
                      validation="required"
                      validation-name="Role"
                      placeholder="admin"
                      disabled="true"
                      :value="this.currentuser.role"
                    />

                <FormulateInput
                  name="id"
                  type="hidden"
                  label=""
                  validation="required"
                  validation-name="Company ID"
                  placeholder="id"
                  :value="this.currentuser.id"
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
        StoreUtils.commit("company/SET_CURRENT_COMPANY", "");
        this.tcompanyname="";
        let emailaddress=this.currentuser.emailaddress;
        let currentcompanycode=this.currentuser.companycode;
        let payload = {
            "emailaddress" : emailaddress,
             "companycode" : currentcompanycode
        };
        StoreUtils.dispatch("company/companyByCompanycode",payload);

    },
    submit(data){
        StoreUtils.commit("form/BUILD_FORM_BODY", data);
        StoreUtils.dispatch("employee/updateUser");
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
