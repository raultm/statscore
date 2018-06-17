import {
  Match,
} from '../index'

export default async function createMatchUseCase({
  match = null,
  validateMatch = match => true,
  saveMatch = match => match ,
  respondWithMatch = entity => entity,
  respondWithError = error => error,
} = {}) {
  try {
    if(match == null){
      throw new Error("match to save is null")
    }
    
    if(match instanceof Match === false){
      throw new Error("match to save is not a Match object")
    }
    
    if(!validateMatch(match)){
      throw new Error("match dont validate beforeSave")
    }
    
    respondWithMatch(await saveMatch(match))
  } catch (error) {
    respondWithError(error)
  }
}
