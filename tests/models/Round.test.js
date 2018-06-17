import {
  BaseModel,
  Round,
} from '../../src/index'

it('Round is an AppModel Subclass', () => {
  let round = new Round();
  expect(round).toBeInstanceOf(BaseModel)
})
