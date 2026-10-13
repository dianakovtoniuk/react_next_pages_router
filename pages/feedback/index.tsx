import { Fragment, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { buildFeedbackPath, extractFeedback } from '../api/feedback/index';
import type { Feedback } from '../api/feedback/index';

interface FeedbackPageProps {
  feedbackItems: Feedback[];
}

const FeedbackPage: NextPage<FeedbackPageProps> = (props) => {
  const [feedbackData, setFeedbackData] = useState<Feedback>();

  function loadFeedbackHandler(id: string) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data: { feedback: Feedback }) => {
        setFeedbackData(data.feedback);
      }); // /api/some-feedback-id
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps<FeedbackPageProps> = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
};

export default FeedbackPage;