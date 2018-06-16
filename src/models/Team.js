import BaseModel from './BaseModel'

export default  class Team extends BaseModel {
  constructor(params) {
    super(params)
    const data = { shortname: '', image: '', club: null, season: null, ...params }
    this.$shortname = data.shortname
    this.$image = data.image
    this.$club = data.club
    this.$competition = data.competition
  }

  club () {
    return this.$club
  }

  competition () {
    return this.$competition
  }

  shortname () {
    return this.$shortname
  }

  image () {
    return this.$image
  }
}
