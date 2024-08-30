import Link from 'next/link'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User
} from 'lucide-react'


const Sidebar = () => {
  return (
    <Command>
      <CommandInput placeholder='Type a command' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
         {/* Suggestions */}
        <CommandGroup heading='Suggestions'>
        <LayoutDashboard className='mr-2 h-4 w-4' />
            <CommandItem>
              <Link href='/'>Dashboard</Link>
            </CommandItem>
            <CommandItem>
              <Newspaper className='mr-2 h-4 w-4' />
              <Link href='/posts'>Posts</Link>
            </CommandItem>
            <CommandItem>
              <Folders className='mr-2 h-4 w-4' />
              <Link href='#'>Categories</Link>
            </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        {/* Settings */}
        <CommandGroup heading='Settings'>
          <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default Sidebar