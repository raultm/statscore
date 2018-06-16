import {
  BaseModel,
  Team,
  Competition,
  Club,
} from '../../src/index'

it('is an AppModel Subclass', () => {
  let team = new Team();
  expect(team).toBeInstanceOf(BaseModel)
})

it('gets Club given in constructor', () => {
  let parameters = {
    club: new Club()
  }
  let team = new Team(parameters)
  expect(team.club()).toBe(parameters.club)
})

it('gets Competition given in constructor', () => {
  let parameters = {
    competition: new Competition()
  }
  let team = new Team(parameters)
  expect(team.competition()).toBe(parameters.competition)
})

it('gets shortname given in constructor', () => {
  let parameters = {
    shortname: Math.random().toString(36).substring(7)
  }
  let team = new Team(parameters)
  expect(team.shortname()).toBe(parameters.shortname)
})

it('gets image given in constructor', () => {
  let parameters = {
    image: Math.random().toString(36).substring(7)
  }
  let team = new Team(parameters)
  expect(team.image()).toBe(parameters.image)
})
