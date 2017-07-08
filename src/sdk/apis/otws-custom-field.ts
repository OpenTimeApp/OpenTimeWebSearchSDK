class CustomField implements OTWSSerializable {

    private _id: string;
    private _value: string;

    constructor(id: string) {
        this._id = id;
        this._value = "";
    }

    getId(): string {
        return this._id;
    }

    getValue(): string {
        return this._value;
    }

    setValue(value: string) {
        this._value = value;
    }

    serialize(): Object {
        return {
            id: this.getId(),
            value: this.getValue()
        }
    }
}
