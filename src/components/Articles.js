import React, { useState} from 'react';
import ReactQuill from'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Articles.css'; // Import the CSS for styling

const Articles = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [displayPermission, setDisplayPermission] = useState('Agents only');
    const [tags, setTags] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [seoTitle, setSeoTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');
    const [noIndex, setNoIndex] = useState(false);

  return (
    <div className="no-articles-container">
      <div className="illustration">
        <img
          src="https://via.placeholder.com/300x200" // Replace with your actual image URL
          alt="No Articles"
        />
      </div>
      <h2 className="no-articles-message">There are no articles</h2>
      <button className="add-article-button">
        + Add article
      </button>

      <div className="add-article-container">
      <h2>Add Article</h2>

      <input
        type="text"
        placeholder="Add title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
      />

      <ReactQuill
        value={content}
        onChange={setContent}
        placeholder="Write your content here..."
        className="content-editor"
      />

      <div className="attachments">
        <label>
          <strong>Attachment:</strong>
          <input type="file" />
        </label>
        <span>Max. file size 20 MB</span>
      </div>

      <div className="options-panel">
        <div className="category-section">
          <h4>Category</h4>
          <select>
            <option value="Westayclose.0">Westayclose.0</option>
          </select>
        </div>

        <div className="display-permission">
          <h4>Display permission</h4>
          <label>
            <input
              type="radio"
              value="Agents only"
              checked={displayPermission === 'Agents only'}
              onChange={(e) => setDisplayPermission(e.target.value)}
            />{' '}
            Agents only
          </label>
          <label>
            <input
              type="radio"
              value="Registered users"
              checked={displayPermission === 'Registered users'}
              onChange={(e) => setDisplayPermission(e.target.value)}
            />{' '}
            Registered users
          </label>
          <label>
            <input
              type="radio"
              value="All users"
              checked={displayPermission === 'All users'}
              onChange={(e) => setDisplayPermission(e.target.value)}
            />{' '}
            All users
          </label>
        </div>

        <div className="tags-section">
          <h4>Tags</h4>
          <input
            type="text"
            placeholder="Select tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <small>Use comma to add multiple tags</small>
        </div>

        <div className="expiry-section">
          <h4>Article Expiry</h4>
          <input
            type="datetime-local"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>

        <div className="seo-section">
          <h4>SEO</h4>
          <input
            type="text"
            placeholder="Enter title tag here"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter description here"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter keywords separated by commas here"
            value={metaKeywords}
            onChange={(e) => setMetaKeywords(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={noIndex}
              onChange={() => setNoIndex(!noIndex)}
            />{' '}
            Noindex and Nofollow
          </label>
        </div>
      </div>

      <div className="buttons">
        <button className="publish-btn">Publish</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
    </div>
  );
};

export default Articles;
