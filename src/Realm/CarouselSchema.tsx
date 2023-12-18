import {BSON} from 'realm';

export class Profili extends Realm.Object<Profili> {
  _id!: BSON.ObjectId;
  emer!: string;
  mbiemer!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Profili',
    primaryKey: '_id',
    properties: {
      // This allows us to automatically generate a unique _id for each Item
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      // All todo items will default to incomplete
      emer: 'string',
      mbiemer: 'string',
    },
  };
}
