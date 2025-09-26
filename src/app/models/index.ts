import type { ReactNode } from "react"

export type LayoutProps = {
  children: ReactNode
}

export type Blog = {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  image: string
  slug: string
  category: string
  author: string
  authorRole: string
}
