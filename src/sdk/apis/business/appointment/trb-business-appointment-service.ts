import {TRBResponse} from "../../../api/trb-response";
import {TRBRequest} from "../../../api/trb-request";
import {TRBBookItForMeRequestRequest} from "./book-it-for-me-request/trb-book-it-for-me-request-request";
import {TRBBookABusinessForMeRequestRequest} from "./book-a-business-for-me-request/trb-book-a-business-for-me-request-request";

export class TRBBusinessAppointmentService {

    private static readonly API = "business/booking";

    public createBookItForMeRequest(createRequest: TRBBookItForMeRequestRequest, callback: (response: TRBResponse) => void): void {

        let request = new TRBRequest();

        request.getResponse(
            TRBBusinessAppointmentService.API,
            "bookItForMeRequest",
            'POST',
            createRequest.getData(),
            (rawResponse: any) => {
                let response = new TRBResponse(rawResponse);
                callback(response);
            }
        )
    }

    public createBookABusinessForMeRequest(createRequest: TRBBookABusinessForMeRequestRequest, callback: (response: TRBResponse) => void): void {

        let request = new TRBRequest();

        request.getResponse(
            TRBBusinessAppointmentService.API,
            "bookABusinessForMeRequest",
            'POST',
            createRequest.getData(),
            (rawResponse: any) => {
                let response = new TRBResponse(rawResponse);
                callback(response);
            }
        )
    }
}