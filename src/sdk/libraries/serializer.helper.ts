export class SerializerHelper {

    static serializeArray(list: TRBSerializable[]): Object[] {

        let serializedList: Object[] = [];

        for (let listItem of list) {
            serializedList.push(listItem.serialize())
        }

        return serializedList;
    }
}