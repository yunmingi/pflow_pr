// src/resume/Resume6.js
import React from "react";
import { Link } from "react-router-dom";

const Resume4 = () => {
  return (
    <div className="Resume">
      <h1>export</h1>
      <p>결과확인</p>
      <p>
        다운로드
      </p>
      <p>파일확장자 선택</p>
      <ul>
          <li>파일명입력</li>
          <li>다운로드</li>
        </ul>
        <h2>Finish</h2>
      <div className="Btn-group">
        <Link to="/resume/Resume6" className="Page-btn">
          BACK
        </Link>
        <Link to="/resume/Resume6" className="Page-btn">
          NEXT
        </Link>
      </div>
    </div>
  );
};

export default Resume6;
