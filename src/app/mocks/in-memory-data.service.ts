import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{

  createDb(){//debera de retornar un objeto
    const user = [
      {
        id: 1, name: 'Lorena', lastname: 'Collio', username: 'Mono',
        pws: '12345', countryId: 1
      },
      {
        id: 1, name: 'Oliver', lastname: 'Pulento', username: 'Oliver',
        pws: '12345', countryId: 2
      }
      ];

    const country = [
      {
        id: 1, name: 'Santiago'
       },
       {
        id: 2, name: 'Concepcion'
       },
       {
        id: 3, name: 'La serena'
       },
       {
        id: 4, name: 'Temuco'
       },
       {
        id: 5, name: 'Puerto montt'
       },
       {
        id: 6, name: 'Iquique'
       },
       {
        id: 7, name: 'Antofagasta'
       },
       {
        id: 8, name: 'Punta Arenas'
       },
       {
        id: 9, name: 'Rancagua'
       },
       {
        id: 10, name: 'Talca'
       },
       {
        id: 8, name: 'Viña del mar'
       }
    ];

    return {user, country};
  }
}
