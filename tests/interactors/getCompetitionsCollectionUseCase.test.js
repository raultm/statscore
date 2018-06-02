import {
  Competition,
  getCompetitionsCollectionUseCase
} from '../../src/index'
import sinon from 'sinon'



describe('getCompetitionsCollectionUseCase', () => {

  it('try to get all competition', async () => {
    const options = { ...defaultOptions,
      getAllCompetitions : sinon.spy(),
    }
    await getCompetitionsCollectionUseCase(options)
    sinon.assert.calledOnce(options.getAllCompetitions)
  })

  it('respond with collection even if empty array of competition', async () => {
    const options = { ...defaultOptions,
      getAllCompetitions : () => [],
      respondWithCollection: sinon.spy()
    }
    await getCompetitionsCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithCollection)
  })

  it('respond with an error if error on try to get all competition', async() => {
    const options = { ...defaultOptions,
      getAllCompetitions : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getCompetitionsCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if error on try respondWithCollection', async() => {
    const options = { ...defaultOptions,
      respondWithCollection : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getCompetitionsCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  const defaultOptions = {
    getAllCompetitions : () => [],
    respondWithCollection : collection => collection,
    respondWithError : error => error
  }
})
