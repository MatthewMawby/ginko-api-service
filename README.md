## Ginko API Data Service
This package is to serve as a data service for any node
based application interacting with the Ginko web API.
This package abstracts the data retrieval implementation
for all endpoints into easy to use functions. Functions
exported by this module return promises which resolve
to JSON.

### Installation
```bash
npm install --save https://github.com/MatthewMawby/ginko-api-service
```

### Usage
```javascript
import ginko from "ginko-api-service"

ginko.setDomain(DOMAIN_STRING)

ginko.getPerson({last_name: "fixture"}).then((data) => {
  // TODO: do stuff with data
})
```

### Interface
```javascript
/*
 * @Params:
 *    id: int
 *    first_name: string
 *    middle_name: string
 *    last_name: string
 *    date_of_birth: date
 * @Returns:
 *    [
 *       {
 *          id: int,
 *          user: int,
 *          first_name: 'Edmund Price',
 *          middle_name: string (optional),
 *          last_name: 'fixture',
 *          date_of_birth: date (optional),
 *          createdAt: date,
 *          updatedAt: date
 *        }
 *     ]
 */
ginko.getPerson()

/*
 * @Params:
 *    id: int
 *    classification: string
 *    related_to: int
 *    related_from: int
 * @Returns:
 *    [
 *      {
 *         id: int,
 *         related_from: int,
 *         classification: string,
 *         createdAt: date,
 *         updatedAt: date
 *       }
 *     ]
 */
ginko.getRelation()

/*
 * @Params:
 *    id: int
 *    email: string
 * @Returns:
 *    [
 *      {
 *         id: int,
 *         email: string,
 *         createdAt: date,
 *         updatedAt: date
 *       }
 *     ]
 */
ginko.getUser()

/*
 * @Params:
 *    id: int
 *    file_extension: string
 *    image_string: int
 *    metadata: int
 *    owner: int
 * @Returns:
 *    [
 *      {
 *         id: int,
 *         owner: int,
 *         description: string (optional),
 *         file_extension: string,
 *         image_string: string,
 *         metadata: json (optional)
 *         createdAt: date,
 *         updatedAt: date
 *       }
 *     ]
 */
ginko.getPicture()

/*
 * @Params:
 *    id: int
 *    person: int
 *    picture: int
 * @Returns:
 *    [
 *      {
 *         id: int,
 *         person: int,
 *         picture: string,
 *         createdAt: date,
 *         updatedAt: date
 *       }
 *     ]
 */
ginko.getTag()
```

### Development  

```bash
git clone git@github.com:MatthewMawby/ginko-api-service.git
cd ginko-api-service
npm install
```

### Testing
```bash
mocha tests
```
