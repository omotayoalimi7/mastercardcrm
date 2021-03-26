<template>
  <div class="app-form">
  <div class="center">
      <img style="width:20%"  src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fsteveolenski%2Ffiles%2F2016%2F07%2FMastercard_new_logo-1200x865.jpg" class="card-img-top" alt="...">
  </div>
    <p class="form-title">CRM Login</p>
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
        validation="required"
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
  name: "LoginForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/login");
    }
  }
};
</script>

<style scoped></style>
