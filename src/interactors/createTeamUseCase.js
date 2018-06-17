import {
  Team,
} from '../index'

export default async function createTeamUseCase({
  team = null,
  validateTeam = team => true,
  saveTeam = team => team ,
  respondWithTeam = entity => entity,
  respondWithError = error => error,
} = {}) {
  try {
    if(team == null){
      throw new Error("team to save is null")
    }
    
    if(team instanceof Team === false){
      throw new Error("team to save is not a Team object")
    }
    
    if(!validateTeam(team)){
      throw new Error("team dont validate beforeSave")
    }
    
    return respondWithTeam(await saveTeam(team))
  } catch (error) {
    respondWithError(error)
  }
}
