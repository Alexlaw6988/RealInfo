using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RealInfoBO;
using RealInfoViewModel.ViewModels;

namespace RealInfoUtil.Extensions
{
    public static class CoverDateExtensions
    {
        public static COVER_DATE ConvertToCOVER_DATE(this CoverDate model)
        {
            return new COVER_DATE()
            {
                COVER_DATE_ID = model.CoverDateId,
                COUNTY = model.County,
                DATE_THRU = model.DateThru,
                FIPS = model.Fips,
                FROM_DATE = model.FromDate,
                OLD_DATE = model.OldDate
            };
        }


        public static CoverDate ConvertToCoverDate(this COVER_DATE model)
        {
            return new CoverDate()
            {
                CoverDateId = Convert.ToInt32(model.COVER_DATE_ID),
                County = model.COUNTY,
                DateThru = Convert.ToDateTime(model.DATE_THRU),
                Fips = Convert.ToInt32(model.FIPS),
                FromDate = Convert.ToDateTime(model.FROM_DATE),
                OldDate = Convert.ToDateTime(model.OLD_DATE)
            };
        }
    }
}
