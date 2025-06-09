import React from 'react';

export default function JobPage() {
  return (
    <div className="jobs-layout">
      <main className="jobs-container">
        <h1 className="jobs-title">Jobs</h1>
        <p className="paragraph">
          The NSC Literary programs is not currently accepting applications for Editor positions.
          However, opportunities may become available throughout the year. These positions are open
          to all currently enrolled NSC students.
        </p>
        <p className="paragraph">
          For more information, please contact Faculty Advisor, Tracy Heinlein, at{' '}
          <a href="mailto:Tracy.Heinlein@seattlecolleges.edu" className="link">
            Tracy.Heinlein@seattlecolleges.edu
          </a>.
        </p>
      </main>
    </div>
  );
}
