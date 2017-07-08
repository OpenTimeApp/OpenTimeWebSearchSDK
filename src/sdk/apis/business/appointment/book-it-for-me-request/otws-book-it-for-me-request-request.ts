import {OTWSAvailableTime} from "../../../otws-available-time";
export class OTWSBookItForMeRequestRequest implements OTWSAPIRequest {

    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _availableTimes: OTWSAvailableTime[];
    private _customFields: CustomField[];

    constructor(firstName: string, lastName: string, email: string, availableTimes: OTWSAvailableTime[]) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._availableTimes = availableTimes;
        this._customFields = [];
    }

    set customFields(value: CustomField[]) {
        this._customFields = value;
    }

    private _getCustomFields(): CustomField[] {
        return this._customFields;
    }

    private _getFirstName(): string {
        return this._firstName;
    }

    private _getLastName(): string {
        return this._lastName;
    }

    private _getEmail(): string {
        return this._email;
    }

    private _getAvailableTimes(): OTWSAvailableTime[] {
        return this._availableTimes;
    }

    getData() : any {
        return {
            first_name: this._getFirstName(),
            last_name: this._getFirstName(),
            email: this._getEmail(),
            available_times: SerializerHelper.serializeArray(this._getAvailableTimes()),
            custom_fields: SerializerHelper.serializeArray(this._getCustomFields())
        }
    }
}