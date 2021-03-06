import mongoose, { Schema } from 'mongoose'

const clientsSchema = new Schema({
  nombre: {
    type: String
  },
  apellidoPaterno: {
    type: String
  },
  apellidoMaterno: {
    type: String
  },
  edad: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

clientsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nombre: this.nombre,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      edad: this.edad,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Clients', clientsSchema)

export const schema = model.schema
export default model
