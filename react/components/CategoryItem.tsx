import React, { Fragment } from 'react'

const CategoryItem = ({ id, name, url, title }: Category) => {
  return (
    <Fragment>
      <div key={id}>
        <a title={title} href={url}>
          <p>{name}</p>
        </a>
      </div>
    </Fragment>
  )
}

export default CategoryItem
