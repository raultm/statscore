import {
  BaseModel,
  Club,
} from '../../src/index'

it('Club is an AppModel Subclass', () => {
  let club = new Club();
  expect(club).toBeInstanceOf(BaseModel)
})

it('Club get shortname given in constructor', () => {
  let parameters = {
    shortname: Math.random().toString(36).substring(7)
  }
  let club = new Club(parameters)
  expect(club.shortname()).toBe(parameters.shortname)
})

it('Club get image given in constructor', () => {
  let parameters = {
    image: Math.random().toString(36).substring(7)
  }
  let club = new Club(parameters)
  expect(club.image()).toBe(parameters.image)
})

