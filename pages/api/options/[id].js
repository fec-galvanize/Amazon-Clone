import dbConnect from "../../../utils/connectMongo";
import Options from "../../../models/optionsModel";

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
        console.log("looking for 1 document");
        let option = await Options.findById(id);

        if (!option) res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: option });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "PATCH":
      try {
        const updatedoOption = await Options.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!option) res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: updatedoOption });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedOption = await Options.findByIdAndDelete(id);

        if (!deletedOption) res.status(400).json({ success: false });

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
