import Link from "next/link";

export default function Help() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>Help</h1>

      <p>
        Welcome to the Licton Springs Review Help Center. Whether you&apos;re here to
        submit your work, join our team, or explore past publications, we&apos;re
        here to guide you every step of the way.
      </p>

      <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
         Frequently Asked Questions
      </h2>

      <p style={{ marginBottom: "16px" }}>
        <strong>Q: Who can submit to the Licton Springs Review?</strong>
        <br />
        A: Submissions are open to all current North Seattle College students.
        We welcome poetry, fiction, nonfiction, visual art, and multimedia
        pieces.
      </p>

      <p style={{ marginBottom: "16px" }}>
        <strong>Q: How do I submit my work?</strong>
        <br />
        A: Visit our <Link href="/submit">Submissions Page</Link> for
        detailed guidelines and deadlines. Please ensure your files follow the
        accepted formats.
      </p>

      <p style={{ marginBottom: "16px" }}>
        <strong>Q: When will I hear back about my submission?</strong>
        <br />
        A: Submissions are reviewed after the posted deadline. You’ll be
        notified of your submission status via email within 3–4 weeks.
      </p>

      <p style={{ marginBottom: "16px" }}>
        <strong>
          Q: Are there any current editorial or volunteer positions available?
        </strong>
        <br />
        A: Editor and volunteer positions open throughout the academic year.
        These roles are open to current NSC students. Check our{" "}
        <Link href="/job">Jobs page</Link> for the latest updates.
      </p>
    </div>
  );
}