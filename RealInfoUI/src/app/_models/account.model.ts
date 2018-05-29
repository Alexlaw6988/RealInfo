export class loginModel
{
    Email : string;
    Password:string;
    constructor(){
        this.Email ="";
        this.Password="";
       
    }
}

export class registerModel 
{
    Email : string;
    Password:string;
    ConfirmPassword: string;

    constructor(){
        this.Email ="";
        this.Password="";
        this.ConfirmPassword="";
    }
}

export class changePasswordModel 
{
    OldPassord : string;
    NewPassword:string;
    ConfirmNewPassword: string;

    constructor(){
        this.OldPassord ="";
        this.NewPassword="";
        this.ConfirmNewPassword="";
    }
}