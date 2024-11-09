using System;
using Backend.Aplication;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controller;

[Route("api/[controller]")]
[ApiController]
public class PollController : ControllerBase
{
    private readonly PollServices _pollService;
}
