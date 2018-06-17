import {
  BaseModel,
  Group,
} from '../../src/index'

it('Group is an AppModel Subclass', () => {
  let group = new Group();
  expect(group).toBeInstanceOf(BaseModel)
})
