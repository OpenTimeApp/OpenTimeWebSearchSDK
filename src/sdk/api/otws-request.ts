import { TimeRocketBoilerPlateSDK } from "./timerocket-boilerplate-sdk";
import { HttpAppRequest } from "../libraries/http-app-request";
import { OTWSConstant } from "./otws-constant";

export class OTWSRequest {

  private _request: HttpAppRequest;

  public constructor() {
    this._request = new HttpAppRequest();
  }

  public getResponse(api: string, apiMethod, httpMethod: string, data: any, callback: (responseObject) => void) {

    let key = TimeRocketBoilerPlateSDK.getService().getAPIKey();

    if (key !== null && key !== '') {
      this._request.setRequestHeader(OTWSConstant.API_KEY_NAME, TimeRocketBoilerPlateSDK.getService().getAPIKey());
    }

    this._request.setRequestHeader(OTWSConstant.API_VERSION_NAME, OTWSConstant.API_VERSION);

    let url = TimeRocketBoilerPlateSDK.getService().getEndpoint(api, apiMethod);

    this._request.getResponse(url, httpMethod, data, callback);
  }
}