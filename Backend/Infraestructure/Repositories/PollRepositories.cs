using System;
using Backend.Domain.Entities;
using Backend.Infraestructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infraestructure.Repositories;

public class PollRepositories : IPollRepositories
{
    private readonly ApiDbContext _apiDbContext;

    public PollRepositories(ApiDbContext apiDbContext)
    {
        _apiDbContext = apiDbContext;
    }

    public async Task<IEnumerable<Poll>> GetAllPoll(){
         return await _apiDbContext.Poll.ToListAsync();
    }

    public async Task CreatePoll(Tecnologies options)
    {
        await _apiDbContext.Tecnologies.AddAsync(options);
        await _apiDbContext.SaveChangesAsync();
    }

}
