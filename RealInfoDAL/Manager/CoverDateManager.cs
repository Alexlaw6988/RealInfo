using RealInfoBO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealInfoDAL.Manager
{
    static class CoverDateManager
    {
        private static RealInfoEntities db;
            
        public static async Task< List<COVER_DATE> > GetAll()
        {
            using (db = new RealInfoEntities())
            {
                return await Task.Run(()=>db.COVER_DATE.Where(a => (a.DATE_THRU != null)).ToList());
            }
            
        }
    }
}
