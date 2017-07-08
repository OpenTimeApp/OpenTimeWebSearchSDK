import {OTWSAvailableTime} from "../../../otws-available-time";
import {OTWSBookItForMeRequestRequest} from "../book-it-for-me-request/otws-book-it-for-me-request-request";
export class OTWSBookABusinessForMeRequestRequest extends OTWSBookItForMeRequestRequest implements OTWSAPIRequest {


    private _businessID : number;

    constructor(firstName: string, lastName: string, email: string, availableTimes: OTWSAvailableTime[], businessID: number) {
        super(firstName, lastName, email, availableTimes);

        this._businessID = businessID;
    }

    private _getBusinessID(){
        return this._businessID;
    }

    getData(): any {
        let data = super.getData();
        data.business_id = this._getBusinessID();
        return data;
    }
}