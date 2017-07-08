import { OpenTimeBoilerPlateSDK } from "../sdk/api/opentime-boilerplate-sdk";
import { HttpAppRequest } from "../sdk/libraries/http-app-request";
import * as testAPI from "./test-config";
export class TestHelper {
  public static beforeAll() {
    OpenTimeBoilerPlateSDK.initService(testAPI.config.api_key, true);
    OpenTimeBoilerPlateSDK.getService().setServer(testAPI.config.server);
  }

  public static restoreData(scripts: Array<string>, callback: (response) => void) {
    let request = new HttpAppRequest();
    let script = scripts.join(',');
    request.getResponse(
        OpenTimeBoilerPlateSDK.getService().getServer() + '/restore/restore.php',
      'GET',
      {api_key: OpenTimeBoilerPlateSDK.getService().getAPIKey(), script: script},
      (response) => {
        callback(response);
      }
    );
  }
}