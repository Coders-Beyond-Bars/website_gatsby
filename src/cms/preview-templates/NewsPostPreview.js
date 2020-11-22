import React from "react";

import { NewsPostTemplate } from "templates/news-post";

const NewsPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    <div id="preview-template">
      <NewsPostTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={tags && tags.toJS()}
        title={entry.getIn(["data", "title"])}
      />
    </div>
  );
};

export default NewsPostPreview;
