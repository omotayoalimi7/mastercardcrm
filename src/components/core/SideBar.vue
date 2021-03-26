<template>


<div class="card">
<div>
    <img style="width:100%"  src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fsteveolenski%2Ffiles%2F2016%2F07%2FMastercard_new_logo-1200x865.jpg" class="card-img-top" alt="...">
</div>
  <div class="">
    <ul class="list-group">
      <li class="list-group-item" v-if="this.currentuser.role.toLowerCase().trim()=='superadmin'"><router-link  :to="'dashboard'" >My Companies</router-link></li>
      <li class="list-group-item" v-if="this.currentuser.role.toLowerCase().trim()=='superadmin' "><router-link  :to="'newcompany'" >New Company</router-link></li>
      <li class="list-group-item" v-if="this.currentuser.role.toLowerCase().trim()=='admin' "><router-link  :to="'viewcompany?id=' + this.currentuser.companycode" >My Company</router-link></li>
      <li class="list-group-item" v-if="this.currentuser.role.toLowerCase().trim()!=='superadmin' "><router-link  :to="'profile'"  >Profile</router-link></li>
    <li class="list-group-item" v-if="this.currentuser.role.toLowerCase().trim()=='superadmin'"><router-link  :to="'newsuperadmin'" >New Super Admin</router-link></li>

    </ul>
  </div>
</div>




</template>

<script>
import StoreUtils from "../../utils/BaseUtils/StoreUtils";

export default {
  name: "SideBar",
  methods: {

  },
  computed: {
        currentuser() {
          return StoreUtils.rootGetters("auth/getUser");
        },

      },
};
</script>

<style scoped></style>
