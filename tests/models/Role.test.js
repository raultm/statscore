import {
  BaseModel,
  Role,
} from '../../src/index'

it('Role is an AppModel Subclass', () => {
  let role = new Role();
  expect(role).toBeInstanceOf(BaseModel)
})
