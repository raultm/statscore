export default async function getMatchesCollectionUseCase({
  getAllMatches = new Promise(),
  respondWithCollection = collection => collection,
  respondWithError = error => error,
} = {}) {
  try {
    return respondWithCollection(await getAllMatches())
  } catch (error) {
    respondWithError(error)
  }
}
