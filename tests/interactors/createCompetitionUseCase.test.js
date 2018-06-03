import {
  Competition,
  createCompetitionsUseCase
} from '../../src/index'
import sinon from 'sinon'



describe('createCompetitionsUseCase', () => {

  it('try to save competition', async () => {
    const options = { ...defaultOptions,
      saveCompetition : sinon.spy(),
    }
    await createCompetitionsUseCase(options)
    sinon.assert.calledOnce(options.saveCompetition)
  })

  it('respond with competition', async () => {
    const options = { ...defaultOptions,
      saveCompetition : competition => competition,
      respondWithCompetition: sinon.spy()
    }
    await createCompetitionsUseCase(options)
    sinon.assert.calledOnce(options.respondWithCompetition)
  })

  it('respond with an error if error on try to get all competition', async() => {
    const options = { ...defaultOptions,
      saveCompetition : competition => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await createCompetitionsUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if error on try respondWithCompetition', async() => {
    const options = { ...defaultOptions,
      respondWithCompetition : competition => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await createCompetitionsUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if competition undefined', async() => {
    const options = { ...defaultOptions,
      competition: null,
      respondWithError: sinon.spy()
    }
    await createCompetitionsUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if competition is not an instance of Competition', async() => {
    const options = { ...defaultOptions,
      competition: {id: "id", name: "Liga"},
      respondWithError: sinon.spy()
    }
    await createCompetitionsUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  const defaultCompetition = new Competition({});

  const defaultOptions = {
    competition: defaultCompetition,
    saveCompetition : competition => competition,
    respondWithCompetition : competition => competition,
    respondWithError : error => console.log(error)
  }
})
