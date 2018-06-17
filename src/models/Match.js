import BaseModel from './BaseModel'

export default  class Match extends BaseModel {
  constructor(params) {
    super(params)
    const data = { 
      localTeam: null,
      guestTeam: null,
      competition: null,
      round: null,
      group: null,
      ...params 
    }
    this.$competition = data.competition
    this.$localTeam = data.localTeam
    this.$guestTeam = data.guestTeam
    this.$round = data.round
    this.$group = data.group
  }

  competition () {
    return this.$competition
  }

  localTeam () {
    return this.$localTeam
  }

  guestTeam () {
    return this.$guestTeam
  }

  round () {
    return this.$round
  }

  group () {
    return this.$group
  }

}
