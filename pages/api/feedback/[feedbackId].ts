import type { NextApiRequest, NextApiResponse } from 'next';

import { buildFeedbackPath, extractFeedback } from '.';
import type { Feedback } from '.';

function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ feedback: Feedback | undefined }>
) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;