using System;
using Backend.Domain.Entities;

namespace Backend.Infraestructure.Repositories;

public interface IPollRepositories
{
    Task<IEnumerable<Poll>> GetAllPoll();
}
