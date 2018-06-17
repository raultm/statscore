import {
  Squad,
  createSquadUseCase
} from '../../src/index'
import sinon from 'sinon'



describe('createSquadUseCase', () => {

  it('try to save squad', async () => {
    const options = { ...defaultOptions,
      saveSquad : sinon.spy(),
    }
    await createSquadUseCase(options)
    sinon.assert.calledOnce(options.saveSquad)
  })

  it('respond with Squad', async () => {
    const options = { ...defaultOptions,
      saveSquad : squad => squad,
      respondWithSquad: sinon.spy()
    }
    await createSquadUseCase(options)
    sinon.assert.calledOnce(options.respondWithSquad)
  })

  it('respond with an error if error on try to save squad', async() => {
    const options = { ...defaultOptions,
      saveSquad : squad => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await createSquadUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if error on try respondWithSquad', async() => {
    const options = { ...defaultOptions,
      respondWithSquad : squad => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await createSquadUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if squad undefined', async() => {
    const options = { ...defaultOptions,
      squad: null,
      respondWithError: sinon.spy()
    }
    await createSquadUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if squad is not an instance of Squad', async() => {
    const options = { ...defaultOptions,
      squad: {id: "id", name: "Jugador"},
      respondWithError: sinon.spy()
    }
    await createSquadUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if squad is not validated', async() => {
    const options = { ...defaultOptions,
      validateSquad: squad => false,
      respondWithError: sinon.spy()
    }
    await createSquadUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('return the squad if not respondWithSquad is set in params', async() => {
    let squad = new Squad()
    const options = { ...defaultOptions,
      squad : squad,
      saveSquad : squad => squad
    }
    delete options.respondWithSquad
    let squadReturned = await createSquadUseCase(options)
    expect(squadReturned).toBe(squad) 
  })

  const defaultSquad = new Squad({});

  const defaultOptions = {
    squad: defaultSquad,
    validateSquad: squad => true,
    saveSquad : squad => squad,
    respondWithSquad : squad => squad,
    respondWithError : error => console.log(error)
  }
})
