import { IDestination } from "./destination.interface";
import Destination from "./destination.model";

export const createDestination = async (
  destinationData: IDestination,
) => {
  const destination =
    await Destination.create(destinationData);

  return destination;
};

export const getDestinations = async () => {
  const destinations = await Destination.find({});

  return destinations;
};

export const updateDestination = async (
  id: string,
  payload: Partial<IDestination>,
) => {
  const destination = await Destination.updateOne(
    { _id: id },
    { $set: payload },
  );

  return destination;
};

export const deleteDestination = async (id: string) => {
  const destination = await Destination.deleteOne({
    _id: id,
  });

  return destination;
};