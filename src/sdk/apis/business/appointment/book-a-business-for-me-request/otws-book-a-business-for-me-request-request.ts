import {OTWSBookItForMeRequestRequest} from "../book-it-for-me-request/otws-book-it-for-me-request-request";

export class OTWSBookABusinessForMeRequestRequest extends OTWSBookItForMeRequestRequest implements OTWSAPIRequest {

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
        data.google_data = [];
        data.google_data["url"] = this._getPlacesURL();
        data.google_data["id"] = this._getPlacesID();
        return data;
    }
}
