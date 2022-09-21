import dbConnect from "../../../utils/connectMongo";
import Reviews from "../../../models/reviewsModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        console.log("looking for 1 review");
        let review = await Reviews.findById(id);

        if (!review) res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: review });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "PATCH":
      try {
        const updatedReview = await Reviews.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!updatedReview) res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: updatedReview });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedReview = await Reviews.findByIdAndDelete(id);

        if (!deletedReview) res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: {} });
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
