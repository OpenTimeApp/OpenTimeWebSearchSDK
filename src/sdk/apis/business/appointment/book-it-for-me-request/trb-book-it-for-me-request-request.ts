import {TRBAvailableTime} from "../../../trb-available-time";
import {SerializerHelper} from "../../../../libraries/serializer.helper";
import {TRBAPIRequest} from "../../../../intefaces/trb-api-request.interface";
import {CustomField} from "../../../trb-custom-field";

export class TRBBookItForMeRequestRequest implements TRBAPIRequest {

    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _availableTimes: TRBAvailableTime[];
    private _customFields: CustomField[];
    private _service: string;
    private _city: string;
    private _notes: string;
    private _timeZoneLongName: string;

    constructor(firstName: string,
                lastName: string,
                email: string,
                service: string,
                city: string,
                timeZoneLongName: string,
                availableTimes: TRBAvailableTime[]) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._availableTimes = availableTimes;
        this._customFields = [];
        this._service = service;
        this._city = city;
        this._timeZoneLongName = timeZoneLongName;
    }

    public setNotes(notes: string) {
        this._notes = notes;
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

    private _getService() {
        return this._service;
    }

    private _getCity() {
        return this._city;
    }

    private _getAvailableTimes(): TRBAvailableTime[] {
        return this._availableTimes;
    }

    private _getNotes() {
        return this._notes;
    }

    private _getTimeZoneLongName() {
        return this._timeZoneLongName;
    }

    getData(): any {
        return {
            first_name: this._getFirstName(),
            last_name: this._getFirstName(),
            email: this._getEmail(),
            service: this._getService(),
            city: this._getCity(),
            notes: this._getNotes(),
            time_zone_long_name: this._getTimeZoneLongName(),
            available_times: SerializerHelper.serializeArray(this._getAvailableTimes()),
            custom_fields: SerializerHelper.serializeArray(this._getCustomFields())
        }
    }
}