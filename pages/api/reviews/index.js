// import sql from "../../../database/review";

const reviews = [
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

// export default async function handler(req, res) {
//   switch (req.method) {
//     case "GET":
//       const response = await sql`SELECT * FROM reviews`;

//       if (response[0]) {
//         return res.status(200).json(response);
//       } else {
//         let addedReviews = [];
//         for (let review of reviews) {
//           const item = (
//             await sql`INSERT INTO reviews ${sql(review)} returning *`
//           )[0];
//           addedReviews.push(item);
//         }
//         return res.status(200).json(addedReviews);
//       }
//   }
// }
