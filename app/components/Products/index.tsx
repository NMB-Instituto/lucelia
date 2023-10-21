'use client';

import { SealCheck } from '@phosphor-icons/react';
import { Container } from '@radix-ui/themes';
import Button from '../Button';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

export default function Products() {
	return (
		<>
			<section className="flex bg-orange-100 py-12 " id="products">
				<Container>
					<div className="flex gap-12 flex-col md:flex-row">
						<div className="flex flex-col items-center gap-5">
							<Image
								src="/banner1.png"
								className="rounded"
								width={1050}
								height={1350}
								alt="Banner compra 1"
							/>
							<span className="text-2xl text-zink-700 font-bold bg-white px-6 py-2 rounded">
								R$ 97,00
							</span>
						</div>
						<div className="flex flex-col items-center gap-5">
							<Image
								src="/banner2.png"
								className="rounded"
								width={1050}
								height={1350}
								alt="Banner compra 1"
							/>
							<span className="text-2xl text-zink-700 font-bold bg-white px-6 py-2 rounded">
								R$ 497,00
							</span>
						</div>
						<div className="flex flex-col items-center gap-5">
							<Image
								src="/banner3.png"
								className="rounded"
								width={1050}
								height={1350}
								alt="Banner compra 1"
							/>
							<span className="text-2xl text-zink-700 font-bold bg-white px-6 py-2 rounded">
								R$ 1297,00
							</span>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
	return (
		<>
			<section className="flex bg-orange-100 py-12 " id="products">
				<Container>
					<div className="flex items-center gap-12 flex-col">
						{/* <p className="text-center font-semibold text-lg">
							Desvende os segredos para alcançar o sucesso nas Lives de Vendas no Instagram com
							nosso ebook abrangente. De conceitos iniciais sobre o mundo das Lives a estratégias
							avançadas de marketing e colaborações lucrativas, cada capítulo é uma jornada de
							aprendizado. Prepare-se para transformar sua presença digital, construir uma marca
							pessoal influente e aumentar suas vendas.
							<br />
							<br /> Este ebook é o guia definitivo para dominar o Instagram Live e garantir seu
							lugar no futuro do comércio online. Invista agora e comece a conquistar resultados
							extraordinários.
						</p> */}
						<div className="flex flex-col md:flex-row gap-12 items-stretch">
							{/* 1 card */}
							<div className="flex flex-col rounded-lg justify-between bg-white items-center p-5 md:py-7 md:px-12 shadow-lg gap-12">
								<h3 className="font-bold text-2xl">Ebook</h3>
								<ul>
									<li className="flex gap-2 ">
										<SealCheck size={24} color="#6CBB8A" />
										<span className="font-semibold">PDF do Ebook</span>
									</li>
								</ul>
								<div className="flex flex-col items-center gap-2">
									<span className="text-xl text-pink-700 font-bold">R$ 97,00</span>
									<Button
										as="link"
										href="https://nmbinstituto.com.br/plano/lucrando-com-lives-652d8eb668486">
										Comprar
									</Button>
								</div>
							</div>
							{/* 2 card */}
							<div className="flex flex-col rounded-lg justify-between bg-white items-center p-5 md:py-7 md:px-12 shadow-lg gap-12  border-2 border-orange-400">
								<h3 className="font-bold text-2xl text-center">+ Consultoria online</h3>
								<ul>
									<li className="flex gap-2 ">
										<SealCheck size={24} color="#6CBB8A" />
										<span className="font-semibold">PDF do Ebook</span>
									</li>
									<li className="flex gap-2 ">
										<SealCheck size={24} color="#6CBB8A" />
										<span className="font-semibold">Tirar suas dúvidas falando comigo</span>
									</li>
									<li className="flex gap-2 ">
										<SealCheck size={24} color="#6CBB8A" />
										<span className="font-semibold">Consultoria Online</span>
									</li>
								</ul>
								<div className="flex flex-col items-center gap-2">
									<span className="text-xl text-pink-700 font-bold">R$ 497,00</span>
									<Button
										as="link"
										href="https://nmbinstituto.com.br/plano/consultoria-online-lucelia-abreu-652d3dea35922">
										Comprar
									</Button>
								</div>
							</div>
							{/* 3 card */}
							<div className="flex flex-col rounded-lg justify-between bg-white items-center p-5 md:py-7 md:px-12 shadow-lg gap-12">
								<h3 className="font-bold text-2xl text-center">+ Consultoria presencial</h3>
								<ul className="flex flex-col">
									<li className="flex gap-2 ">
										<SealCheck size={24} color="#6CBB8A" />
										<span className="font-semibold">PDF do Ebook</span>
									</li>
									<li className="flex gap-2 ">
										<SealCheck size={24} color="#6CBB8A" />
										<span className="font-semibold">Tirar suas dúvidas falando comigo</span>
									</li>
									<li className="flex gap-2 ">
										<SealCheck size={24} color="#6CBB8A" />
										<span className="font-semibold">
											Consultoria Presencial no seu estabelecimento
										</span>
									</li>
								</ul>
								<div className="flex flex-col items-center gap-2">
									<span className="text-xl text-pink-700 font-bold">R$ 1297,00</span>
									<Button
										as="link"
										href="https://nmbinstituto.com.br/plano/consultoria-presencial-lucelia-abreu-652d842b01372">
										Comprar
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
