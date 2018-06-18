using RealInfoBO;
using RealInfoViewModel.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealInfoDAL.Manager
{
    static class PropertyManager
    {
        private static RealInfoEntities db;

        public static async Task<List<PROP_MASTER>> GetAllProperty(string FistName, string LastName, string Schema, string condition)
        {
            List<PROP_MASTER> list = null;
            string query = String.Format("Select * from IL_{0}.{0}_PROP_MASTER A ", Schema);

            string where = " WHERE 1=1 ";

            switch (condition)
            {

                case "s,":
                case ",s":
                    if (String.IsNullOrEmpty(FistName))
                    {
                        where += String.Format("AND (A.LAST_NAME_1 like '{0}%' OR A.LAST_NAME_2 like '{0}%') ", LastName);
                    }
                    else
                    {
                        where += String.Format("AND (A.FIRST_NAME_1 like '{0}%' OR A.FIRST_NAME_2 like '{0}%') ", FistName);
                    }

                    break;
                case ",e":
                case "e,":
                    if (String.IsNullOrEmpty(FistName))
                    {
                        where += String.Format("AND (A.LAST_NAME_1 like '{0}' OR A.LAST_NAME_2 like '{0}') ", LastName);
                    }
                    else
                    {
                        where += String.Format("AND (A.FIRST_NAME_1 like '{0}' OR A.FIRST_NAME_2 like '{0}') ", FistName);
                    }
                    break;
                case "s,e":
                    where += String.Format("AND (A.FIRST_NAME_1 like '{0}%' OR A.FIRST_NAME_2 like '{0}%') AND (A.LAST_NAME_1 like '{0}' OR A.LAST_NAME_2 like '{0}')", FistName,LastName);
                    break;
                case "e,s":
                    where += String.Format("AND (A.FIRST_NAME_1 like '{0}' OR A.FIRST_NAME_2 like '{0}') AND (A.LAST_NAME_1 like '{0}%' OR A.LAST_NAME_2 like '{0}%')", FistName, LastName);
                    break;
                case "s,s":
                    where += String.Format("AND (A.FIRST_NAME_1 like '{0}%' OR A.FIRST_NAME_2 like '{0}%') AND (A.LAST_NAME_1 like '{0}%' OR A.LAST_NAME_2 like '{0}%')", FistName, LastName);
                    break;
                default:
                    where += String.Format("AND (A.FIRST_NAME_1 like '{0}' OR A.FIRST_NAME_2 like '{0}') AND (A.LAST_NAME_1 like '{0}' OR A.LAST_NAME_2 like '{0}')", FistName, LastName);
                    break;
            }

            using (db = new RealInfoEntities())
            {

                list = await Task.Run(() => db.Database.SqlQuery(typeof(PROP_MASTER), query + where).Cast<PROP_MASTER>().ToList());

            }
            return list;
        }

        public static async Task<List<PROP_MASTER>> GetAllPropertyByTax(string TaxNumber, string Schema)
        {
            List<PROP_MASTER> list = null;

            string query = String.Format("Select * from IL_{0}.{0}_PROP_MASTER A WHERE A.TAX_NBR like '{1}%'", Schema, TaxNumber);


            using (db = new RealInfoEntities())
            {

                list = await Task.Run(() => db.Database.SqlQuery(typeof(PROP_MASTER),query).Cast<PROP_MASTER>().ToList());        


            }
            return list;
        }


        public static async Task<List<PROP_MASTER>> GetAllPropertyByAddress(string StreetNum, string StreetName, string city, string zip, string Schema)
        {
            List<PROP_MASTER> list = null;

            string query = String.Format("Select * from IL_{0}.{0}_PROP_MASTER A ", Schema);

            string where = " WHERE 1=1 ";
            if (!String.IsNullOrEmpty(StreetNum))
            {
                where += String.Format("AND (A.STREET_NBR like '%{0}%')", StreetNum);
            }
            if (!String.IsNullOrEmpty(StreetName))
            {
                where += String.Format("AND (A.STREET_NAME like '%{0}%')", StreetName);
            }
            if (!String.IsNullOrEmpty(city))
            {
                where += String.Format("AND (A.CITY like '%{0}%')", city);
            }
            if (!String.IsNullOrEmpty(zip))
            {
                where += String.Format("AND (A.ZIP_CODE like '%{0}%')", zip);
            }


            using (db = new RealInfoEntities())
            {

                
                list = await Task.Run(() => db.Database.SqlQuery(typeof(PROP_MASTER), query+where).Cast<PROP_MASTER>().ToList());


            }
            return list;
        }

    }
}
