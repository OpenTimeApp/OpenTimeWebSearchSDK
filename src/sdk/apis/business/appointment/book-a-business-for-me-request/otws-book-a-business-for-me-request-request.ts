import {OTWSBookItForMeRequestRequest} from "../book-it-for-me-request/otws-book-it-for-me-request-request";
export class OTWSBookABusinessForMeRequestRequest extends OTWSBookItForMeRequestRequest implements OTWSAPIRequest {


    private _businessID : number;
    private _placesID: string;

    private _getBusinessID(){
        return this._businessID;
    }

    private _getPlacesID(){
        return this._placesID;
    }

    setPlacesID(placesID: string){
        this._placesID = placesID;
    }

    setBusinessID(businessID: number){
        this._businessID = businessID;
    }

    getData(): any {
        let data = super.getData();
        data.business_id = this._getBusinessID();
        data.places_id = this._getPlacesID();
        return data;
    }
}
