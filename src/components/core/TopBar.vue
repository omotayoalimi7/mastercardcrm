<template>
    <div class="row maargin20pct">
        <div class="col-md-2">
        </div>
        <div class="col-md-10">

            <div class="center">
                <span class="font20px">MasterCard CRM</span>
            </div>
            <div class="card">
              <div class="card-body">
                <ul class="nav justify-content-center">
                  <li class="nav-item" v-if="this.currentuser.role.toLowerCase().trim()=='superadmin'">
                    <router-link  :to="'dashboard'" class="nav-link" >My Companies</router-link>
                  </li>
                  <li class="nav-item" v-if="this.currentuser.role.toLowerCase().trim()=='admin'">
                      <router-link class="nav-link"  :to="'viewcompany?id=' + this.currentuser.companycode" >My Company</router-link>
                    </li>
                  <li class="nav-item" v-if="this.currentuser.role.toLowerCase().trim()=='superadmin'">
                    <router-link  :to="'newcompany'" class="nav-link" >New Company</router-link>
                  </li>
                  <li class="nav-item" v-if="this.currentuser.role.toLowerCase().trim()!=='superadmin' ">
                    <router-link  :to="'profile'" class="nav-link" >Profile</router-link>
                  </li>


                </ul>
              </div>
            </div>
        </div>

    </div>




</template>

<script>
import StoreUtils from "../../utils/BaseUtils/StoreUtils";

export default {
  name: "TopBar",
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
