import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Lucelia Abreu',
	description: 'Fazer dinheiro na internet com lives',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<Theme accentColor='orange' appearance='light'>{children}</Theme>
			</body>
		</html>
	);
}
