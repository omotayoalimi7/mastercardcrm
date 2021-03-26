import EmployeeServices from "../../services/EmployeeServices";
import StoreUtils from "@/utils/BaseUtils/StoreUtils";
import RouterUtils from "@/utils/BaseUtils/RouterUtils";
import LoaderUtils from "@/utils/BaseUtils/LoaderUtils";
const employeeServices = new EmployeeServices();

export const namespaced = true;

export const state = {
    companies: [],
    currentcompany: [],
    companyemployee: [],
};

export const getters = {
  getMyCompanies: state => {
    return state.companies;
  },
   getMyCurrentCompany: state => {
      return state.currentcompany;
    },
    getCompanyEmployee: state => {
      return state.companyemployee;
    }
};

export const mutations = {
  SET_MY_COMPANIES(state, payload) {
    state.companies = payload;
  },
  SET_CURRENT_COMPANY(state, payload) {
    state.currentcompany = payload;
   },
    SET_COMPANY_EMPLOYEE(state, payload) {
      state.companyemployee = payload;
    }
};

export const actions = {

    updateUser() {
    let payload = {
          ...StoreUtils.rootGetters("form/getFormBody")
        };
          let successAction = responseData => {
            StoreUtils.commit("auth/SET_USER_INFO", responseData);
            //RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
          };

          employeeServices.updateuser(payload, successAction, LoaderUtils.types.BLOCKING);
        },
        getCompanyEmployee(undefined,payload) {

          let successAction = responseData => {
           StoreUtils.commit("employee/SET_COMPANY_EMPLOYEE", responseData.result);
          };

          employeeServices.getcompanyusers(payload, successAction, LoaderUtils.types.BLOCKING);
        },
    createEmployee() {
        let payload = {
              ...StoreUtils.rootGetters("form/getFormBody")
            };
              let successAction = responseData => {
                RouterUtils.changeRouteUrlTo("viewcompany?id="+responseData.companycode);
              };

              employeeServices.createuser(payload, successAction, LoaderUtils.types.BLOCKING);
            },

    createAdminuser() {
    let payload = {
          ...StoreUtils.rootGetters("form/getFormBody")
        };
          let successAction = responseData => {
            RouterUtils.changeRouteUrlTo("dashboard");
          };

          employeeServices.createuser(payload, successAction, LoaderUtils.types.BLOCKING);
        }

};
