import { Schema, model, Document } from 'mongoose';

export interface Product extends Document {
  name: string;
  price: number;
  discountStartTime: Date;
}

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discountStartTime: { type: Date, required: true }
});

export default model<Product>('Product', productSchema);
