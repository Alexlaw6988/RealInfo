using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace RealInfo.Models
{
    // Models used as parameters to AccountController actions.

    public class AddExternalLoginBindingModel
    {
        [Required]
        [Display(Name = "External access token")]
        public string ExternalAccessToken { get; set; }
    }

    public class ChangePasswordBindingModel
    {
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Current password")]
        public string OldPassword { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "New password")]
        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm new password")]
        [Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }

    public class RegisterBindingModel
    {
        

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        public UserProfileModel UserProfile { get; set; }
    }

    public class UserProfileModel
    {
       [Key]
        public string USERID { get; set; }

        [Required]
        public string USERNAME { get; set; }

        [Required]
        public string EMAIL { get; set; }

        [Required]
        public string FIRSTNAME { get; set; }

        [Required]
        public string LASTNAME { get; set; }

        [Required]
        public string COMPANYNAME { get; set; }

        [Required]
        public string ADDRESS { get; set; }

        [Required]
        public string CITY { get; set; }

        [Required]
        public string STATE { get; set; }

        [Required]
        public string ZIP { get; set; }

        [Required]
        public string CONTACTNO { get; set; }

        [Required]
        public string ACCOUNTTYPE { get; set; }

        
        public string CONTACTMETHOD { get; set; }

        
        public string ALREADYMEMBER { get; set; }

        
        public string PROMOCODE { get; set; }

        
        public string BILLING_STATUS { get; set; }

       
        public DateTime INSERT_DATE { get; set; }

        
        public DateTime UPDATE_DATE { get; set; }



    }


    public class RegisterExternalBindingModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }

    public class RemoveLoginBindingModel
    {
        [Required]
        [Display(Name = "Login provider")]
        public string LoginProvider { get; set; }

        [Required]
        [Display(Name = "Provider key")]
        public string ProviderKey { get; set; }
    }

    public class SetPasswordBindingModel
    {
        [Required]
        [Display(Name = "User Id")]
        public string UserId { get; set; }

        [Required]
        [Display(Name = "code")]
        public string code { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "New password")]
        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm new password")]
        [Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }
}
