import { Schema, model } from "mongoose";
import { IGallery } from "./gallery.interface";

const gallerySchema = new Schema<IGallery>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Gallery = model<IGallery>("Gallery", gallerySchema);
export default Gallery;
