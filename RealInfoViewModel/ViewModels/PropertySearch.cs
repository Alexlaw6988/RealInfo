using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealInfoViewModel.ViewModels
{
    public class PropertySearch{

        public string schema { get; set; }
    }
    public class PropertySearchOwnerName : PropertySearch
    {
        public string FirstName { get; set; }
        public string FirstNameCondition { get; set; }
        public string LastName { get; set; }
        public string LastNameCondition { get; set; }
      
    }

    public class PropertySearchTax : PropertySearch
    {
        public string TaxNumber { get; set; }
    }

    public class PropertySearchAddress : PropertySearch
    {
        public string StreetNumber { get; set; }

        public string StreetName { get; set; }

        public string City { get; set; }

        public string ZipCode { get; set; }


    }
}
