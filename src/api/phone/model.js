import mongoose, { Schema } from 'mongoose'

const phoneSchema = new Schema({
  lada: {
    type: String
  },
  telefono: {
    type: String
  },
  ext: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

phoneSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      lada: this.lada,
      telefono: this.telefono,
      ext: this.ext,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Phone', phoneSchema)

export const schema = model.schema
export default model
