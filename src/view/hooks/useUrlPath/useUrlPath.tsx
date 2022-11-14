import { usePathname } from 'next/navigation'

export const useUrlPath = () => {
  return usePathname()
}
