import fs from "fs/promises";
import path from "path";

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

export const extractFeedback = async (filePath) => {
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData);
  return data;
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, feedbackText } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text: feedbackText,
    };

    const filePath = buildFeedbackPath();
    const data = await extractFeedback(filePath);

    data.push(newFeedback);
    await fs.writeFile(filePath, JSON.stringify(data));

    res.status(201).json({ message: "success!", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = await extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
};

export default handler;
