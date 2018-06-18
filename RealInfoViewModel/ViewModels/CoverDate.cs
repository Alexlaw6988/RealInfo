using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealInfoViewModel.ViewModels
{
    public class CoverDate
    {
        public int CoverDateId { get; set; }
        public string County { get; set; }
        public DateTime DateThru { get; set; }
        public int Fips { get; set; }
        public DateTime OldDate { get; set; }
        public DateTime FromDate { get; set; }
    }
}
