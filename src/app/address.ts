export class Address {
    zipCode: string;
    street: string;
    number: number;
    complement: string;
    district: string;
    state: string;
    city: string;

    loadDataGotByZipCode(address: any) {
        this.zipCode = address.cep;
        this.street = address.logradouro;
        this.district = address.bairro;
        this.city = address.localidade;
        this.state = address.uf;
    }

}
