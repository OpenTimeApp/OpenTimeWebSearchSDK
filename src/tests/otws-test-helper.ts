import { TimeRocketBoilerPlateSDK } from "../sdk/api/timerocket-boilerplate-sdk";
import { HttpAppRequest } from "../sdk/libraries/http-app-request";
import * as testAPI from "./test-config";
export class TestHelper {
  public static beforeAll() {
    TimeRocketBoilerPlateSDK.initService(testAPI.config.api_key, true);
    TimeRocketBoilerPlateSDK.getService().setServer(testAPI.config.server);
  }

  public static restoreData(scripts: Array<string>, callback: (response) => void) {
    let request = new HttpAppRequest();
    let script = scripts.join(',');
    request.getResponse(
        TimeRocketBoilerPlateSDK.getService().getServer() + '/restore/restore.php',
      'GET',
      {api_key: TimeRocketBoilerPlateSDK.getService().getAPIKey(), script: script},
      (response) => {
        callback(response);
      }
    );
  }
}