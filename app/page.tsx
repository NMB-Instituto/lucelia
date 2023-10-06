import { Container, Flex, Heading, Strong, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Header from './components/Header';
import Button from './components/Button';

export default function Home() {
	return (
		<>
			<Header />
			<Container size="4" p="6">
				<div className="flex items-center justify-between flex-col md:flex-row " >
					<Flex direction="column" gap="2">
						<Heading as="h1" style={{ fontSize: 48, lineHeight: '100%' }}>
							Transforme suas Lives em Lucro: <br /> Meu Caminho até os{' '}
							<Text className='text-pink-700'>R$ 300 Mil!</Text>
						</Heading>
						<Heading as="h3" color="gray">
							Tenha rendas superiores a <Text className='text-pink-800'>R$ 1000,00</Text> por live
						</Heading>
						<Button>Eu quero esse ebook</Button>
					</Flex>
					<div className="flex">
						<Image src="/lucelia_banner.png" alt="Lucelia Deodato" width={360} height={360} />
					</div>
				</div>
			</Container>
			<section className="flex bg-gradient-to-bl from-pink-500 via-pink-600  to-orange-500 w-screen">
				<div className='container p-8'>
					<div className='flex items-center justify-between flex-col md:flex-row '>
						<Heading size="7" className="uppercase text-white">
							Por que este E-Book é unico?
						</Heading>
						<div className="flex flex-col gap-3 md:w-3/5">
							<p  className="text-white " >
								Este eBook é único porque oferece um roteiro passo a passo, baseado em estratégias
								comprovadas, para transformar suas transmissões ao vivo no Instagram em uma fonte
								consistente de lucros. Com insights práticos, exemplos reais de sucesso e
								orientações atualizadas, este guia é o seu caminho para conquistar resultados reais
								e duradouros nas mídias sociais.
							</p>
							<Button>Eu quero esse E-Book</Button>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-red-50">
				<Container size="4" p="6" className="items-center justify-center">
					<div className='flex items-center justify-center gap-12 flex-col md:flex-row' gap="6">
						<Flex direction="column" align="center" justify="center" gap="2">
							<Image src="/icon1.png" width={75} height={75} alt="Icone" />
							<Strong className="text-center">Maior Engajamento com o Público</Strong>
							<Text className="w-48" align="center">
								Aprenda a criar conteúdo envolvente que transforma seguidores em fãs leais.{' '}
							</Text>
						</Flex>
						<Flex direction="column" align="center" justify="center" gap="2">
							<Image src="/icon2.png" width={75} height={75} alt="Icone" />
							<Strong className="text-center">Aumento das Vendas</Strong>
							<Text className="w-48" align="center">
								Descubra estratégias comprovadas para impulsionar as vendas através das Lives no
								Instagram.{' '}
							</Text>
						</Flex>
						<Flex direction="column" align="center" justify="between" gap="2">
							<Image src="/icon3.png" width={75} height={75} alt="Icone" />
							<Strong className="text-center">Construção de Marca e Credibilidade</Strong>
							<Text className="w-48" align="center">
								Estabeleça uma marca forte e memorável que se destaca da concorrência.{' '}
							</Text>
						</Flex>
					</div>
				</Container>
			</section>
			<section className=" mt-5 py-12 ">
				<Container className="">
					<div className='flex items-center justify-center gap-12 flex-col md:flex-row'>
						<div className="flex flex-col gap-6 max-w-md p-5">
							<h2 className="text-5xl font-bold underline mb-6">
								Torne suas redes <br />
								sociais, máquinas de lucro.
							</h2>

							<div className="flex flex-col gap-1">
								<i>
									<Image src="/AirplaneTilt.png" alt="Icone" width={24} height={24} />
								</i>
								<h3 className="text-2xl font-semibold">
									Observação das Mudanças no Comportamento do Consumidor
								</h3>
								<p>
									A pandemia trouxe mudanças no comportamento do consumidor, criando a oportunidade
									de usar transmissões ao vivo no Instagram para se conectar com um público
									crescente e conseguir comercializar de uma nova maneira.{' '}
								</p>
							</div>
							<div className="flex flex-col gap-1">
								<i>
									<Image src="/AirplaneTilt.png" alt="Icone" width={24} height={24} />
								</i>
								<h3 className="text-2xl font-semibold">Como se manter no mercado:</h3>
								<p>
									A chave para o sucesso nas transmissões ao vivo é a consistência. Mantendo um
									cronograma regular de Lives, os criadores de conteúdo podem manter o interesse da
									audiência e criar expectativa. Estratégias como programação semanal ou mensal de
									Lives ajudam a manter o público envolvido e voltando para mais.
								</p>
							</div>
							<div className="flex flex-col gap-1">
								<i>
									<Image src="/AirplaneTilt.png" alt="Icone" width={24} height={24} />
								</i>
								<h3 className="text-2xl font-semibold">Foco na Interação e Engajamento:</h3>
								<p>
									Além de manter a frequência, a ênfase na interação com o público, respondendo a
									perguntas e comentários em tempo real, foi crucial para construir relacionamentos
									duradouros e fidelizar seguidores. Esse relacionamento sustentável contribuiu para
									o sucesso a longo prazo nas Lives.
								</p>
							</div>
						</div>
						<div className="flex-col items-center justify-center gap-5 hidden md:flex">
							<Image src="/live_mockup.png" alt="Live mockup" width={362} height={362} />
							<Button>Eu quero esse E-Book</Button>
						</div>
					</div>
				</Container>
			</section>
			<section className="flex bg-orange-500 p-5  bg-gradient-to-bl from-pink-500 via-pink-600  to-orange-500">
				<Container>
					<div className="flex items-center flex-col-reverse md:flex-row justify-between rounded bg-white shadow-sm p-5 gap-6">
						<Image src="/livro_mockup.png" width={180} height={180} alt="Livro de lucelia" />
						<div className="flex flex-col items-center md:items-start justify-center gap-4 max-w-xs">
							<span className='text-2xl font-bold text-center md:text-start'>Transforme suas Lives em Lucro: Meu Caminho até os <span className='text-pink-500'>R$ 300 Mil!</span></span>
							<h2>
								Descrição explicando toda a situação e falando sobre o ebook num contexto geral de
								compra
							</h2>
							<Button>Eu quero esse Ebook</Button>
						</div>
					</div>
				</Container>
			</section>
			<section className='bg-pink-50'>
				<Container p="5">
					<div className='flex items-center justify-between flex-col md:flex-row'>
						<h2 className='text-4xl uppercase font-bold '>Garanta já o seu!</h2>
						<Button size='2'>CLIQUE AQUI</Button>
					</div>
				</Container>
			</section>
		</>
	);
}
