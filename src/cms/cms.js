import CMS from "netlify-cms-app";

import NewsPostPreview from "./preview-templates/NewsPostPreview";

CMS.init();
CMS.registerPreviewTemplate("news", NewsPostPreview);
