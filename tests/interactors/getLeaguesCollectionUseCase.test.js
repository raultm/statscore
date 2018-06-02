import {
  League,
  getLeaguesCollectionUseCase
} from '../../src/index'
import sinon from 'sinon'



describe('getLeaguesCollectionUseCase', () => {

  it('try to get all leagues', async () => {
    const options = { ...defaultOptions,
      getAllLeagues : sinon.spy(),
    }
    await getLeaguesCollectionUseCase(options)
    sinon.assert.calledOnce(options.getAllLeagues)
  })

  it('respond with collection even if empty array of leagues', async () => {
    const options = { ...defaultOptions,
      getAllLeagues : () => [],
      respondWithCollection: sinon.spy()
    }
    await getLeaguesCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithCollection)
  })

  it('respond with an error if error on try to get all leagues', async() => {
    const options = { ...defaultOptions,
      getAllLeagues : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getLeaguesCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if error on try respondWithCollection', async() => {
    const options = { ...defaultOptions,
      respondWithCollection : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getLeaguesCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  const defaultOptions = {
    getAllLeagues : () => [],
    respondWithCollection : collection => collection,
    respondWithError : error => error
  }
})
