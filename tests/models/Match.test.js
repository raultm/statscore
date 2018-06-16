import {
  BaseModel,
  Match,
  Competition,
  Team,
} from '../../src/index'

it('is an AppModel Subclass', () => {
  let match = new Match();
  expect(match).toBeInstanceOf(BaseModel)
})

it('gets Competition given in constructor', () => {
  let parameters = {
    competition: new Competition()
  }
  let match = new Match(parameters)
  expect(match.competition()).toBe(parameters.competition)
})

it('gets localTeam given in constructor', () => {
  let parameters = {
    localTeam: new Team()
  }
  let match = new Match(parameters)
  expect(match.localTeam()).toBe(parameters.localTeam)
})

it('gets guestTeam given in constructor', () => {
  let parameters = {
    guestTeam: new Team()
  }
  let match = new Match(parameters)
  expect(match.guestTeam()).toBe(parameters.guestTeam)
})