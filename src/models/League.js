import BaseModel from './BaseModel'

export default class League extends BaseModel {
  constructor(params) {
    super(params)
    const data = { organization: '', ...params }
    this.$organizer = data.organizer
  }

  organizer() {
    return this.$organizer
  }
}
