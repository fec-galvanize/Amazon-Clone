// import sql from "../../../database/review";

//MID categories array
const categories = [
  {
    title: "Primo Video",
    ulink:
      "https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video",
  },
  {
    title: "Health and Household",
    ulink:
      "https://www.amazon.com/health-personal-care-nutrition-fitness/b/?ie=UTF8&node=3760901&ref_=nav_cs_hpc",
  },
  {
    title: "Kindle Books",
    ulink:
      "https://www.amazon.com/Kindle-eBooks/b/?ie=UTF8&node=154606011&ref_=nav_cs_kindle_books",
  },
  {
    title: "Pet Supplies",
    ulink:
      "https://www.amazon.com/pet-shops-dogs-cats-hamsters-kittens/b/?ie=UTF8&node=2619533011&ref_=nav_cs_pets",
  },
  {
    title: "Books",
    ulink:
      "https://www.amazon.com/books-used-books-textbooks/b/?ie=UTF8&node=283155&ref_=nav_cs_books",
  },
  {
    title: "Pharmacy",
    ulink:
      "https://www.amazon.com/Party-Dont-Start-Til-Croc/dp/B08QV53WTG/ref=d_pd_sbs_sccl_1_4/136-0670463-5853540?pd_rd_w=3t6bF&content-id=amzn1.sym.e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_p=e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_r=NE79YG84YXA8A55AY6JC&pd_rd_wg=Bg8fM&pd_rd_r=26f9f66c-0e02-4089-9c85-ed5885bda6e4&pd_rd_i=B08QV53WTG&customId=B0752XJYNL&th=1&psc=1",
  },
  {
    title: "Amazon Launchpad",
    ulink:
      "https://www.amazon.com/Party-Dont-Start-Til-Croc/dp/B08QV53WTG/ref=d_pd_sbs_sccl_1_4/136-0670463-5853540?pd_rd_w=3t6bF&content-id=amzn1.sym.e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_p=e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_r=NE79YG84YXA8A55AY6JC&pd_rd_wg=Bg8fM&pd_rd_r=26f9f66c-0e02-4089-9c85-ed5885bda6e4&pd_rd_i=B08QV53WTG&customId=B0752XJYNL&th=1&psc=1",
  },
];

//Amazon fashion array
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

//req.params or req.url or req.route.path

// export default async function handler(req, res) {
//   switch (req.method) {
//     case "GET":
//       const response = await sql`SELECT * FROM categories`;

//       if (response[0]) {
//         return res.status(200).json(response);
//       } else {
//         let addedCategories = [];
//         for (let cat of categories) {
//           const item = (
//             await sql`INSERT INTO categories ${sql(cat)} returning *`
//           )[0];
//           addedCategories.push(item);
//         }
//         return res.status(200).json(addedCategories);
//       }
//   }
// }
