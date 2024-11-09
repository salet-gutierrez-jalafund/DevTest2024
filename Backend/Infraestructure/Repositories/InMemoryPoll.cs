using System;
using Backend.Domain.Entities;

namespace Backend.Infraestructure.Repositories;

public class InMemoryPoll : IPollRepositories
{
    private readonly List<Poll> _pollList = new List<Poll>();
    private int _index = 1;

    public async Task<IEnumerable<Poll>> GetAllPoll()
    {
        return await Task.FromResult<IEnumerable<Poll>>(_pollList);
    }

    public Task PostPoll(Poll poll)
    {
        poll.Id = _index++;
        _pollList.Add(poll);
        return Task.CompletedTask;
        
    }

    public Task<Poll> GetPollById(int pollId)
    {
        var poll = _pollList.FirstOrDefault(pollFind => pollFind.Id == pollId);
        return Task.FromResult(poll);
    }

    public Task PostPollVotes(Poll poll)
    {

        poll.Id = _index++;
        _pollList.Add(poll);
        return Task.CompletedTask;
        
    }
}
