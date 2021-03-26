import BaseService from "./BaseService";
import AppUtils from "../utils/BaseUtils/AppUtils";

class EmployeeServices extends BaseService {
  createuser(
              payload,
              successAction,
              loaderType,
              errorType,
              showSuccessMessage,
              successCondition,
              getErrorMessage
            ) {

              return this.makePostRequest(
                AppUtils.urls.user.CREATEUSER,
                payload,
                successAction,
                loaderType,
                errorType,
                showSuccessMessage,
                successCondition,
                getErrorMessage
              );
            }

    updateuser(
          payload,
          successAction,
          loaderType,
          errorType,
          showSuccessMessage,
          successCondition,
          getErrorMessage
        ) {

          return this.makePostRequest(
            AppUtils.urls.user.UPDATEUSER,
            payload,
            successAction,
            loaderType,
            errorType,
            showSuccessMessage,
            successCondition,
            getErrorMessage
          );
        }

        getcompanyusers(
              payload,
              successAction,
              loaderType,
              errorType,
              showSuccessMessage,
              successCondition,
              getErrorMessage
            ) {

              return this.makePostRequest(
                AppUtils.urls.user.GETCOMPANYUSERS,
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

export default EmployeeServices;
