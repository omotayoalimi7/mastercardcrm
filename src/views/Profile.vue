<template>
<div class="container">

    <TopBar />

    <div class="row">
        <div class="col-md-2">
            <SideBar />
        </div>
        <div class="col-md-10">
            <ProfileBar />


        </div>

    </div>

</div>


</template>

<script>
import SideBar from "../components/core/SideBar";
import TopBar from "../components/core/TopBar";
import ProfileBar from "../components/cards/ProfileBar";
export default {
name: "Profile",
components: {SideBar,TopBar,ProfileBar},
data() {
      return {
      };
  },
  methods: {

    },
}
</script>

<style scoped>

</style>