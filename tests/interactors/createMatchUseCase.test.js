import {
  Match,
  createMatchUseCase
} from '../../src/index'
import sinon from 'sinon'



describe('createMatchUseCase', () => {

  it('try to save competition', async () => {
    const options = { ...defaultOptions,
      saveMatch : sinon.spy(),
    }
    await createMatchUseCase(options)
    sinon.assert.calledOnce(options.saveMatch)
  })

  it('respond with Match', async () => {
    const options = { ...defaultOptions,
      saveMatch : match => match,
      respondWithMatch: sinon.spy()
    }
    await createMatchUseCase(options)
    sinon.assert.calledOnce(options.respondWithMatch)
  })

  it('respond with an error if error on try to save match', async() => {
    const options = { ...defaultOptions,
      saveMatch : competition => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await createMatchUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if error on try respondWithMatch', async() => {
    const options = { ...defaultOptions,
      respondWithMatch : match => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await createMatchUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if match undefined', async() => {
    const options = { ...defaultOptions,
      match: null,
      respondWithError: sinon.spy()
    }
    await createMatchUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if match is not an instance of Match', async() => {
    const options = { ...defaultOptions,
      match: {id: "id", name: "Partido"},
      respondWithError: sinon.spy()
    }
    await createMatchUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if match is not validated', async() => {
    const options = { ...defaultOptions,
      validateMatch: match => false,
      respondWithError: sinon.spy()
    }
    await createMatchUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('return the match if not respondWithMatch is set in params', async() => {
    let match = new Match();
    const options = { ...defaultOptions,
      match : match,
      saveMatch : match => match
    }
    delete options.respondWithMatch
    let matchReturned = await createMatchUseCase(options)
    expect(matchReturned).toBe(match) 
  })

  const defaultMatch = new Match({});

  const defaultOptions = {
    match: defaultMatch,
    validateMatch: match => true,
    saveMatch : match => match,
    respondWithMatch : match => match,
    respondWithError : error => console.log(error)
  }
})
