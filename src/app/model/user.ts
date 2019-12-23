export class User {
    id: number;
    name: string;
    lastname: string;
    username: string;
    pws: string;
    countryId: number;

    constructor(
        name?: string,
        lastname?: string,
        username?: string,
        pws?: string,
        countryId?: number
    ){
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.pws = pws;
        this.countryId = countryId;
    }
}
