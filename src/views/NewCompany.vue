<template>
<div class="container">

    <TopBar />

    <div class="row">
        <div class="col-md-2">
            <SideBar />
        </div>
        <div class="col-md-10">
            <NewCompanyForm />
        </div>
    </div>

</div>


</template>

<script>
import SideBar from "../components/core/SideBar";
import TopBar from "../components/core/TopBar";
import NewCompanyForm from "../components/Forms/NewCompanyForm";
export default {
name: "NewCompany",
components: {SideBar,TopBar,NewCompanyForm}
}
</script>

<style scoped>

</style>