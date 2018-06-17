import {
  BaseModel,
  Stat,
} from '../../src/index'

it('Stat is an AppModel Subclass', () => {
  let stat = new Stat();
  expect(stat).toBeInstanceOf(BaseModel)
})
