import BaseModel from './BaseModel'

export default class Period extends BaseModel {

    constructor(params) {
        super(params)
        const data = { order: 0, ...params }
        this.$order = data.order
    }
    
    order () {
        return this.$order
    }

 }
