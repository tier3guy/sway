import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const navLinks = [
        {
            label: 'Home',
            href: '#',
        },
        {
            label: 'Features',
            href: '#features',
        },
        {
            label: 'About Us',
            href: '#about',
        },
        {
            label: 'Blogs',
            href: '#',
            disabled: true, // TODO
        },
        {
            label: 'Contacts',
            href: '#footer',
        },
    ];

    return (
        <nav className='flex items-center justify-between py-4 md:py-2 px-6 relative'>
            <Logo />
            <div className='hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-4'>
                {navLinks.map((navLink) => {
                    return (
                        <Link
                            key={navLink.href}
                            href={navLink.href}
                            className={cn(
                                'text-sm text-gray-400 hover:text-purple-400',
                                navLink.disabled && 'cursor-not-allowed',
                            )}
                        >
                            <p>{navLink.label}</p>
                        </Link>
                    );
                })}
            </div>
            <div>
                <PrimaryButton label='Get Started' className='hidden md:block' />
                <Drawer>
                    <DrawerTrigger className='md:hidden'>
                        <Menu className='text-gray-500' />
                    </DrawerTrigger>
                    <DrawerContent className='pb-10 px-4'>
                        <p className='text-purple-500 font-semibold text-center text-sm mt-8'>
                            Hey buddy 👋 Where do you want to go ?
                        </p>
                        <div className='flex flex-wrap items-center gap-4 justify-center mt-4'>
                            {navLinks.map((navLink) => {
                                return (
                                    <DrawerClose key={navLink.href}>
                                        <Link
                                            href={navLink.href}
                                            className='text-gray-400 hover:text-purple-400'
                                        >
                                            <p>{navLink.label}</p>
                                        </Link>
                                    </DrawerClose>
                                );
                            })}
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </nav>
    );
}
