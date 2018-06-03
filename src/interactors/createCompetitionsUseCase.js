import {
  Competition,
} from '../index'

export default async function createCompetitionsUseCase({
  competition = null,
  saveCompetition = competition => competition ,
  respondWithCompetition = entity => entity,
  respondWithError = error => error,
} = {}) {
  try {
    if(competition == null){
      throw new Error("Competition to save is null")
    }

    if(competition instanceof Competition === false){
      throw new Error("Competition to save is not a Competition object")
    }

    respondWithCompetition(await saveCompetition(competition))
  } catch (error) {
    respondWithError(error)
  }
}
