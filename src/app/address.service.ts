import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private viaCepUrl: string = 'https://viacep.com.br/ws/';

  constructor(private httpClient: HttpClient) { }

  getAddressByZipCode(zipCode: string) {
    return this.httpClient.get(`${this.viaCepUrl}/${zipCode}/json`);
  }

}
