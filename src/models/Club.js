import BaseModel from './BaseModel'

export default class Club extends BaseModel {

  constructor(params) {
    super(params)
    const data = { shortname: '', image: '', ...params }
    this.$shortname = data.shortname
    this.$image = data.image
  }

  shortname() {
    return this.$shortname
  }

  image() {
    return this.$image
  }
}
