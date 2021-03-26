<template>
<div class="container">

    <TopBar />

    <div class="row">
        <div class="col-md-2">
            <SideBar />
        </div>
        <div class="col-md-10">
            <CompanyBar />
        </div>
    </div>

</div>


</template>

<script>
import SideBar from "../components/core/SideBar";
import TopBar from "../components/core/TopBar";
import CompanyBar from "../components/cards/CompanyBar";
export default {
name: "Dashboard",
components: {SideBar,TopBar,CompanyBar}
}
</script>

<style scoped>

</style>