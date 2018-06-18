import { inherits } from "util";

export class searchBase{
    schema: string;
    constructor() {       
        this.schema ="";
    }
}

export class PropertySearchOwnerName extends searchBase {
    FirstName: string;
    FirstNameCondition: string;
    LastName: string;
    LastNameCondition: string;
    

    constructor() {
        super();
        this.FirstName = "";
        this.FirstNameCondition = "";
        this.LastName = "";
        this.LastNameCondition = "";
       
    }
}

export class PropertySearchTax extends searchBase{
    TaxNumber: string;

    constructor() {
        super();
        this.TaxNumber = "";
    }
}

export class PropertySearchAddress extends searchBase {
    StreetNumber: string;

    StreetName: string;

    City: string;

    ZipCode: string;

    constructor() {
        super();
        
        this.StreetNumber = "";

        this.StreetName = "";
        this.City = "";
        this.ZipCode = "";
    }

}