export interface UserInterface{
  id: Number;
  name: string;
  username: string;
  email: string;
  address: Adress;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Adress {
  "street": string;
  "suite": string;
  "city": string;
  "zipcode": string;
  geo: Geo;
}

interface Geo {
  lat: Number;
  lng: Number;
}
