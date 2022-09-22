import dbConnect from "../../../utils/connectMongo";
import Header from "../../../models/headerModels";

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
        console.log("looking for 1 set of info");
        let info = await Header.find({ name: id });

        if (!info) res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: info });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "PATCH":
      try {
        const updatedInfo = await Header.updateOne({ name: id }, req.body, {
          new: true,
          runValidators: true,
        });

        if (!updatedInfo) res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: updatedInfo });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedInfo = await Header.deleteOne({ name: id });

        if (!deletedInfo) res.status(400).json({ success: false });

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
