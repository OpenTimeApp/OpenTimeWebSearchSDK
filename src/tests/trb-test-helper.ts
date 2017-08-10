import { TimeRocketBookerSDK } from "../sdk/api/timerocket-booker-sdk";
import { HttpAppRequest } from "../sdk/libraries/http-app-request";
import * as testAPI from "./test-config";
export class TestHelper {
  public static beforeAll() {
      TimeRocketBookerSDK.initService(testAPI.config.api_key, true);
      TimeRocketBookerSDK.getService().setServer(testAPI.config.server);
  }

  public static restoreData(scripts: Array<string>, callback: (response) => void) {
    let request = new HttpAppRequest();
    let script = scripts.join(',');
    request.getResponse(
        TimeRocketBookerSDK.getService().getServer() + '/restore/restore.php',
      'GET',
      {api_key: TimeRocketBookerSDK.getService().getAPIKey(), script: script},
      (response) => {
        callback(response);
      }
    );
  }
}