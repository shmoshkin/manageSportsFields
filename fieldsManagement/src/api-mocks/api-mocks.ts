import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryService implements InMemoryDbService {
  // uncomment this function to force an error
  // protected get(interceptorArgs: HttpMethodInterceptorArgs) {
  //   let resp = createErrorResponse(500, 'this is a forced error from the in-memory api');
  //   return createObservableResponse(resp);
  // }

  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    let fields = [
    {
        "id": 1,
        "name": "field-1",
        "location": "Rabin",
        "type": "soccer",
        "isAvailable": true,
        "description": 'Very good soccer field in a middle of a quite neighborhood'
    },
    {
        "id": 2,
        "name": "field-2",
        "location": "Rabin",
        "type": "soccer",
        "isAvailable": true
    },
    {
        "id": 3,
        "name": "field-1",
        "location": "Lapid",
        "type": "basketball",
        "isAvailable": true
    },
    {
        "id": 4,
        "name": "field-1",
        "location": "Sportek",
        "type": "soccer",
        "isAvailable": true,
        "description": 'The A Team project'
    },
    {
        "id": 5,
        "name": "studium",
        "location": "Bloomfield",
        "type": "soccer",
        "isAvailable": true
    },
    {
        "id": 6,
        "name": "field-2",
        "location": "Sportek",
        "type": "basketball",
        "isAvailable": true
    }
    ];

    return { fields };
  }
}