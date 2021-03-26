import BaseService from "./BaseService";
import AppUtils from "../utils/BaseUtils/AppUtils";

class CompanyServices extends BaseService {
  getallcompanies(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {

    return this.makePostRequest(
      AppUtils.urls.company.GETALLCOMPANIES,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
    getcompanybycompanycode(
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    ) {

      return this.makePostRequest(
        AppUtils.urls.company.GETCOMPANYBYCOMPANYCODE,
        payload,
        successAction,
        loaderType,
        errorType,
        showSuccessMessage,
        successCondition,
        getErrorMessage
      );
    }

    updatecompany(
          payload,
          successAction,
          loaderType,
          errorType,
          showSuccessMessage,
          successCondition,
          getErrorMessage
        ) {

          return this.makePostRequest(
            AppUtils.urls.company.UPDATECOMPANY,
            payload,
            successAction,
            loaderType,
            errorType,
            showSuccessMessage,
            successCondition,
            getErrorMessage
          );
        }

        createcompany(
              payload,
              successAction,
              loaderType,
              errorType,
              showSuccessMessage,
              successCondition,
              getErrorMessage
            ) {

              return this.makePostRequest(
                AppUtils.urls.company.CREATECOMPANY,
                payload,
                successAction,
                loaderType,
                errorType,
                showSuccessMessage,
                successCondition,
                getErrorMessage
              );
            }
}

export default CompanyServices;
