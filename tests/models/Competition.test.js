import {
  BaseModel,
  Competition,
  League,
  Season,
} from '../../src/index'

it('Competition is an AppModel Subclass', () => {
  let competition = new Competition();
  expect(competition).toBeInstanceOf(BaseModel)
})

it('Competition get League given in constructor', () => {
  let parameters = {
    league: new League()
  }
  let competition = new Competition(parameters)
  expect(competition.league()).toBe(parameters.league)
})

it('Competition get Season given in constructor', () => {
  let parameters = {
    season: new Season()
  }
  let competition = new Competition(parameters)
  expect(competition.season()).toBe(parameters.season)
})
