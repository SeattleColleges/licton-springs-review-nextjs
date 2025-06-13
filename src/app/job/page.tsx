import React from 'react';

export default function JobPage() {
  return (
    <div className="jobs-layout">
      <main className="jobs-container">
        <h1 className="jobs-title">Jobs</h1>
        <p className="paragraph">
          Staff of Licton Springs Review considers a variety
          of paid and volunteer editors, artists, proofreaders, 
          and selection-committee members all year-round.
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
