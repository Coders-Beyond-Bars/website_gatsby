import React from "react";
import PropTypes from "prop-types";

const HTMLContent = ({ content, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
    style={{ fontSize: 14 }}
  />
);

const Content = ({ content, className }) => (
  <div className={className} style={{ fontSize: 14 }}>
    {content}
  </div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes

export { HTMLContent }
export default Content
