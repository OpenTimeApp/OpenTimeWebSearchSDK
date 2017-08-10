import {TRBBookItForMeRequestRequest} from "../book-it-for-me-request/trb-book-it-for-me-request-request";
import {TRBAPIRequest} from "../../../../intefaces/trb-api-request.interface";

export class TRBBookABusinessForMeRequestRequest extends TRBBookItForMeRequestRequest implements TRBAPIRequest {

    private _businessID: number;
    private _placesID: string;
    private _placesURL: string;

    private _getBusinessID() {
        return this._businessID;
    }

    private _getPlacesID() {
        return this._placesID;
    }

    private _getPlacesURL() {
        return this._placesURL;
    }

    setPlacesURL(placesURL: string) {
        this._placesURL = placesURL;
    }

    setPlacesID(placesID: string) {
        this._placesID = placesID;
    }

    setBusinessID(businessID: number) {
        this._businessID = businessID;
    }

    getData(): any {
        let data = super.getData();
        data.business_id = this._getBusinessID();
        data.google_data = {
            url : this._getPlacesURL(),
            id: this._getPlacesID()
        };
        return data;
    }
}
