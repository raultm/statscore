import {
  Squad,
} from '../index'

export default async function createSquadUseCase({
  squad = null,
  validateSquad = squad => true,
  saveSquad = squad => squad ,
  respondWithSquad = entity => entity,
  respondWithError = error => error,
} = {}) {
  try {
    if(squad == null){
      throw new Error("squad to save is null")
    }
    
    if(squad instanceof Squad === false){
      throw new Error("squad to save is not a Squad object")
    }
    
    if(!validateSquad(squad)){
      throw new Error("squad dont validate beforeSave")
    }
    
    return respondWithSquad(await saveSquad(squad))
  } catch (error) {
    respondWithError(error)
  }
}
