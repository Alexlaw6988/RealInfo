using System.Web;
using System.Web.Optimization;

namespace RealInfo
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Script/Bundles").Include(
               "~/Scripts/inline.*",
               "~/Scripts/polyfills.*",
               "~/Scripts/scripts.*",
               "~/Scripts/vendor.*",
               "~/Scripts/runtime.*",
               "~/Scripts/main.*"));

            bundles.Add(new StyleBundle("~/Content/Styles").Include("~/Scripts/styles.*"));
        }
    }
}
