import "../intefaces/trb-serializable.inteface";

export class TRBAvailableTime implements TRBSerializable {

    private _start: number;
    private _end: number;

    constructor() {

    }

    getStart(): number {
        return this._start;
    }

    setStart(value: number) {
        this._start = value;
    }

    getEnd(): number {
        return this._end;
    }

    setEnd(value: number) {
        this._end = value;
    }

    serialize(): Object {
        return {
            start: this.getStart(),
            end: this.getEnd()
        };
    }
}
