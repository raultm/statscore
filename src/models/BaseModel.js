export default class BaseModel {
  constructor(params) {
    const data = {
      id: '',
      name: '',
      ...params,
    }
    if (data.id === '') {
      data.id = Math.random().toString(36).substr(2)
    }
    this.$id = data.id
    this.$name = data.name
  }

  id() {
    return this.$id
  }

  name() {
    return this.$name
  }
}
