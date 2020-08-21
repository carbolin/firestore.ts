import { Country } from './Country';
import { Province } from './Province';
import { Places } from './places';


export interface ProvinceDetails extends Province {

    alpha2Code: string;
    country: Country;
    places: Places;
    zipcodes: string[];
}
