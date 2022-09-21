// import sql from "../../../database/review/index";

const fashCat = [
  {
    title: "Women",
    ulink:
      "https://www.amazon.com/Womens-Fashion/b/?ie=UTF8&node=7147440011&ref_=sv_sl_1",
  },
  {
    title: "Men",
    ulink:
      "https://www.amazon.com/Mens-Fashion/b/?ie=UTF8&node=7147441011&ref_=sv_sl_2",
  },
  {
    title: "Kids",
    ulink: "https://www.amazon.com/b/?ie=UTF8&node=20939775011&ref_=sv_sl_3",
  },
  {
    title: "Luggage",
    ulink:
      "https://www.amazon.com/Luggage-Travel-Gear/b/?ie=UTF8&node=9479199011&ref_=sv_sl_4",
  },
  {
    title: "Sales and Deals",
    ulink:
      "https://www.amazon.com/fashion-sales-and-deals/b/?ie=UTF8&node=9538491011&ref_=sv_sl_5",
  },
  {
    title: "New Arrivals",
    ulink:
      "https://www.amazon.com/New-Arrivals/b/?_encoding=UTF8&node=17020138011&ref_=sv_sl_6",
  },
  {
    title: "Our Brands",
    ulink: "https://www.amazon.com/b/?ie=UTF8&node=16334314011&ref_=sv_sl_7",
  },
  {
    title: "Primo try before you buy",
    ulink:
      "https://www.amazon.com/trybeforeyoubuy/?_encoding=UTF8&ref_=sv_sl_8",
  },
];

// export default async function handler(req, res) {
//   switch (req.method) {
//     case "GET":
//       const response = await sql`SELECT * FROM fashcat`;

//       if (response[0]) {
//         return res.status(200).json(response);
//       } else {
//         let addedCategories = [];
//         for (let cat of fashCat) {
//           const item = (
//             await sql`INSERT INTO fashcat ${sql(cat)} returning *`
//           )[0];
//           addedCategories.push(item);
//         }
//         return res.status(200).json(addedCategories);
//       }
//   }
// }
