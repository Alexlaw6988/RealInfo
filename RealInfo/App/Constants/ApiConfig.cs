using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace RealInfo.App.Constants
{
    public static class ApiConfig
    {
        public static readonly string ConnectionDB = ConfigurationManager.AppSettings["connctionDB"].ToUpper();
        public static readonly string MemberShipDB = ConfigurationManager.AppSettings["membershipDB"].ToUpper();
    }
}