'use client'

import { WhatsappLogo } from '@phosphor-icons/react';
import { Container } from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';

export default function Products() {

	// 1 https://nmbinstituto.com.br/plano/lucrando-com-lives-652d8eb668486
	// 2 https://nmbinstituto.com.br/plano/consultoria-online-lucelia-abreu-652d3dea35922
	// 3 https://nmbinstituto.com.br/plano/consultoria-presencial-lucelia-abreu-652d842b01372

	return (
		<>
			<section className="flex bg-orange-100 py-12 " id="products">
				<Container>
				<span className='text-center text-3xl  font-normal flex gap-3 self-center mx-auto p-6'>Entre em contato com a gente pelo Whatsapp <WhatsappLogo size={36} weight='regular'/> </span>
					<div className="flex gap-12 flex-col md:flex-row">
						<Link href="https://wa.me/5587981237131?text=Desejo+comprar+apenas+o+Ebook" passHref>
							<div className="flex flex-col items-center gap-5">
								<Image
									src={'banner1.png'}
									loader={() =>
										'https://raw.githubusercontent.com/NMB-Instituto/lucelia/main/public/banner1.PNG'
									}
									className="rounded w-96 md:w-auto"
									width={1050}
									height={1350}
									alt="Banner compra 1"
								/>
								<div className="flex flex-col bg-white px-6 py-2 rounded items-center hover:bg-zinc-100">
									<span className="text-2xl text-zink-700 font-bold ">Comprar o Ebook</span>
									<span className="text-3xl text-amber-500 font-bold">R$ 97,00</span>
								</div>
							</div>
						</Link>
						<Link href="https://wa.me/5587981237131?text=Desejo+comprar+o+Ebook+e+a+consultoria+online" passHref>
							<div className="flex flex-col items-center gap-5">
								<Image
									src="banner2.png"
									loader={() =>
										'https://raw.githubusercontent.com/NMB-Instituto/lucelia/main/public/banner2.PNG'
									}
									className="rounded  w-96 md:w-auto"
									width={1050}
									height={1350}
									alt="Banner compra 2"
								/>
								<div className="flex flex-col bg-white px-6 py-2 rounded items-center hover:bg-zinc-100">
									<span className="text-2xl text-zink-700 font-bold text-center">
										Ebook + Consultoria <br/> online
									</span>
									<span className="text-3xl text-amber-500 font-bold">R$ 97,00</span>
								</div>
							</div>
						</Link>
						<Link href="https://wa.me/5587981237131?text=Desejo+comprar+o+Ebook+e+a+consultoria+presencial" passHref>
							<div className="flex flex-col items-center gap-5">
								<Image
									src="banner3.png"
									loader={() =>
										'https://raw.githubusercontent.com/NMB-Instituto/lucelia/main/public/banner3.PNG'
									}
									className="rounded  w-96 md:w-auto"
									width={1050}
									height={1350}
									alt="Banner compra 3"
								/>
								<div className="flex flex-col bg-white px-6 py-2 rounded items-center hover:bg-zinc-100">
									<span className="text-2xl text-zink-700 font-bold text-center flex-nowrap">
										Ebook + Consultoria Presencial
									</span>
									<span className="text-3xl text-amber-500 font-bold">R$ 97,00</span>
								</div>
							</div>
						</Link>
					</div>
				</Container>
			</section>
		</>
	);
}
