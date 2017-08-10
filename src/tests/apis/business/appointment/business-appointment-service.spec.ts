import { TRBBusinessAppointmentService } from '../../../../sdk/apis/business/appointment/trb-business-appointment-service';
import { TRBBookItForMeRequestRequest } from '../../../../sdk/apis/business/appointment/book-it-for-me-request/trb-book-it-for-me-request-request'
import {TRBAvailableTime} from "../../../../sdk/apis/trb-available-time";
import {TRBResponse} from "../../../../sdk/api/trb-response";
import {TRBBookABusinessForMeRequestRequest} from "../../../../sdk/apis/business/appointment/book-a-business-for-me-request/trb-book-a-business-for-me-request-request";
import {TestHelper} from "../../../trb-test-helper";

describe("Business Appointment Service", () => {

    let service: TRBBusinessAppointmentService;

    beforeAll((done) => {
        TestHelper.beforeAll();
        // TestHelper.restoreData(['make_groups'], (response) => {
        //     if (!response.success) {
        //         fail(response.message);
        //     }
        //     done();
        // });
        done();
    });

    beforeEach(() => {
        service = new TRBBusinessAppointmentService();
    });

    describe('Method: createBookItForMeRequest ', () => {
        it('should request an appointment', (done) => {

            let fakeAvailableTime = new TRBAvailableTime();

            fakeAvailableTime.setStart(1499478764);
            fakeAvailableTime.setEnd(1499478764 + 3600 * 3);

            let request = new TRBBookItForMeRequestRequest(
                "fakeFirstName",
                "fakeLastName",
                "fakeEmail@email.com",
                "dentist",
                "Dallas",
                "America/Chicago",
                [fakeAvailableTime]
            );

            request.setNotes("I am the shindit");

            service.createBookItForMeRequest(request,(response: TRBResponse) => {

                expect(response.getSuccess()).toBe(true, response.getErrorMessages());

                done();
            });
        })
    });

    describe('Method: createBookABusinessForMeRequest ', () => {
        it('should request an appointment with a business', (done) => {

            let fakeAvailableTime = new TRBAvailableTime();

            fakeAvailableTime.setStart(1499478764);
            fakeAvailableTime.setEnd(1499478764 + 3600 * 3);

            let request = new TRBBookABusinessForMeRequestRequest(
                "fakeFirstName",
                "fakeLastName",
                "fakeEmail@email.com",
                "dentist",
                "Dallas",
                "America/Chicago",
                [fakeAvailableTime]
            );

            request.setNotes("Where in the world is carmen sandiego");
            request.setPlacesURL("http://somegreatplace.com");
            request.setPlacesID("alskdflaksjdflakjsdlfkjsdlkj");
            request.setBusinessID(1);

            service.createBookABusinessForMeRequest(request,(response: TRBResponse) => {

                expect(response.getSuccess()).toBe(true, response.getErrorMessages());

                done();
            });
        })
    });

});