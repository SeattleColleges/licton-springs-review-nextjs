"use client";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

type FormDataType = {
    firstName: string;
    lastName: string;
    email: string;
    affiliation: string[];
    submissionType: string[];
    titles: string;
    medium: string;
    performance: string[];
    permission: boolean;
    files: File[];
  };

  export default function Submit() {
    const [formData, setFormData] = useState<FormDataType>({
      firstName: "",
      lastName: "",
      email: "",
      affiliation: [],
      submissionType: [],
      titles: "",
      medium: "",
      performance: [],
      permission: false,
      files: [],
    });
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let checked: boolean | undefined;
  
    if (type === "checkbox") {
      checked = (e.target as HTMLInputElement).checked;
    }
  
    setFormData((prev: FormDataType) => {
        const key = name as keyof FormDataType; 
        const prevValue = Array.isArray(prev[key]) ? (prev[key] as string[]) : [];
      
        if (type === "checkbox") {
          if (key === "permission") {
            return { ...prev, [key]: checked ?? false }; 
          }
          return { 
            ...prev,
            [key]: checked
              ? [...prevValue, value] 
              : prevValue.filter((item) => item !== value),
          };
        }
      
        return { ...prev, [key]: value };
      });
      
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (formData.files.length + files.length <= 5) {
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...Array.from(files)],
      }));
    } else {
      alert("You can only upload up to 5 files.");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileChange({ target: { files } } as React.ChangeEvent<HTMLInputElement>);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Submission received!");
  };

  return (
    <div className="submit-container">
        <h1 className="submit-title">SUBMIT</h1>
        <p className="submit-description">
        <strong><em>Licton Springs Review</em></strong> welcomes submissions from students and alumni of North Seattle College. 
        All submissions will be considered for publication in our print edition first, before possible 
        publication in the online edition. <em>Submissions in the print edition will be automatically 
        included in the online edition.</em> We accept poetry, short fiction, essays, and all forms of 
        visual media, and through our website can also publish video submission of original music 
        or literary performance.
        </p>

        <p className="submit-deadline"><strong>DEADLINE: FEBRUARY 14.</strong></p>
      
        <p>
        If you encounter difficulties with this form, please send your
        submissions directly to{" "}
        <a href="mailto:lsr@seattlecolleges.edu">lsr@seattlecolleges.edu</a>.
        Include your full name, email, and title(s) of the work (and if submitting
        visual art, please include media used).
        </p>
        <p className="submit-note">
        Submissions with incomplete or unclear information will be returned
        within one week for re-submission. Artists and writers accepted for
        publication in the annual <strong><em>Licton Springs Review</em></strong> will be notified in early
        spring.
        </p>

    <form className="submit-form" onSubmit={handleSubmit} aria-labelledby="form-title">
    <label htmlFor="firstName">First Name <span className="red-asterisk">*</span></label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          aria-required="true"
        />

    <label htmlFor="lastName">Last Name <span className="red-asterisk">*</span></label> 
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          aria-required="true"
        />

    <label htmlFor="email">Email <span className="red-asterisk">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
        />

        {/* Affiliation */}
        <label>Affiliation <span className="red-asterisk">*</span>
        </label>
        <div className="selection-container">
          {["Alumni", "Student"].map((option) => (
            <label key={option} className="selection-label">
              <input
                type="checkbox"
                name="affiliation"
                value={option}
                checked={formData.affiliation.includes(option)}
                onChange={handleChange}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Submission Type */}
        <label>Submission Type: <span className="red-asterisk">*</span></label>
        <p className="note1"> Up to 5 per genre (Word limit: 3500 
            for annual, 1500 for website/ Art-file size &lt;25 MB; 
            Format: .JPG) Please anonymize your file(s), 
            removing your name and any identifying information prior 
            to uploading. </p>

        <div className="selection-container">{["Art", "Audio", "Fiction", "Non-Fiction", "Poetry", "Performance"].map((option) => (
            <label key={option} className="selection-label">
                <input
                  type="checkbox"
                  name="submissionType"
                  value={option}
                  checked={formData.submissionType.includes(option)}
                  onChange={handleChange}
                />
                {option}
              </label>
            )
          )}
        </div>

        {/* Title(s) */}
    <label htmlFor="titles">Title(s) <span className="red-asterisk">*</span></label>
        <textarea
          id="titles"
          name="titles"
          value={formData.titles}
          onChange={handleChange}
          required
        />
        <p className="note">If submitting multiple pieces, please ensure the title of each piece is clear</p>

        {/* Visual Art Medium */}
    <label htmlFor="medium">Visual Art Medium</label>
        <textarea
          id="medium"
          name="medium"
          value={formData.medium}
          onChange={handleChange}
        />
        <p className="note">If submitting multiple pieces, please ensure the medium/media of each piece is clear</p>

        {/* Performance */}
        <label>Performance Type</label>
        <div className="selection-container">
          {["Pre-recorded", "Request to Record"].map((option) => (
            <label key={option} className="selection-label">
              <input
                type="checkbox"
                name="performance"
                value={option}
                checked={formData.performance.includes(option)}
                onChange={handleChange}
              />
              {option}
            </label>
          ))}
            <p className="note">If you select Request to Record, editors will follow up with you to schedule a session.</p>
        </div>

        <div className="submit-checkbox">
          <p>
            <strong>
              I understand that editors may make minor changes to my work. <span className="red-asterisk">*</span>
            </strong>
          </p>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="permission"
              checked={formData.permission}
              onChange={handleChange}
              required
            />
            <span>I agree</span>
          </div>
        </div>

        {/* File Upload */}
        <label htmlFor="fileInput">File Upload <span className="red-asterisk">*</span></label>
        <input
          type="file"
          id="fileInput"
          className="file-input"
          onChange={handleFileChange}
          multiple
          aria-describedby="fileHelp"
        />

        <div
          className="file-upload-area"
          onClick={() => document.getElementById("fileInput")?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e)}
        >
          <FaDownload size={30} />
          <p>Click or drag files to this area for upload.</p>
          <p id="fileHelp">You can upload up to 5 files.</p>
        </div>

        {/* Display Uploaded Files */}
        <div className="uploaded-files">
          {formData.files.length > 0 && (
            <ul>
              {formData.files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <p className="questions">
        Questions? <a href="mailto:lsr@seattlecolleges.edu">lsr@seattlecolleges.edu</a>
      </p>
    </div>
  );
}


