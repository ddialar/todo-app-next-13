import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavigationItems = [
  {
    key: 'home',
    href: '/',
    label: 'Home'
  },
  {
    key: 'clients',
    href: '/clients',
    label: 'Clients'
  }
]

export const NavigationBar = () => {
  const pathname = usePathname()
  const selectedItem = pathname?.match(/^\/[a-z-]*\/?/gm)?.shift()?.replace('/', '') || 'home'

  return (
    <aside className="w-44 bg-slate-700 h-screen text-white">
      <ul className="flex flex-col space-y-3 justify-center px-3 py-3 w-full">
        {
          NavigationItems.map(({ key, href, label }) =>
            <li
              key={key}
              className={`
                px-2
                hover:bg-orange-300
                hover:text-gray-700
                ${selectedItem === key ? 'bg-orange-300 text-gray-700 font-bold' : ''}
              `}
            >
              <Link href={href} className='w-full'>{label}</Link>
            </li>
          )
        }
      </ul>
    </aside>
  )
}
