import { IGallery } from "./gallery.interface";
import Gallery from "./gallery.model";

export const createGallery = async (
  galleryData: IGallery,
) => {
  const gallery = await Gallery.create(galleryData);

  return gallery;
};

export const getGalleries = async () => {
  const galleries = await Gallery.find({});

  return galleries;
};

export const updateGallery = async (
  id: string,
  payload: Partial<IGallery>,
) => {
  const gallery = await Gallery.updateOne(
    { _id: id },
    { $set: payload },
  );

  return gallery;
};

export const deleteGallery = async (id: string) => {
  const gallery = await Gallery.deleteOne({
    _id: id,
  });

  return gallery;
};