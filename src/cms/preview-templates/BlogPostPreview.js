import React from 'react'
import PropTypes from 'prop-types'

import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider } from "@material-ui/core/styles"

import { theme } from "assets/jss/cbb-material-ui"
import { BlogPostTemplate } from 'templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags'])
    return (
      <>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <BlogPostTemplate
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            tags={tags && tags.toJS()}
            title={entry.getIn(['data', 'title'])}
          />
        </MuiThemeProvider>
      </>
    )
  }
  
BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func
}
  
export default BlogPostPreview