import { OTWSConstant } from "./otws-constant";
export class TimeRocketBoilerPlateSDK {
  private static _sdk: TimeRocketBoilerPlateSDK = null;

  private _apiKey: string;
  private _inTestMode: boolean;
  private _server: string;

  constructor(apiKey: string, inTestMode: boolean) {
    this._apiKey = apiKey;
    this._inTestMode = inTestMode;
    this._server = inTestMode ? OTWSConstant.TEST_SERVER : OTWSConstant.LIVE_SERVER;
  }

  public static getService(): TimeRocketBoilerPlateSDK {
    if (TimeRocketBoilerPlateSDK._sdk !== null) {
      return TimeRocketBoilerPlateSDK._sdk;
    } else {
      throw new Error("TimeRocketBoilerPlateSDK not initialized");
    }
  }

  public static initService(apiKey: string, inTestMode: boolean = false): void {
    TimeRocketBoilerPlateSDK._sdk = new TimeRocketBoilerPlateSDK(apiKey, inTestMode);
  }

  public getEndpoint(api: string, method: string): string {
    let endpoint: string = this._server + '/' + api + OTWSConstant.API_BASE_URL;
    if (method !== '') {
      endpoint += '/' + method;
    }
    return endpoint;
  }

  public getServer(): string {
    return this._server;
  }

  public getAPIKey(): string {
    return this._apiKey;
  }

  public setServer(server: string): void {
    this._server = server;
  }
}