export class loginModel {
    UserName: string;
    Password: string;
    constructor() {
        this.UserName = "";
        this.Password = "";

    }
}

export class registerModel {
    UserProfile: userProfileModel;
    Password: string;
    ConfirmPassword: string;

    constructor() {
        this.UserProfile = new userProfileModel();
        this.Password = "";
        this.ConfirmPassword = "";
    }
}

export class userProfileModel {
    USERID: string;
    USERNAME: string;
    EMAIL: string;
    FIRSTNAME: string;
    LASTNAME: string;
    COMPANYNAME: string;
    ADDRESS: string;
    CITY: string;
    STATE: string;
    ZIP: string;
    CONTACTNO: string;
    ACCOUNTTYPE: string;
    CONTACTMETHOD: string;
    ALREADYMEMBER: string;
    PROMOCODE: string;
    BILLING_STATUS: string;


    constructor() {
        this.USERID = "";
        this.USERNAME = "";
        this.EMAIL = "";
        this.FIRSTNAME = "";
        this.LASTNAME = "";
        this.COMPANYNAME = "";
        this.ADDRESS = "";
        this.CITY = "";
        this.STATE = "";
        this.ZIP = "";
        this.CONTACTNO = "";
        this.ACCOUNTTYPE = "";
        this.CONTACTMETHOD = "";
        this.ALREADYMEMBER = "";
        this.PROMOCODE = "";
        this.BILLING_STATUS = "";

    }
}

export class changePasswordModel {
    OldPassord: string;
    NewPassword: string;
    ConfirmNewPassword: string;

    constructor() {
        this.OldPassord = "";
        this.NewPassword = "";
        this.ConfirmNewPassword = "";
    }
}