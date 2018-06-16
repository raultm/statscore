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

  it('return the collection if not respondWithCollection is set in params', async() => {
    let collection = [1,2,3]
    const options = { ...defaultOptions,
      getAllCompetitions : () => collection
    }
    delete options.respondWithCollection
    let collectionReturned = await getCompetitionsCollectionUseCase(options)
    expect(collectionReturned).toBe(collection) 
  })

  const defaultOptions = {
    getAllCompetitions : () => [],
    respondWithCollection : collection => collection,
    respondWithError : error => error
  }
})
