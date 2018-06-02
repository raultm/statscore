import {
  BaseModel,
  Season,
} from '../../src/index'

it('Season is an AppModel Subclass', () => {
  let season = new Season();
  expect(season).toBeInstanceOf(BaseModel)
})
