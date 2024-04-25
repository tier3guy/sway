import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import UserProvider from '@/providers/UserProvider';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sway',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={cn(poppins.className, 'w-screen overflow-x-hidden')}>
                <UserProvider>{children}</UserProvider>
                <Toaster />
            </body>
        </html>
    );
}
