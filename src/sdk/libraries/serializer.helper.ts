class SerializerHelper {

    static serializeArray(list: OTWSSerializable[]): Object[] {

        let serializedList: Object[] = [];

        for (let listItem of list) {
            serializedList.push(listItem.serialize())
        }

        return serializedList;
    }
}