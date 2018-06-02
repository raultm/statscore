import {
  BaseModel,
} from '../../src/index'

it('Base Model NOT empty id by default', () => {
  let model = new BaseModel();
  expect(model.id()).not.toBe("")
})

it('Base Model different id on different objects', () => {
  let model1 = new BaseModel();
  let model2 = new BaseModel();
  expect(model1.id()).not.toBe(model2.id())
})

it('Base Model empty name by default', () => {
  let model = new BaseModel();
  expect(model.name()).toBe("")
})

it('BaseModel get name given in constructor', () => {
  let parameters = {
    name: Math.random().toString(36).substring(7)
  }
  let model = new BaseModel(parameters)
  expect(model.name()).toBe(parameters.name)
})
