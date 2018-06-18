using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using RealInfo.App.Constants;

namespace RealInfo.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("OracleDbContext", throwIfV1Schema: false)
        {
            Database.SetInitializer<ApplicationDbContext>(null);
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); // MUST go first.

            modelBuilder.HasDefaultSchema("TP_ACC_ADMIN"); // Use uppercase!

            modelBuilder.Entity<ApplicationUser>().ToTable("AspNetUsers".ToUpper());            
            modelBuilder.Entity<IdentityRole>().ToTable("AspNetRoles".ToUpper());
            modelBuilder.Entity<IdentityUserRole>().ToTable("AspNetUserRoles".ToUpper());
            modelBuilder.Entity<IdentityUserClaim>().ToTable("AspNetUserClaims".ToUpper());
            modelBuilder.Entity<IdentityUserLogin>().ToTable("AspNetUserLogins".ToUpper());
            modelBuilder.Entity<UserProfileModel>().ToTable("USER_PROFILE".ToUpper());
            modelBuilder.Properties().Configure(c => c.HasColumnName(c.ClrPropertyInfo.Name.ToUpper()));

        }
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}