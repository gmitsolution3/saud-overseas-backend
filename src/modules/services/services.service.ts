import { IService } from "./services.interface";
import Service from "./services.model";

export const createService = async (serviceData: IService) => {
  const service = await Service.create(serviceData);
  return service;
};

export const getServices = async () => {
  const services = await Service.find({});
  return services;
};

export const updateService = async (
  id: string,
  payload: Partial<IService>,
) => {
  const service = await Service.updateOne(
    { _id: id },
    { $set: payload },
  );

  return service;
};

export const deleteService = async (id: string) => {
  const service = await Service.deleteOne({ _id: id });
  return service;
};
