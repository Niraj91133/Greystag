import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }],
    colors: [{ type: String }],
    sizes: [{ type: String }],
    details: [{ type: String }],
    fabric: { type: String },
    stock: { type: Number, default: 0 },
    occasions: [{ type: String }],
    displayLocations: [{ type: String }],
    status: { type: String, default: 'Active' },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
