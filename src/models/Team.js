import BaseModel from './BaseModel'

export default  class Team extends BaseModel {
  constructor(params) {
    super(params)
    const data = { club: null, season: null, ...params }
    this.$club = data.club
    this.$competition = data.competition
  }

   club () {
     return this.$club
   }

   competition () {
     return this.$competition
   }
}
