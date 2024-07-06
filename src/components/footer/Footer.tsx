import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
export default function Footer() {
  return (
    <div className="footer">
      <h1>made by denisNejelschi</h1>
      <a href="https://github.com/denisNejelschi/homeworksAF/tree/master" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
