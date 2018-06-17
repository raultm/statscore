import {
  BaseModel,
  Squad,
  Actor,
  Team,
  Role,
} from '../../src/index'

it('is an AppModel Subclass', () => {
  let squad = new Squad();
  expect(squad).toBeInstanceOf(BaseModel)
})

it('gets Actor given in constructor', () => {
  let parameters = {
    actor: new Actor()
  }
  let squad = new Squad(parameters)
  expect(squad.actor()).toBe(parameters.actor)
})

it('gets Team given in constructor', () => {
  let parameters = {
    team: new Team()
  }
  let squad = new Squad(parameters)
  expect(squad.team()).toBe(parameters.team)
})

it('gets Role given in constructor', () => {
  let parameters = {
    role: new Role()
  }
  let squad = new Squad(parameters)
  expect(squad.role()).toBe(parameters.role)
})

// 'Dorsal' in spanish
it('gets number given in constructor', () => {
  let parameters = {
    number: Math.random()
  }
  let squad = new Squad(parameters)
  expect(squad.number()).toBe(parameters.number)
})

it('gets image given in constructor', () => {
  let parameters = {
    image: Math.random()
  }
  let squad = new Squad(parameters)
  expect(squad.image()).toBe(parameters.image)
})