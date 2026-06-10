import { Schema, model } from "mongoose";
import { IService } from "./services.interface";

const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    strict: true,
    timestamps: true,
    versionKey: false,
  },
);

const Service = model<IService>("Service", serviceSchema);
export default Service;
