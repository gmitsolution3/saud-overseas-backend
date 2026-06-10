import { Schema, model } from "mongoose";
import { IDestination } from "./destination.interface";

const destinationSchema = new Schema<IDestination>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
      trim: true,
    },
    cats: {
      type: [String],
      required: true,
      default: [],
    },
  },
  {
    strict: true,
    timestamps: true,
    versionKey: false,
  },
);

const Destination = model<IDestination>(
  "Destination",
  destinationSchema,
);

export default Destination;