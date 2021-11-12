import mongoose, { Schema } from 'mongoose'

const addressSchema = new Schema({
  calle: {
    type: String
  },
  numeroInt: {
    type: String
  },
  numeroExt: {
    type: String
  },
  colonia: {
    type: String
  },
  cp: {
    type: String
  },
  estado: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

addressSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      calle: this.calle,
      numeroInt: this.numeroInt,
      numeroExt: this.numeroExt,
      colonia: this.colonia,
      cp: this.cp,
      estado: this.estado,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Address', addressSchema)

export const schema = model.schema
export default model
