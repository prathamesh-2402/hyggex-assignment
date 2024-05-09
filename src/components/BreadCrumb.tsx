import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'
import { Home } from 'lucide-react'

const BreadCrumb = () => {
  return (
    <Breadcrumb className='overflow-x-hidden'>
    <BreadcrumbList>
      <BreadcrumbItem className='cursor-pointer'>
        <Home/>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem className='cursor-pointer hover:underline'>
        Flashcard
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem className='cursor-pointer hover:underline'>
        Mathematics
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbPage className='font-semibold cursor-pointer hover:underline'>
        Relation and Function
      </BreadcrumbPage>
    </BreadcrumbList>
  </Breadcrumb>
  )
}

export default BreadCrumb;