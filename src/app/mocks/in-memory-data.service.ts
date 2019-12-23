import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{

  createDb(){//debera de retornar un objeto
    const user = [
      {
        id: 1, name: 'Lorena', lastname: 'Collio', username: 'Mono',
        pws: '12345', pais: 1
      },
      {
        id: 1, name: 'Oliver', lastname: 'Pulento', username: 'Oliver',
        pws: '12345', pais: 2
      }
      ];

    const country = [
      {
        id: 1, name: 'Chile',
       },

       {
        id: 2, name: 'Canada',
       }
    ];

    return {user, country};
  }
}
