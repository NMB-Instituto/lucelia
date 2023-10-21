import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Lucelia Abreu',
	description: 'Fazer dinheiro na internet com lives',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={inter.className+" "+"overflow-x-hidden"}>
				<Theme accentColor='orange' appearance='light'>{children}</Theme>
				<Script src="../path/to/flowbite/dist/flowbite.min.js" />
			</body>
		</html>
	);
}
