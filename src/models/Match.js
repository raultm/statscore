import BaseModel from './BaseModel'

export default  class Match extends BaseModel {
  constructor(params) {
    super(params)
    const data = { localTeam: null, guestTeam: null, competition: null, ...params }
    this.$competition = data.competition
    this.$localTeam = data.localTeam
    this.$guestTeam = data.guestTeam
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
}
