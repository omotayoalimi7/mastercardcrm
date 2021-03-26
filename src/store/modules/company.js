import CompanyServices from "../../services/CompanyServices";
import StoreUtils from "@/utils/BaseUtils/StoreUtils";
import RouterUtils from "@/utils/BaseUtils/RouterUtils";
import LoaderUtils from "@/utils/BaseUtils/LoaderUtils";
const companyService = new CompanyServices();

export const namespaced = true;

export const state = {
    companies: [],
    currentcompany: []
};

export const getters = {
  getMyCompanies: state => {
    return state.companies;
  },
   getMyCurrentCompany: state => {
      return state.currentcompany;
    }
};

export const mutations = {
  SET_MY_COMPANIES(state, payload) {
    state.companies = payload;
  },
  SET_CURRENT_COMPANY(state, payload) {
      state.currentcompany = payload;
    }
};

export const actions = {
  myCompanies(undefined, payload) {
    let successAction = responseData => {
      StoreUtils.commit("company/SET_MY_COMPANIES", responseData.result);
      //RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
    };

    companyService.getallcompanies(payload, successAction, LoaderUtils.types.BLOCKING);
  },

  companyByCompanycode(undefined, payload) {
      let successAction = responseData => {
        StoreUtils.commit("company/SET_CURRENT_COMPANY", responseData.result);
        //RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
      };

      companyService.getcompanybycompanycode(payload, successAction, LoaderUtils.types.BLOCKING);
    },

    updateCompany() {
    let payload = {
          ...StoreUtils.rootGetters("form/getFormBody")
        };
          let successAction = responseData => {
            StoreUtils.commit("company/SET_CURRENT_COMPANY", responseData.result);
            //RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
          };

          companyService.updatecompany(payload, successAction, LoaderUtils.types.BLOCKING);
        },
    createCompany() {
        let payload = {
              ...StoreUtils.rootGetters("form/getFormBody")
            };
              let successAction = responseData => {
                StoreUtils.commit("company/SET_CURRENT_COMPANY", responseData.result);
                RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
              };

              companyService.createcompany(payload, successAction, LoaderUtils.types.BLOCKING);
            }

};
