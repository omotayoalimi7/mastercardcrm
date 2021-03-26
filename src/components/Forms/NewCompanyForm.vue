<template>
<div class="card">
  <div class="card-body">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page">Company</li>
      <li class="breadcrumb-item active" aria-current="page">New Company</li>
    </ol>
  </nav>

<div class="row">

        <div class="col-md-9">
        <p class="form-title">Company Details</p>
            <FormulateForm @submit="submit" >
              <FormulateInput
                name="companyname"
                type="text"
                label="Company Name"
                validation="required"
                validation-name="Company Name"
                placeholder="ABC LTD"
              />
              <FormulateInput
                  name="companylogo"
                  type="text"
                  label="Company Logo"
                  validation="required"
                  validation-name="Company Logo"
                  placeholder="https://www.abcltd.com/logo.png"
                />
                <FormulateInput
                  name="companyurl"
                  type="text"
                  label="Company Url"
                  validation="required"
                  validation-name="Company Url"
                  placeholder="https://www.abcltd.com"
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
      StoreUtils.dispatch("company/createCompany");
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
