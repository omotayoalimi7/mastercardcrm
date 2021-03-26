<template>
<div class="card">
  <div class="card-body">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page">Super Admin</li>
      <li class="breadcrumb-item active" aria-current="page">New User</li>
    </ol>
  </nav>

<div class="row">

        <div class="col-md-9">
        <p class="form-title">New Super Admin Details</p>
            <FormulateForm @submit="submit" >
              <FormulateInput
                name="firstname"
                type="text"
                label="Fist Name"
                validation="required"
                validation-name="First Name"
                placeholder="John"
              />
              <FormulateInput
                  name="lastname"
                  type="text"
                  label="Last Name"
                  validation="required"
                  validation-name="Last Name"
                  placeholder="Doe"
                  help="please note that this works as your password"
                />
              <FormulateInput
                  name="emailaddress"
                  type="text"
                  label="Email address"
                  validation="required|email"
                  validation-name="Email Address"
                  placeholder="abc@xyz.com"
                />

                <FormulateInput
                  name="role"
                  :options="{Superadmin: 'Superadmin'}"
                  type="select"
                  validation="required"
                  placeholder="Select Role"
                  label="Role"
                />

                <FormulateInput
                  name="createdby"
                  type="hidden"
                  label=""
                  validation="required"
                  validation-name="Company ID"
                  placeholder="id"
                  :value="this.currentuser.emailaddress"
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

export default {
  name: "NewCompanyForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("employee/createAdminuser");
    }
  },
   computed: {
      currentuser() {
        return StoreUtils.rootGetters("auth/getUser");
      }
    },
};
</script>

<style scoped></style>
