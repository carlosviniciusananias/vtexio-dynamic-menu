import React, { Fragment, useState, useEffect } from 'react'
import CategoryItem from './components/CategoryItem'
import axios from 'axios'

const DynamicMenu: StorefrontFunctionComponent = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getCategory()
  }, [])

  const getCategory = async () => {
    await axios.get('/api/catalog_system/pub/category/tree/3')
      .then(response => {
        return response.data
      })
      .then(data => {
        setCategories(data)

        setLoading(true)

        return
      })
      .catch(error => {
        console.log(error.response.data.error)
      })
  }

  const MountCategory = () => {
    return (
      <Fragment>
        {categories.map((category: Category) => {
          return <CategoryItem key={category.id} id={category.id} title={category.title} url={category.url} name={category.name} />
        })}
      </Fragment>
    )
  }

  return (
    <Fragment>
      {loading ? <MountCategory /> : null}
    </Fragment>
  )
}

export default DynamicMenu
