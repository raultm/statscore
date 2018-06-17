import {
  Team,
  createTeamUseCase
} from '../../src/index'
import sinon from 'sinon'



describe('createTeamUseCase', () => {

  it('try to save team', async () => {
    const options = { ...defaultOptions,
      saveTeam : sinon.spy(),
    }
    await createTeamUseCase(options)
    sinon.assert.calledOnce(options.saveTeam)
  })

  it('respond with Team', async () => {
    const options = { ...defaultOptions,
      saveTeam : team => team,
      respondWithTeam: sinon.spy()
    }
    await createTeamUseCase(options)
    sinon.assert.calledOnce(options.respondWithTeam)
  })

  it('respond with an error if error on try to save team', async() => {
    const options = { ...defaultOptions,
      saveTeam : team => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await createTeamUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if error on try respondWithTeam', async() => {
    const options = { ...defaultOptions,
      respondWithTeam : team => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await createTeamUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if team undefined', async() => {
    const options = { ...defaultOptions,
      team: null,
      respondWithError: sinon.spy()
    }
    await createTeamUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if team is not an instance of Team', async() => {
    const options = { ...defaultOptions,
      team: {id: "id", name: "Jugador"},
      respondWithError: sinon.spy()
    }
    await createTeamUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if team is not validated', async() => {
    const options = { ...defaultOptions,
      validateTeam: team => false,
      respondWithError: sinon.spy()
    }
    await createTeamUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('return the team if not respondWithTeam is set in params', async() => {
    let team = new Team()
    const options = { ...defaultOptions,
      team : team,
      saveTeam : team => team
    }
    delete options.respondWithTeam
    let teamReturned = await createTeamUseCase(options)
    expect(teamReturned).toBe(team) 
  })

  const defaultTeam = new Team({});

  const defaultOptions = {
    team: defaultTeam,
    validateTeam: team => true,
    saveTeam : team => team,
    respondWithTeam : team => team,
    respondWithError : error => console.log(error)
  }
})
