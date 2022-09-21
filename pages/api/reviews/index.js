import Reviews from "../../../models/reviewsModel";
import dbConnect from "../../../utils/connectMongo";

const reviewsData = [
  {
    picture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.andina-ingham.co.uk%2Fwp-content%2Fuploads%2F2019%2F09%2Fmiguel-andrade-nAOZCYcLND8-unsplash_pineapple.jpg&f=1&nofb=1",
    name: "Pineapples",
    rating: 5,
    subject: "Funny Shirt",
    country: "United States",
    date: new Date(Date.now()).toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    verified_purchase: false,
    review_body: "Made me laugh",
  },
  {
    picture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.andina-ingham.co.uk%2Fwp-content%2Fuploads%2F2019%2F09%2Fmiguel-andrade-nAOZCYcLND8-unsplash_pineapple.jpg&f=1&nofb=1",
    name: "Pineapples",
    rating: 3,
    subject: "Funny Shirt",
    country: "United States",
    date: new Date(Date.now()).toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    verified_purchase: false,
    review_body: "Made me laugh",
  },
];

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        console.log("looking for reviews");
        let reviews = await Reviews.find({});

        if (reviews[0]) {
          console.log("found reviews");
          return res.status(200).json({ success: true, data: reviews });
        } else {
          console.log("seeding array of reviews");

          reviews = await Reviews.insertMany(reviewsData);

          console.log("reviews put in to database");
          res.status(200).json({ success: true, body: reviews });
        }
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const newReview = await Reviews.create(req.body);
        res.status(201).json({ success: true, body: newReview });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        await Reviews.deleteMany();
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
