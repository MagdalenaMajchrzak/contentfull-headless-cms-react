import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

const client = createClient({
  space: import.meta.env.VITE_SPACEID,
  accessToken: import.meta.env.VITE_API_KEY,
  environment: 'master',
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      setLoading(false)
      const projects = response.items.map((item) => {
        const { productTitle, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { productTitle, url, id, img }
      })
      setProjects(projects)
      console.log(response)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}
