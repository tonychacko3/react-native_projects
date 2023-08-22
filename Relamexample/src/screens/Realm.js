import Realm from "realm";


class Profile extends Realm.Object {}
  Profile.schema = {
    name: 'Profile',
    primaryKey: 'UId',
    properties: {
      UId:'int',
      name:'string',
      phoneNumber:'int',

    },
    
    
  };

export default new Realm({schema:[Profile],schemaVersion:4})