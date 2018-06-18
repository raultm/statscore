import {
  Match,
  getMatchesCollectionUseCase
} from '../../src/index'
import sinon from 'sinon'



describe('getMatchesCollectionUseCase', () => {

  it('try to get all matches', async () => {
    const options = { ...defaultOptions,
      getAllMatches : sinon.spy(),
    }
    await getMatchesCollectionUseCase(options)
    sinon.assert.calledOnce(options.getAllMatches)
  })

  it('respond with collection even if empty array of matches', async () => {
    const options = { ...defaultOptions,
      getAllMatches : () => [],
      respondWithCollection: sinon.spy()
    }
    await getMatchesCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithCollection)
  })

  it('respond with an error if error on try to get all matches', async() => {
    const options = { ...defaultOptions,
      getAllMatches : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getMatchesCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if error on try respondWithCollection', async() => {
    const options = { ...defaultOptions,
      respondWithCollection : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getMatchesCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('return the collection if not respondWithCollection is set in params', async() => {
    let collection = [1,2,3]
    const options = { ...defaultOptions,
      getAllMatches : () => collection
    }
    delete options.respondWithCollection
    let collectionReturned = await getMatchesCollectionUseCase(options)
    expect(collectionReturned).toBe(collection) 
  })

  const defaultOptions = {
    getAllMatches : () => [],
    respondWithCollection : collection => collection,
    respondWithError : error => error
  }
})
