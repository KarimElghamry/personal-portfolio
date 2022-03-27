import { images } from "../assets";
import Job from "../models/Job";

export const workExperience: Job[] = [
  {
    company: "Dell Techologies Inc.",
    companyLogo: images.companies.dell,
    position: "Software Engineer",
    location: "Cairo, Egypt",
    from: new Date(2021, 2, 28),
    to: new Date(Date.now()),
  },
  {
    company: "Vodafone Plc.",
    companyLogo: images.companies.vodafone,
    position: "Data Science Intern",
    location: "Cairo, Egypt",
    from: new Date(2020, 7, 1),
    to: new Date(2020, 11, 30),
  },
  {
    company: "Badgewell Inc.",
    companyLogo: images.companies.badgewell,
    position: "Blockchain Developer Intern",
    location: "Cairo, Egypt",
    from: new Date(2019, 7, 1),
    to: new Date(2019, 9, 30),
  },
  {
    company: "Nile University",
    companyLogo: images.companies.nileUniversity,
    position: "Computer Science Junior Teaching Assistant",
    location: "Cairo, Egypt",
    from: new Date(2017, 9, 1),
    to: new Date(2018, 0, 30),
  },
];
