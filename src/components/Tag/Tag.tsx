import { TagContainer } from './styles'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'featured'
}

const Tag = ({ children }: TagProps) => {
  return <TagContainer>{children}</TagContainer>
}

export default Tag
