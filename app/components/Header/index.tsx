import { Button, Container, Flex, Heading, Section } from '@radix-ui/themes';

export default function Header() {
	return (
		<header className="flex w-full items-center justify-between p-5">
			<Heading>Lucélia Abreu</Heading>
			<Button size="3" variant="outline" radius='full'>Contato</Button>
		</header>
	);
}
