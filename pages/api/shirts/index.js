import sql from "../../../database/review";

const shirtColors = [
  {
    color: "Black",
    img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
  },
  {
    color: "Navy",
    img: "https://m.media-amazon.com/images/I/A1vJUKBjc2L._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/A1vJUKBjc2L._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
  },
  {
    color: "Ashphalt",
    img: "https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/B1OGJ8t+8ZS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
  },
  {
    color: "Cranberry",
    img: "https://m.media-amazon.com/images/I/B1fs3pzGnVS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/B1DnWZEQ8ES._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
  },
  {
    color: "Kelly Green",
    img: "https://m.media-amazon.com/images/I/B1VMTBKtipS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/B1SqOvJ6PXS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
  },
  {
    color: "Dark Heather",
    img: "https://m.media-amazon.com/images/I/B1MuEgxHlwS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/B17H79+I8tS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
  },
  {
    color: "Heather Grey",
    img: "https://m.media-amazon.com/images/I/C1ce8y0uOwS._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/C1ce8y0uOwS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
  },
  {
    color: "Heather Blue",
    img: "https://m.media-amazon.com/images/I/B1Rv34VM9pS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/B1DBWbloIpS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
  },
  {
    color: "Purple",
    img: "https://m.media-amazon.com/images/I/B1el7IZypsS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/B14oNsg5tJS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
  },
  {
    color: "Royal Blue",
    img: "https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    display_img:
      "https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
  },
];

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const response = await sql`SELECT * FROM shirts`;

      if (response[0]) {
        return res.status(200).json(response);
      } else {
        let addedShirts = [];
        for (let shirt of shirtColors) {
          const item = (
            await sql`INSERT INTO shirts ${sql(shirt)} returning *`
          )[0];
          addedShirts.push(item);
        }
        return res.status(200).json(addedShirts);
      }
  }
}
