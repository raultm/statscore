import BaseModel from './BaseModel'

export default  class Competition extends BaseModel {
  constructor(params) {
    super(params)
    const data = { league: null, season: null, ...params }
    this.$league = data.league
    this.$season = data.season
  }

  league() {
    return this.$league
  }

  season() {
    return this.$season
  }
}
