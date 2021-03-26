<template>
<div class="container">

    <TopBar />

    <div class="row">
        <div class="col-md-2">
            <SideBar />
        </div>
        <div class="col-md-10">
            <ViewCompanyBar />
            <div class="margin2pct">
            <button type="button" class="btn btn-secondary btn-sm" @click="this.showEmployeeList">View Employees</button>
            <button type="button" class="btn btn-primary btn-sm" style="float:right" @click="this.showNewEmployee">Add Employee</button>
            </div>
            <NewEmployeeBar v-if="this.shownewemployee" />
            <EmployeeListBar v-if="this.shoemployeelist" />
        </div>

    </div>

</div>


</template>

<script>
import SideBar from "../components/core/SideBar";
import TopBar from "../components/core/TopBar";
import ViewCompanyBar from "../components/cards/ViewCompanyBar";
import NewEmployeeBar from "../components/cards/NewEmployeeBar";
import EmployeeListBar from "../components/cards/EmployeeListBar";
export default {
name: "ViewCompany",
components: {SideBar,TopBar,ViewCompanyBar,NewEmployeeBar,EmployeeListBar},
data() {
      return {
        shoemployeelist:false,
        shownewemployee: false
      };
  },
  methods: {
      showEmployeeList() {
        this.shoemployeelist=true;
        this.shownewemployee=false;

      },
      showNewEmployee() {
          this.shownewemployee=true;
          this.shoemployeelist=false;

        }
    },
}
</script>

<style scoped>

</style>