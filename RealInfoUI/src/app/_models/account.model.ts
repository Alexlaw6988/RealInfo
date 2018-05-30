export class loginModel
{
    UserName : string;
    Password:string;
    constructor(){
        this.UserName ="";
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