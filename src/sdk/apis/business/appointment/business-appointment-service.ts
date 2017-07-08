import {OTWSResponse} from "../../../api/otws-response";
import {OTWSRequest} from "../../../api/otws-request";
import {OTWSBookItForMeRequestRequest} from "./book-it-for-me-request/otws-book-it-for-me-request-request";
import {OTWSBookABusinessForMeRequestRequest} from "./book-a-business-for-me-request/otws-book-a-business-for-me-request-request";

export class OTWSBusinessAppointmentService {

    private static readonly API = "business/appointment";

    public createBookItForMeRequest(createRequest: OTWSBookItForMeRequestRequest, callback: (response: OTWSResponse) => void): void {

        let request = new OTWSRequest();

        request.getResponse(
            OTWSBusinessAppointmentService.API,
            "bookItForMeRequest",
            'POST',
            createRequest.getData(),
            (rawResponse: any) => {
                let response = new OTWSResponse(rawResponse);
                callback(response);
            }
        )
    }

    public createBookABusinessForMeRequest(createRequest: OTWSBookABusinessForMeRequestRequest, callback: (response: OTWSResponse) => void): void {

        let request = new OTWSRequest();

        request.getResponse(
            OTWSBusinessAppointmentService.API,
            "bookABusinessForMeRequest",
            'POST',
            createRequest.getData(),
            (rawResponse: any) => {
                let response = new OTWSResponse(rawResponse);
                callback(response);
            }
        )
    }
}