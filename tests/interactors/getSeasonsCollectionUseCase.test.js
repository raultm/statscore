import {
  Season,
  getSeasonsCollectionUseCase
} from '../../src/index'
import sinon from 'sinon'



describe('getSeasonsCollectionUseCase', () => {

  it('try to get all seasons', async () => {
    const options = { ...defaultOptions,
      getAllSeasons : sinon.spy(),
    }
    await getSeasonsCollectionUseCase(options)
    sinon.assert.calledOnce(options.getAllSeasons)
  })

  it('respond with collection even if empty array of seasons', async () => {
    const options = { ...defaultOptions,
      getAllSeasons : () => [],
      respondWithCollection: sinon.spy()
    }
    await getSeasonsCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithCollection)
  })

  it('respond with an error if error on try to get all seasons', async() => {
    const options = { ...defaultOptions,
      getAllSeasons : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getSeasonsCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('respond with an error if error on try respondWithCollection', async() => {
    const options = { ...defaultOptions,
      respondWithCollection : () => { throw new Error() },
      respondWithError: sinon.spy()
    }
    await getSeasonsCollectionUseCase(options)
    sinon.assert.calledOnce(options.respondWithError)
  })

  it('return the collection if not respondWithCollection is set in params', async() => {
    let collection = [1,2,3]
    const options = { ...defaultOptions,
      getAllSeasons : () => collection
    }
    delete options.respondWithCollection
    let collectionReturned = await getSeasonsCollectionUseCase(options)
    expect(collectionReturned).toBe(collection) 
  })

  const defaultOptions = {
    getAllSeasons : () => [],
    respondWithCollection : collection => collection,
    respondWithError : error => error
  }
})
