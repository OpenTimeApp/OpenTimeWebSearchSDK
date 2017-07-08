import { OTWSBusinessAppointmentService } from '../../../../sdk/apis/business/appointment/business-appointment-service';
import { OTWSBookItForMeRequestRequest } from '../../../../sdk/apis/business/appointment/book-it-for-me-request/otws-book-it-for-me-request-request'
import {OTWSAvailableTime} from "../../../../sdk/apis/otws-available-time";
import {OTWSResponse} from "../../../../sdk/api/otws-response";
import {OTWSBookABusinessForMeRequestRequest} from "../../../../sdk/apis/business/appointment/book-a-business-for-me-request/otws-book-a-business-for-me-request-request";

describe("Business Appointment Service", () => {

    let service: OTWSBusinessAppointmentService;

    beforeEach(() => {
        service = new OTWSBusinessAppointmentService();
    });

    describe('Method: createBookItForMeRequest ', () => {
        it('should request an appointment', (done) => {

            let fakeAvailableTime = new OTWSAvailableTime();

            fakeAvailableTime.setStart(1499478764);
            fakeAvailableTime.setEnd(1499478764 + 3600 * 3);

            let request = new OTWSBookItForMeRequestRequest(
                "fakeFirstName",
                "fakeLastName",
                "fakeEmail@email.com",
                [fakeAvailableTime]
            );

            service.createBookItForMeRequest(request,(response: OTWSResponse) => {

                expect(response.getSuccess()).toBe(true, response.getErrorMessages());

                done();
            });
        })
    });

    describe('Method: createBookABusinessForMeRequest ', () => {
        it('should request an appointment with a business', (done) => {

            let fakeAvailableTime = new OTWSAvailableTime();

            fakeAvailableTime.setStart(1499478764);
            fakeAvailableTime.setEnd(1499478764 + 3600 * 3);

            let request = new OTWSBookABusinessForMeRequestRequest(
                "fakeFirstName",
                "fakeLastName",
                "fakeEmail@email.com",
                [fakeAvailableTime],
                99
            );

            service.createBookABusinessForMeRequest(request,(response: OTWSResponse) => {

                expect(response.getSuccess()).toBe(true, response.getErrorMessages());

                done();
            });
        })
    });

});