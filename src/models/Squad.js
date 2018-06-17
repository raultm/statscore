import BaseModel from './BaseModel'

export default  class Squad extends BaseModel {
  constructor(params) {
    super(params)
    
    const data = { 
      actor: null,
      team: null,
      role: null,
      number: null,
      image: null,
      ...params 
    }
    this.$actor = data.actor
    this.$team = data.team
    this.$role = data.role
    this.$number = data.number
    this.$image = data.image
  }

  actor () {
    return this.$actor
  }

  team () {
    return this.$team
  }

  role () {
    return this.$role
  }

  number () {
    return this.$number
  }

  image () {
    return this.$image
  }

}
