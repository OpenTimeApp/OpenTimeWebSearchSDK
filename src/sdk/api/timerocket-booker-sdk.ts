import { TRBConstant } from "./trb-constant";
export class TimeRocketBookerSDK {
  private static _sdk: TimeRocketBookerSDK = null;

  private _apiKey: string;
  private _inTestMode: boolean;
  private _server: string;

  constructor(apiKey: string, inTestMode: boolean) {
    this._apiKey = apiKey;
    this._inTestMode = inTestMode;
    this._server = inTestMode ? TRBConstant.TEST_SERVER : TRBConstant.LIVE_SERVER;
  }

  public static getService(): TimeRocketBookerSDK {
    if (TimeRocketBookerSDK._sdk !== null) {
      return TimeRocketBookerSDK._sdk;
    } else {
      throw new Error("TimeRocketBookerSDK not initialized");
    }
  }

  public static initService(apiKey: string, inTestMode: boolean = false): void {
    TimeRocketBookerSDK._sdk = new TimeRocketBookerSDK(apiKey, inTestMode);
  }

  public getEndpoint(api: string, method: string): string {
    let endpoint: string = this._server + '/' + api + TRBConstant.API_BASE_URL;
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