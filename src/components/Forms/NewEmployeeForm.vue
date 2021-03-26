<template>
<div class="card">
  <div class="card-body">


<div class="row">

        <div class="col-md-9">
        <p class="form-title">New Employee Details</p>
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
                  :options="{Admin: 'Admin', Employee: 'Employee'}"
                  type="select"
                  validation="required"
                  placeholder="Select Employee Role"
                  label="Role"
                />
                <FormulateInput
                  name="companycode"
                  type="hidden"
                  label=""
                  validation="required"
                  validation-name="Company Code"
                  placeholder="companycode"
                  :value="this.mycurrentcompany[0].companycode"
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
  name: "NewEmployeeForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("employee/createEmployee");
    }
  },
   computed: {
      currentuser() {
        return StoreUtils.rootGetters("auth/getUser");
      },
    mycurrentcompany() {
            return StoreUtils.rootGetters("company/getMyCurrentCompany");
        }
    },
};
</script>

<style scoped></style>
