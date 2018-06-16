// https://medium.com/@dtinth/clean-javascript-using-use-case-interactors-f3a50c138154
export default async function getLeaguesCollectionUseCase({
  getAllClubs = new Promise(),
  respondWithCollection = collection => collection,
  respondWithError = error => error,
} = {}) {
  try {
    return respondWithCollection(await getAllClubs())
  } catch (error) {
    respondWithError(error)
  }
}
