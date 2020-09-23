import CMS from "netlify-cms-app"

import BlogPostPreview from "./preview-templates/BlogPostPreview"

import 'assets/sass/main.sass'

CMS.init()
CMS.registerPreviewStyle("main.sass")
CMS.registerPreviewTemplate("blog", BlogPostPreview)