using System;

namespace Backend.Domain.Entities;

public class Poll
{
    public int Id { get; set; }
    public string Name { get; set; }
    public Tecnologies Options { get; set; }
}