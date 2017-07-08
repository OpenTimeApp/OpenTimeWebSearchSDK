import { OpenTimeBoilerPlateSDK } from "./opentime-boilerplate-sdk";
import { HttpAppRequest } from "../libraries/http-app-request";
import { OTWSConstant } from "./otws-constant";

export class OTWSRequest {

  private _request: HttpAppRequest;

  public constructor() {
    this._request = new HttpAppRequest();
  }

  public getResponse(api: string, apiMethod, httpMethod: string, data: any, callback: (responseObject) => void) {

    let key = OpenTimeBoilerPlateSDK.getService().getAPIKey();

    if (key !== null && key !== '') {
      this._request.setRequestHeader(OTWSConstant.API_KEY_NAME, OpenTimeBoilerPlateSDK.getService().getAPIKey());
    }

    this._request.setRequestHeader(OTWSConstant.API_VERSION_NAME, OTWSConstant.API_VERSION);

    let url = OpenTimeBoilerPlateSDK.getService().getEndpoint(api, apiMethod);

    this._request.getResponse(url, httpMethod, data, callback);
  }
}