<template>

<div class="card">
  <div class="card-body">


<div class="row">

        <div class="col-md-9">
        <p class="form-title">Employee List</p>
        <vuetable ref="vuetable"
            :fields="['SN', 'emailaddress', 'firstname', 'lastname', 'profilestatus','role', 'createdby', 'created_at']"
            :api-mode="false"
            :data="this.companyemployees"
          ></vuetable>
        </div>





      </div>
      </div>
</div>


</template>

<script>
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import Vuetable from 'vuetable-2'
export default {

  name: "EmployeeList",
components: {Vuetable},
  data() {
      return {
      };
  },
   methods: {
      fetchcompanyemployees() {
          StoreUtils.commit("employee/SET_COMPANY_EMPLOYEE", []);

          let emailaddress=this.currentuser.emailaddress;
          let currentcompanycode=this.mycurrentcompany[0].companycode;
          let payload = {
              "emailaddress" : emailaddress,
               "companycode" : currentcompanycode
          };
          console.log("payload",payload);
          StoreUtils.dispatch("employee/getCompanyEmployee",payload);

      },

    },
   computed: {
      currentuser() {
        return StoreUtils.rootGetters("auth/getUser");
      },
      mycurrentcompany() {
          return StoreUtils.rootGetters("company/getMyCurrentCompany");
      },
        companyemployees() {
            return StoreUtils.rootGetters("employee/getCompanyEmployee");
       }
    },
     created(){
          this.fetchcompanyemployees();
   },

};
</script>

<style scoped></style>
