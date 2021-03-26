<template>
  <div class="app-form">
    <p class="form-title">Register Form</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="emailaddress"
        type="email"
        label="Email Adddress"
        validation="required|email"
        validation-name="Email Address"
        placeholder="johndoe.gmail.com"
      />
      <FormulateInput
        name="password"
        type="password"
        label="Password"
        validation="required|number"
        validation-name="Password is required"
        placeholder="Password"
      />
      <FormulateInput type="submit" label="Login" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";

export default {
  name: "RegisterForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/register");
    }
  }
};
</script>

<style scoped></style>
