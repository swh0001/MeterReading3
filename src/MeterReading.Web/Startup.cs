using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Identity.Settings;
using Volo.Abp.Settings;

namespace MeterReading.Web
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication<MeterReadingWebModule>();
        }

        public void Configure(IApplicationBuilder app)
        {
            //添加密码策略，降低密码复杂度
            app.ApplicationServices.GetService<ISettingDefinitionManager>().Get(IdentitySettingNames.Password.RequireDigit).DefaultValue = false.ToString();
            app.ApplicationServices.GetService<ISettingDefinitionManager>().Get(IdentitySettingNames.Password.RequireLowercase).DefaultValue = false.ToString();
            app.ApplicationServices.GetService<ISettingDefinitionManager>().Get(IdentitySettingNames.Password.RequireUppercase).DefaultValue = false.ToString();
            app.ApplicationServices.GetService<ISettingDefinitionManager>().Get(IdentitySettingNames.Password.RequireNonAlphanumeric).DefaultValue = false.ToString();
            app.ApplicationServices.GetService<ISettingDefinitionManager>().Get(IdentitySettingNames.Password.RequiredLength).DefaultValue = 6.ToString();

            app.InitializeApplication();
        }
    }
}
