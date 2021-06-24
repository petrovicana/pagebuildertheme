import React from 'react'

const ArticleDetail = props => (
  <>
    <section
      className="c-article-header"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h2>{props.title}</h2>
    </section>
    <div className="page">
      <div
        className="c-article-content"
        dangerouslySetInnerHTML={{ __html: props.paragraph }}
      />
    </div>
  </>
)

export default ArticleDetail