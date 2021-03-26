<template>
<div class="container">

    <TopBar />

    <div class="row">
        <div class="col-md-2">
            <SideBar />
        </div>
        <div class="col-md-10">
            <NewUserForm />
        </div>
    </div>

</div>


</template>

<script>
import SideBar from "../components/core/SideBar";
import TopBar from "../components/core/TopBar";
import NewUserForm from "../components/Forms/NewUserForm";
export default {
name: "NewUser",
components: {SideBar,TopBar,NewUserForm}
}
</script>

<style scoped>

</style>