import {
  BaseModel,
  Period,
} from '../../src/index'

it('Period is an AppModel Subclass', () => {
  let period = new Period();
  expect(period).toBeInstanceOf(BaseModel)
})

it('gets order given in constructor', () => {
  let parameters = {
    order: Math.random()
  }
  let period = new Period(parameters)
  expect(period.order()).toBe(parameters.order)
})
