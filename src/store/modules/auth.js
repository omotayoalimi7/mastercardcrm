import AuthServices from "../../services/AuthServices";
import StoreUtils from "@/utils/BaseUtils/StoreUtils";
import RouterUtils from "@/utils/BaseUtils/RouterUtils";
import LoaderUtils from "@/utils/BaseUtils/LoaderUtils";
const authService = new AuthServices();

export const namespaced = true;

export const state = {
userInfo: {}
};

export const getters = {
  getUser: state => {
    return state.userInfo;
  }
};

export const mutations = {
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
  }
};

export const actions = {
  login() {
    let payload = {
      ...StoreUtils.rootGetters("form/getFormBody"),
      source: "appdashboard"
    };
    let successAction = responseData => {
      StoreUtils.commit("auth/SET_USER_INFO", responseData);
      if(responseData.role.toLowerCase().trim()=="superadmin"){
        RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
      }else if(responseData.role.toLowerCase().trim()=="admin"){
        RouterUtils.changeRouteUrlTo("viewcompany?id="+responseData.companycode);
      }else{
        RouterUtils.changeRouteUrlTo("profile");
      }
    };

    authService.login(payload, successAction, LoaderUtils.types.BLOCKING);
  },

};
