using System;
using Backend.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infraestructure.Data;

public class ApiDbContext : DbContext
{
    public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
    {
    }

    public DbSet<Poll> Poll { get; set; }
    public DbSet<Tecnologies> Tecnologies { get; set; }
    public DbSet<User> Users { get; set; }

}