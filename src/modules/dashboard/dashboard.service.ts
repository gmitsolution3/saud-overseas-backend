import Contact from "../contact/contact.model";
import Destination from "../destination/destination.model";
import Gallery from "../gallery/gallery.model";
import Service from "../services/services.model";

export const getDashboard = async () => {
  const [
    serviceCount,
    destinationCount,
    galleryCount,
    contactCount,
    recentContacts,
  ] = await Promise.all([
    Service.countDocuments(),
    Destination.countDocuments(),
    Gallery.countDocuments(),
    Contact.countDocuments(),
    Contact.find({}).sort({ createdAt: -1 }).limit(10),
  ]);

  return {
    serviceCount,
    destinationCount,
    galleryCount,
    contactCount,
    recentContacts,
  };
};
