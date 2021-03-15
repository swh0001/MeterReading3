using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeterReading.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using System.Linq.Dynamic.Core;


namespace MeterReading.Meters
{
    public class MeterAccountRepository : EfCoreRepository<MeterReadingDbContext, MeterAccount, Guid>, IMeterAccountRepository
    {
        public MeterAccountRepository(IDbContextProvider<MeterReadingDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        [Obsolete]
        public async Task<MeterAccount> FindByMeterIDAsync(string meterID)
        {
            //  throw new NotImplementedException();
            return await DbSet.FirstOrDefaultAsync(meterAccount => meterAccount.MeterID == meterID);
        }

        [Obsolete]
        public async Task<List<MeterAccount>> GetListAsync(int skipCount, int maxResultCount, string sorting, string filter = null)
        {
            //  throw new NotImplementedException();
            return await DbSet.WhereIf(
                                !filter.IsNullOrWhiteSpace(),
                                meterAccount => meterAccount.UserName.Equals(filter)
                             )
                            .OrderBy(sorting)
                            .Skip(skipCount)
                            .Take(maxResultCount)
                            .ToListAsync();

        }
    }
}