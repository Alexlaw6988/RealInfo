﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealInfoViewModel.ViewModels
{
    public partial class PROP_MASTER
    {
        public long TAX_NBR { get; set; }
        public Nullable<int> TAX_TWP { get; set; }
        public Nullable<int> TAX_SECT { get; set; }
        public Nullable<int> TAX_BLOCK { get; set; }
        public Nullable<int> TAX_LOT { get; set; }
        public Nullable<int> TAX_SEQ { get; set; }
        public string OWNER_NAME { get; set; }
        public string OWNERS_ADDRESS { get; set; }
        public Nullable<long> OWNER_PHONE_NBR { get; set; }
        public Nullable<int> OWNER_PHONE_AREA { get; set; }
        public Nullable<int> OWNER_PHONE_PREFIX { get; set; }
        public string OWNER_TYPE { get; set; }
        public string LAST_NAME_1 { get; set; }
        public string LAST_NAME_2 { get; set; }
        public string LAST_NAME_1_SX { get; set; }
        public string LAST_NAME_2_SX { get; set; }
        public string FIRST_NAME_1 { get; set; }
        public string FIRST_NAME_1_FULL { get; set; }
        public string FIRST_NAME_2 { get; set; }
        public string FIRST_NAME_2_FULL { get; set; }
        public string STREET_NBR { get; set; }
        public Nullable<long> STREET_NBR_NUM { get; set; }
        public string STREET_DIR { get; set; }
        public string STREET_NAME { get; set; }
        public string STREET_SUFFIX { get; set; }
        public string APT_UNIT_NBR { get; set; }
        public string CITY { get; set; }
        public string STATE { get; set; }
        public Nullable<long> ZIP_CODE { get; set; }
        public Nullable<int> ZIP_CODE_5 { get; set; }
        public string CARRIER_ROUTE { get; set; }
        public Nullable<int> CENSUS_PLACE { get; set; }
        public Nullable<int> CENSUS_TRACT { get; set; }
        public Nullable<int> CENSUS_BLOCK { get; set; }
        public Nullable<int> ELEM_SCHOOL_DIST { get; set; }
        public Nullable<int> MIDDLE_SCHOOL_DIST { get; set; }
        public Nullable<int> SECONDARY_SCHOOL_DIST { get; set; }
        public Nullable<int> UNIFIED_SCHOOL_DIST { get; set; }
        public Nullable<int> CONG_DIST_103 { get; set; }
        public Nullable<int> CITY_WARD { get; set; }
        public Nullable<int> STATE_SENATE { get; set; }
        public Nullable<int> STATE_HOUSE { get; set; }
        public Nullable<decimal> MORT_TOTAL { get; set; }
        public Nullable<int> MORT_CNT { get; set; }
        public Nullable<decimal> LIEN_TOTAL { get; set; }
        public Nullable<int> LIEN_CNT { get; set; }
        public Nullable<int> NOTICE_CNT { get; set; }
        public Nullable<decimal> JUDGE_TOTAL { get; set; }
        public Nullable<int> JUDGE_CNT { get; set; }
        public Nullable<decimal> LAST_SALE_AMT { get; set; }
        public Nullable<System.DateTime> LAST_SALE_DATE { get; set; }
        public string REMARKS { get; set; }
        public Nullable<System.DateTime> LAST_UPDATE_DATE { get; set; }
        public Nullable<decimal> FIRST_INSTALLMENT_AMT { get; set; }
        public Nullable<decimal> SECOND_INSTALLMENT_AMT { get; set; }
        public Nullable<decimal> LAST_YEAR_TOTAL_TAX { get; set; }
        public Nullable<decimal> CURR_YEAR_TOTAL_TAX { get; set; }
        public Nullable<decimal> ACTUAL_1991_TAX { get; set; }
        public Nullable<decimal> ACTUAL_1992_TAX { get; set; }
        public Nullable<decimal> ACTUAL_1993_TAX { get; set; }
        public Nullable<decimal> ACTUAL_1994_TAX { get; set; }
        public Nullable<decimal> ACTUAL_1995_TAX { get; set; }
        public Nullable<decimal> ACTUAL_1996_TAX { get; set; }
        public string ASSESSEE_FULL_NAME { get; set; }
        public string ASSESSEE_FULL_NAME_SX { get; set; }
        public string ASSESSEE_LAST_NAME { get; set; }
        public string ASSESSEE_LAST_NAME_SX { get; set; }
        public string ASSESSEE_FIRST_NAME_1 { get; set; }
        public string ASSESSEE_FIRST_NAME_1_FULL { get; set; }
        public string ASSESSEE_FIRST_NAME_2 { get; set; }
        public string ASSESSEE_FIRST_NAME_2_FULL { get; set; }
        public string ASSESSEE_STREET_NBR { get; set; }
        public Nullable<long> ASSESSEE_STREET_NBR_NUM { get; set; }
        public string ASSESSEE_STREET_DIR { get; set; }
        public string ASSESSEE_STREET_NAME { get; set; }
        public string ASSESSEE_STREET_SUFFIX { get; set; }
        public string ASSESSEE_CITY { get; set; }
        public string ASSESSEE_STATE { get; set; }
        public Nullable<long> ASSESSEE_ZIP_CODE { get; set; }
        public Nullable<int> ASSESSEE_ZIP_CODE_5 { get; set; }
        public string ASSESSEE_CARRIER_ROUTE { get; set; }
        public string PARCEL_STATUS { get; set; }
        public string TAX_PAYING_AGENT_NBR { get; set; }
        public Nullable<int> NBR_EXEMPT_YEARS { get; set; }
        public Nullable<int> NBR_OPEN_YEARS { get; set; }
        public string OPEN_YEAR_ARRAY { get; set; }
        public Nullable<int> ZONING_CODE { get; set; }
        public Nullable<int> MAJOR_CODE { get; set; }
        public Nullable<int> MINOR_CODE { get; set; }
        public Nullable<int> PROP_USE_CODE { get; set; }
        public string VACANT_CODE { get; set; }
        public Nullable<int> EXTERIOR_WALL_CODE { get; set; }
        public Nullable<int> YEAR_BUILT { get; set; }
        public Nullable<long> SQUARE_FOOTAGE { get; set; }
        public string LEGAL_DESC { get; set; }
        public Nullable<int> SUBDIVISION_CODE { get; set; }
        public Nullable<decimal> ASSESSED_LAND_VALUE { get; set; }
        public Nullable<decimal> LAND_AREA { get; set; }
        public Nullable<decimal> ASSESSED_IMPROVED_VALUE { get; set; }
        public Nullable<decimal> EQUALIZED_VALUE { get; set; }
        public Nullable<decimal> EXEMPTION_VALUE { get; set; }
        public Nullable<decimal> TOTAL_VALUE { get; set; }
        public Nullable<int> TOWNSHIP_VOLUME_NBR { get; set; }
        public Nullable<decimal> LOAN_TO_VALUE { get; set; }
        public Nullable<decimal> JR_TO_PRIMARY { get; set; }
        public Nullable<decimal> MORT_TO_SALES { get; set; }
        public string ADDR_UPDT_FLAG { get; set; }
        public string PHONE_UPDT_FLAG { get; set; }
        public Nullable<System.DateTime> ZIP_UPDT_FLAG { get; set; }
        public string SPECIAL_ASSESS_FLG { get; set; }
        public string DP2 { get; set; }
        public string LATITUDE { get; set; }
        public string LONGITUDE { get; set; }
        public string QAS_FLAG { get; set; }
        public Nullable<decimal> ACTUAL_2001_TAX { get; set; }
        public Nullable<decimal> ACTUAL_2002_TAX { get; set; }
        public Nullable<decimal> ACTUAL_2003_TAX { get; set; }
        public Nullable<decimal> ACTUAL_2004_TAX { get; set; }
        public string RACE { get; set; }
        public Nullable<decimal> ACTUAL_2007_TAX { get; set; }
        public Nullable<decimal> ACTUAL_2008_TAX { get; set; }
        public Nullable<decimal> ACTUAL_2009_TAX { get; set; }
    }
}
