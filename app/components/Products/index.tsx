'use client';

import { SealCheck } from '@phosphor-icons/react';
import { Container } from '@radix-ui/themes';
import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';



export default function Products() {
	return (
		<>
			<section className="flex bg-orange-100 py-12 " id="products">
				<Container>
					<div className="flex gap-12 flex-col md:flex-row">
						<Link
							href="https://nmbinstituto.com.br/plano/lucrando-com-lives-652d8eb668486"
							passHref>
							<div className="flex flex-col items-center gap-5">
								<Image
									src={"banner1.png"}
									loader={() => "https://raw.githubusercontent.com/NMB-Instituto/lucelia/main/public/banner1.PNG"}
									className="rounded w-96 md:w-auto"
									width={1050}
									height={1350}
									alt="Banner compra 1"
								/>
								<span className="text-2xl text-zink-700 font-bold bg-white px-6 py-2 rounded">
									R$ 97,00
								</span>
							</div>
						</Link>
						<Link
							href="https://nmbinstituto.com.br/plano/consultoria-online-lucelia-abreu-652d3dea35922"
							passHref>
							<div className="flex flex-col items-center gap-5">
								<Image
									src="banner2.png"
									loader={() => "https://raw.githubusercontent.com/NMB-Instituto/lucelia/main/public/banner2.PNG"}
									className="rounded  w-96 md:w-auto"
									width={1050}
									height={1350}
									alt="Banner compra 2"
								/>
								<span className="text-2xl text-zink-700 font-bold bg-white px-6 py-2 rounded">
									R$ 497,00
								</span>
							</div>
						</Link>
						<Link
							href="https://nmbinstituto.com.br/plano/consultoria-presencial-lucelia-abreu-652d842b01372"
							passHref>
							<div className="flex flex-col items-center gap-5">
								<Image
									src="banner3.png"
									loader={() => "https://raw.githubusercontent.com/NMB-Instituto/lucelia/main/public/banner3.PNG"}
									className="rounded  w-96 md:w-auto"
									width={1050}
									height={1350}
									alt="Banner compra 3"
								/>
								<span className="text-2xl text-zink-700 font-bold bg-white px-6 py-2 rounded">
									R$ 1297,00
								</span>
							</div>
						</Link>
					</div>
				</Container>
			</section>
		</>
	);
	
}
