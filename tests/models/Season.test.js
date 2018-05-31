import BaseModel from '../../src/models/BaseModel'
import Season from '../../src/models/Season'

it('Season is an AppModel Subclass', () => {
  let season = new Season();
  expect(season).toBeInstanceOf(BaseModel)
})
