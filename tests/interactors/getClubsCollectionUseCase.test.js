import {
  Club,
  getClubsCollectionUseCase
} from '../../src/index'
import sinon from 'sinon'



describe('getClubsCollectionUseCase', () => {

  it('try to get all Clubs', async () => {
    const options = { ...defaultOptions,
      getAllClubs : sinon.spy(),
    }
    await getClubsCollectionUseCase(options)
    sinon.assert.calledOnce(options.getAllClubs)
  })

  it('respond with collection even if empty array of Clubs', async () => {
    const options = { ...defaultOptions,
      getAllClubs : () => [],
      respondWithCollection: sinon.spy()
    }
    await getClubsCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithCollection)
  })

  it('respond with an error if error on try to get all Clubs', async() => {
    const options = { ...defaultOptions,
      getAllClubs : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getClubsCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if error on try respondWithCollection', async() => {
    const options = { ...defaultOptions,
      respondWithCollection : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getClubsCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('return the collection if not respondWithCollection is set in params', async() => {
    let collection = [1,2,3]
    const options = { ...defaultOptions,
      getAllClubs : () => collection
    }
    delete options.respondWithCollection
    let collectionReturned = await getClubsCollectionUseCase(options)
    expect(collectionReturned).toBe(collection) 
  })

  const defaultOptions = {
    getAllClubs : () => [],
    respondWithCollection : collection => collection,
    respondWithError : error => error
  }
})
