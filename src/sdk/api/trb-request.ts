import { TimeRocketBookerSDK } from "./timerocket-booker-sdk";
import { HttpAppRequest } from "../libraries/http-app-request";
import { TRBConstant } from "./trb-constant";

export class TRBRequest {

  private _request: HttpAppRequest;

  public constructor() {
    this._request = new HttpAppRequest();
  }

  public getResponse(api: string, apiMethod, httpMethod: string, data: any, callback: (responseObject) => void) {

    let key = TimeRocketBookerSDK.getService().getAPIKey();

    if (key !== null && key !== '') {
      this._request.setRequestHeader(TRBConstant.API_KEY_NAME, TimeRocketBookerSDK.getService().getAPIKey());
    }

    this._request.setRequestHeader(TRBConstant.API_VERSION_NAME, TRBConstant.API_VERSION);

    let url = TimeRocketBookerSDK.getService().getEndpoint(api, apiMethod);

    this._request.getResponse(url, httpMethod, data, callback);
  }
}