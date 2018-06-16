export default async function getCompetitionsCollectionUseCase({
  getAllCompetitions = new Promise(),
  respondWithCollection = collection => collection,
  respondWithError = error => error,
} = {}) {
  try {
    return respondWithCollection(await getAllCompetitions())
  } catch (error) {
    respondWithError(error)
  }
}
