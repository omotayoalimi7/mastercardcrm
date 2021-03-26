<template>


<div class="card">
  <div class="card-body">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page">Company</li>
    </ol>
  </nav>
<carousel :perPage="5">
      <slide v-for="(company, index) in this.mycompanies" :key="index">
        <div class="card" style="width: 10rem;">
          <img :src="company.companylogo" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="card-title">{{company.companyname}}</h6>
            <router-link class="btn btn-primary" :to="'viewcompany?id=' + company.companycode" >View</router-link>
          </div>
        </div>

      </slide>
      <slide>
      <div class="card" style="width: 10rem;">
        <img src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h6 class="card-title">New Company</h6>
          <router-link  :to="'newcompany'"  class="btn btn-primary">Add New</router-link>
        </div>
      </div>
      </slide>

    </carousel>

</div>
</div>


</template>

<script>
import StoreUtils from "../../utils/BaseUtils/StoreUtils";

export default {
  name: "CompanyBar",
  data() {
      return {

      };
  },
  methods: {
    fetchcompanies() {
        let emailaddress=this.currentuser.emailaddress;
        let payload = {
            "emailaddress" : emailaddress
        };
        StoreUtils.dispatch("company/myCompanies",payload);

    }
  },
  computed: {
    currentuser() {
      return StoreUtils.rootGetters("auth/getUser");
    },
    mycompanies() {
        return StoreUtils.rootGetters("company/getMyCompanies");
    }
  },
  created(){
      this.fetchcompanies();
   },
};
</script>

<style scoped></style>
