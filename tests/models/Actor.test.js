import {
  BaseModel,
  Actor,
} from '../../src/index'

it('Actor is an AppModel Subclass', () => {
  let actor = new Actor();
  expect(actor).toBeInstanceOf(BaseModel)
})
