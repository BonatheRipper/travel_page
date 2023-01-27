import cat_1 from "../data/images/Category/cat_1.png";
import cat_2 from "../data/images/Category/cat_2.png";
import cat_3 from "../data/images/Category/cat_3.png";
import cat_4 from "../data/images/Category/cat_4.png";
import dest_1 from "../data/images/Destination/dest_1.png";
import dest_2 from "../data/images/Destination/dest_2.jpeg";
import dest_3 from "../data/images/Destination/dest_3.png";
import book_1 from "../data/images/Destination/book_1.png";
import book_2 from "../data/images/Destination/book_2.png";
import book_3 from "../data/images/Destination/book_3.png";

import { RiNavigationFill } from "react-icons/ri";

export const NavItems = [
  "Destinations",
  "Hotels",
  "Flights",
  "Bookings",
  "Login",
  "Sign up",
];
export const CategoryItems = [
  {
    title: "Calculated Weather ",
    body: "Built Wicket longer admire do barton vanity itself do in it.",
    image: cat_1,
    alt: "cat_1",
    custom_css: false,
  },
  {
    title: "Calculated Weather ",
    body: "Built Wicket longer admire do barton vanity itself do in it.",
    image: cat_2,
    alt: "cat_2",
    custom_css: true,
  },
  {
    title: "Calculated Weather ",
    body: "Built Wicket longer admire do barton vanity itself do in it.",
    image: cat_3,
    alt: "cat_3",
    custom_css: false,
  },
  {
    title: "Calculated Weather ",
    body: "Built Wicket longer admire do barton vanity itself do in it.",
    image: cat_4,
    alt: "cat_4",
    custom_css: false,
  },
];

export const DestinationItems = [
  {
    title: "Rome, Italty",
    price: "$5,42k",
    duration: "10 Days Trip",
    image: dest_1,
    icon: <RiNavigationFill />,
  },
  {
    title: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
    image: dest_2,
    icon: <RiNavigationFill />,
  },
  {
    title: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
    image: dest_3,
    icon: <RiNavigationFill />,
  },
];
export const BookingItems = [
  {
    title: "Choose Destination",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    image: book_1,
  },
  {
    title: "Make Payment",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    image: book_2,
  },
  {
    title: "Reach Airport on Selected Date",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    image: book_3,
  },
];
