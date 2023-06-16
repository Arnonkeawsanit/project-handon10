import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const usePost = () => {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        // console.log(data)

        console.log(data)
        setPost(data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return {
    post,
    isLoading,
  }
}
export default usePost
