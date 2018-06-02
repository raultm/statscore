// https://medium.com/@dtinth/clean-javascript-using-use-case-interactors-f3a50c138154
export default async function getSeasonsCollectionUseCase({
  getAllSeasons = new Promise(),
  respondWithCollection = collection => collection,
  respondWithError = error => error,
} = {}) {
  try {
    respondWithCollection(await getAllSeasons())
  } catch (error) {
    respondWithError(error)
  }
}
