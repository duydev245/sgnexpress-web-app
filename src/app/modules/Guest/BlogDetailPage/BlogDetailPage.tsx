import { useParams } from 'react-router-dom'

const BlogDetailPage = () => {
  const { slug } = useParams()

  return <div>BlogDetailPage: {slug}</div>
}

export default BlogDetailPage
