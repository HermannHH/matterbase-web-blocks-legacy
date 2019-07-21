import React from 'react';

import { Accordion, Card } from 'react-bootstrap';

import FaqItem from './FaqItem';

export default function Faq() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center faq">
          <h1>Frequently Asked Questions</h1>
          <Accordion>
            <FaqItem
              index={0}
              question="How much does it cost to use Matterbase?"
              answer="Matterbase is free to use. We will introduce more pricing plans & features in the future, but will always have a 100% free tier."
            />
            <FaqItem
              index={1}
              question="When and how will you release paid plans?"
              answer="We are hard at work on our productivity Utopia and plan to release more features very soon. Some of these features will only be available to paid plans. Upgrading to any of the paid plans will be completely voluntary."
            />
            <FaqItem
              index={2}
              question="How do I ask for a feature?"
              answer={<p>Not seeing what you need? We love getting feedback from our loyal fans. If you have any feature in mind, please feel free to reach out on <a target="_blank" href="https://twitter.com/matterbaseio">twitter</a> or <a target="_blank" href="mailto:hermann@matterbase.io">email</a>. You can also use our product feedback form found here: <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1N9gAnQR9t0MTS8bTXgIvJcZcuv_vw4Hb53fiWQdftO_ldQ/viewform" target="_blank">Feedback Form</a></p>}
            />
            <FaqItem
              index={3}
              question="Will I have to provide my Credit Card Details?"
              answer="No, it is frustrating having to provide credit card details to try out a platform on a free tier. We will never do this."
            />
          </Accordion>

          </div>
        </div>
      </div>
  )
}
