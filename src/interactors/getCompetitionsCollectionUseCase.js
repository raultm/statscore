export default async function getCompetitionsCollectionUseCase({
  getAllCompetitions = new Promise(),
  respondWithCollection = collection => collection,
  respondWithError = error => error,
} = {}) {
  try {
    respondWithCollection(await getAllCompetitions())
  } catch (error) {
    respondWithError(error)
  }
}
