import BaseModel from '../../src/models/BaseModel'
import League from '../../src/models/League'


it('League is an AppModel Subclass', () => {
  let league = new League();
  expect(league).toBeInstanceOf(BaseModel)
})

it('League get organizer given in constructor', () => {
  let parameters = {
    organizer: Math.random().toString(36).substring(7)
  }
  let league = new League(parameters)
  expect(league.organizer()).toBe(parameters.organizer)
})
