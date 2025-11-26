// Stick Header

window.addEventListener("scroll", function () {
	const header = document.querySelector(".header");
	const titleHeight = document.querySelector(".header").scrollHeight;

	if (window.scrollY > 150) {
		header.classList.add("header--sticky");
	} else {
		header.classList.remove("header--sticky");
	}
});

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// //Swiper (inicialização)

// //Type 1: Swiper Navigation
// var swiper = new Swiper('.swiper--navigation', {
// 	direction: 'horizontal',
// 	loop: false,
// 	slidesPerView: 1,
// 	spaceBetween: 30,

// 	//Mousewheel control
// 	mousewheel: true,

// 	//Keyboard control
// 	keyboard: {
// 		enabled: true,
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	//Pagination (if needed)
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 		type: 'bullets',
// 	},

// 	// Scrollbar (if needed)
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });

//Type 2: Swiper Vertical
// var swiperVertical = new Swiper('.swiper--vertical', {
// 	direction: 'vertical',
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	mousewheel: true,
// 	pagination: {
// 		el: '.swiper-pagination2',
// 		clickable: true,
// 	},
// });

// //Type 3: Effect Card
// var swiperVertical = new Swiper('.swiper--effect-card', {
// 	effect: 'cards',
// 	grabCursor: true,
// 	pagination: {
// 		el: '.swiper-pagination3',
// 		clickable: true,
// 	},
// });

// Botão de copiar podcast

const copyButton = document.querySelectorAll(".copy-to-clip");

copyButton.forEach((btn) => {
	btn.addEventListener("click", () => {
		copyToClipboard(btn);
		// tooltipShow(btn);

		tooltipFeedback(btn);
	});
});

function copyToClipboard(e) {
	const textToCopy = e.getAttribute("data-link");
	const textarea = document.createElement("textarea");
	textarea.setAttribute("readonly", "");
	textarea.style.position = "absolute";
	textarea.value = textToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
	let feedback = $('[data-toggle="tooltip"]');

	// feedback.tooltip('show');

	b.addEventListener("mouseout", () => {
		feedback.tooltip("hide");
	});
}

// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll(".lightbox");
// const lightboxImage = imageToLightbox.querySelector("img");

console.log(imageToLightbox);

imageToLightbox.forEach((image) => {
	image.addEventListener("click", () => {
		if (!image.classList.contains("lightbox--show")) {
			const getImage = image.querySelector("img");
			const getImageSrc = getImage.getAttribute("src");
			const imageLightbox = document.createElement("div");

			imageLightbox.classList.add("lightbox__image");

			document.body.appendChild(imageLightbox);
			imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
			console.log(getImageSrc);

			image.classList.add("lightbox--show");

			document.body.style.overflow = "hidden";
			document.body.style.userSelect = "none";

			closeLightbox(imageLightbox);
		}

		function closeLightbox(e) {
			const lightboxOpen = document.querySelector(".lightbox__image");
			e.addEventListener("click", () => {
				document.body.removeChild(e);
				image.classList.remove("lightbox--show");
				document.body.style.overflow = "auto";
				document.body.style.userSelect = "auto";
			});
		}
	});
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	const boxAttribute = box.getAttribute("data-box");

	const boxLabel = box.querySelector(".label");

	boxLabel.innerHTML = boxAttribute;
});

// Modal - Criação dos modais principais

const modalInfos = {
	creditos: {
		ariaLabel: "creditos",
		modalSize: "modal-lg",
		modalTitle: "Créditos",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Alexandre Padilha</p>
						<p class="small text-muted"><em>Ministro</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>
						<p class="mb-1">Marly Cruz</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora geral</em></p>

						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora adjunta</em></p>
						
						<p class="mb-1">Renata Bernardes David</p>
						<p class="small text-muted"><em>Coordenadora de produção</em></p>

						<p class="mb-1">Juliana Dutra</p>
						<p class="small text-muted"><em>Gerente de produção</em></p>

						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de comunicação</em></p>
					
						<p class="mb-1">Roberta Saboya</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>

						<p class="mb-1">Pilar Tavares Veras Florentino</p>
						<p class="small text-muted"><em>Consultora técnico-pedagógico</em></p>
					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>UX/UI Designer e Front-end</em></p>
						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>

						<p class="mb-1">Bruno Athaydes</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>
			
						<p class="mb-1">Teo Venerando</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>
			
						<span class="h6 mb-3 d-block">Recursos Educacionais</span>
						
						<p class="mb-1">Carmélia Brito</p>
						<p class="small text-muted"><em>Bibliotecária</em></p>

						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>

						<p class="mb-1">Janaina Vieira</p>
						<p class="small text-muted"><em>Revisão de português</em></p>


						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de Tecnologias Educacionais</em></p>

						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de Tecnologias Educacionais</em></p>

						<p class="mb-1">Fábio Carneiro</p>
						<p class="small text-muted"><em>Designer gráfico e web designer</em></p>
					</div>

					<span class="h5 mb-3 d-block">Coordenação Acadêmica</span>
					
					<div class="mb-5">
						<p class="mb-1">Alexandra Ribeiro Mendes de Almeida</p>
						<p class="small text-muted mb-0"><em>Programa de Computação Científica (PROCC) – Fiocruz</em></p>
						<p class="small text-muted"><em>Coordenadora</em></p>

						<p class="mb-1">Carlos Antonio de Souza Teles Santos</p>
						<p class="small text-muted mb-0"><em>Centro de Integração de Dados e Conhecimentos para Saúde (CIDACS) – Fiocruz Bahia</em></p>
						<p class="small text-muted"><em>Coordenador</em></p>


						<span class="h6 mb-3 d-block">Conteudistas</span>
						
						<p class="mb-1"><strong>Módulo 1: Lógica e Linguagem de Programação</strong></p>
						
						<p class="mb-1">Juracy Bertoldo</p>
						<p class="small text-muted mb-0"><em>Centro de Integração de Dados e Conhecimentos para Saúde (CIDACS) – Fiocruz</em></p>
						<p class="small text-muted mb-0"><em>Instituto de Saúde Coletiva da Universidade Federal da Bahia (ISC/UFBA)</em></p>
						<p class="small text-muted"><em>[Aula 1 e 2]</em></p>

						<p class="mb-1">Pilar Tavares Veras Florentino</p>
						<p class="small text-muted mb-0"><em>Centro de Integração de Dados e Conhecimentos para Saúde (CIDACS) – Fiocruz</em></p>
						<p class="small text-muted"><em>[Aula 1 e 2]</em></p>

						<p class="mb-1 mt-5"><strong>Módulo 2: Estatística Descritiva e Comunicação de Resultados</strong></p>

						<p class="mb-1">Alexandra Ribeiro Mendes de Almeida</p>
						<p class="small text-muted mb-0"><em>Programa de Computação Científica (PROCC) – Fiocruz</em></p>
						<p class="small text-muted"><em>[Aula 1]</em></p>

						<p class="mb-1">Thiago Cerqueira-Silva</p>
						<p class="small text-muted mb-0"><em>London School of Hygiene and Tropical Medicine (LSHTM)</em></p>
						<p class="small text-muted"><em>[Aula 2]</em></p>

						
						<p class="mb-1 mt-5"><strong>Módulo 3: Modelos estatísticos</strong></p>

						<p class="mb-1">Alexandra Ribeiro Mendes de Almeida</p>
						<p class="small text-muted mb-0"><em>Programa de Computação Científica (PROCC) – Fiocruz</em></p>
						<p class="small text-muted"><em>[Aula 3]</em></p>

						<p class="mb-1">Aline Araújo Nobre</p>
						<p class="small text-muted mb-0"><em>Programa de Computação Científica, Presidência, Fundação Oswaldo Cruz</em></p>
						<p class="small text-muted"><em>[Aula 1 e 2]</em></p>

						<p class="mb-1">Thiago Cerqueira-Silva</p>
						<p class="small text-muted mb-0"><em>London School of Hygiene and Tropical Medicine (LSHTM)</em></p>
						<p class="small text-muted"><em>[Aula 4]</em></p>
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod1: {
		ariaLabel: "bibliografiaMod1",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia Módulo 1",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-11">
					<div class="mb-5">
						<!-- Accordion -->
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Aula 1</button>
								</h5>
								<div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANDRADE, M. V. <em>et al.</em> Indicadores e medidas em saúde: conceitos e aplicações para as informações disponíveis no Brasil. <em>In</em>: SALDANHA, R. F.; PEDROSO, M. M.; MAGALHÃES, M. A. F. M. <strong>Avaliação de impacto das políticas de saúde</strong>: um guia para o SUS. Brasil: Ministério da Saúde, Secretaria de Ciência, Tecnologia, Inovação e Complexo da Saúde, 2023. cap. 3, p. 81-123. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/avaliacao_impacto_politicas_saude_guia_sus.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/avaliacao_impacto_politicas_saude_guia_sus.pdf</a>. Acesso em: 09 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARRETO, M. L. Desigualdades em saúde: uma perspectiva global. <strong>Ciência & Saúde Coletiva</strong>, v. 22, n. 7, p. 2097-2108, 2017. Disponível em: <a href="https://www.scielo.br/j/csc/a/XLS4hCMT6k5nMQy8BJzJhHx/" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csc/a/XLS4hCMT6k5nMQy8BJzJhHx/</a>. Acesso em: 09 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Constituição (1988)</strong>. Constituição da República Federativa do Brasil. Brasília, DF: Senado, 1988.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei n° 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. <strong>Diário Oficial da União</strong>, Brasília, DF, 20 set. 1990a. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l8080.htm</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAVALCANTE, R. B.; PINHEIRO, M. M. K. Contexto atual da construção da Política Nacional de Informação e Informática em Saúde (PNIIS). <strong>Tendências da Pesquisa Brasileira em Ciência da Informação</strong>, v. 7, n. 1, p. 45-59, 2014. Disponível em: <a href="https://revistas.ancib.org/index.php/tpbci/article/view/347/347" target="_blank" rel="noopener noreferrer">https://revistas.ancib.org/index.php/tpbci/article/view/347/347</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELHO-NETO, G. C.; CHIORO, A. Afinal, quantos Sistemas de Informação em Saúde de base nacional existem no Brasil? <strong>Cadernos de Saúde Pública</strong>, v. 37, n. 7, 2021. Disponível em: <a href="https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELI, C. M. <em>et al.</em> Sistemas de Informação em Saúde. <em>In</em>: MEDRONHO, R. A. (org.). <strong>Epidemiologia</strong>. 2. ed. São Paulo: Atheneu, 2009. cap. 29, p. 525-534.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FARIA, L. L. F. <strong>Saúde digital nas cidades inteligentes no Brasil</strong>: abordagens, articulações possíveis, avanços e desafios. 2023. 178 f. Dissertação (Mestrado em Saúde Pública) - Escola Nacional de Saúde Pública Sergio Arouca, Fundação Oswaldo Cruz, Rio de Janeiro, 2023. Disponível em: <a href="https://www.arca.fiocruz.br/handle/icict/62767" target="_blank" rel="noopener noreferrer">https://www.arca.fiocruz.br/handle/icict/62767</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JANNUZZI, P. M. Estatísticas e políticas públicas orientadas por evidências no Brasil: caso das políticas de desenvolvimento social nos anos 2000. <strong>Revista Brasileira de Geografia</strong>, v. 64, n. 1, p. 37-54, 2019.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAES, I. H. S. <strong>Política, tecnologia e informação em saúde</strong>: a utopia da emancipação. Salvador: Instituto de Saúde Coletiva/UFBa e Casa da Qualidade, 2002.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAES, I. H. S.; FORNAZIN, M. Nem tecnoforia nem tecnofobia: abordagem crítica da incorporação das tecnologias digitais na saúde. <em>In</em>: PAIM, Jairnilson Silva; ALMEIDA-FILHO, Naomar (org.). <strong>Saúde coletiva</strong>: teoria e prática. 2. ed. Rio de Janeiro: Medbook, 2022. v. 1, p. 670-691.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAES, I.; GOMEZ, M. Informação e informática em saúde: caleidoscópio contemporâneo da saúde. <strong>Ciência & Saúde Coletiva</strong>, v. 12, n. 3, p. 553-565, 2007. Disponível em: <a href="https://www.scielo.br/j/csc/a/45Nb5fbzVr3YDqJRKLhbvWk/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csc/a/45Nb5fbzVr3YDqJRKLhbvWk/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PROADESS. <strong>Projeto de Avaliação do Desempenho do Sistema de Saúde</strong>. Laboratório de Informação em Saúde. Instituto de Comunicação e Informação Científica e Tecnológica em Saúde. Fundação Oswaldo Cruz). Rio de Janeiro: Fiocruz, 2024. Disponível em: <a href="https://www.proadess.icict.fiocruz.br/index.php" target="_blank" rel="noopener noreferrer">https://www.proadess.icict.fiocruz.br/index.php</a>. Acesso em: 09 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RIBEIRO, M. C. S. A.; BARATA, R. B. Condições de saúde da população brasileira. <em>In</em>: GIOVANELLA, L. (org.). <strong>Políticas e sistema de saúde no Brasil</strong>. 2. ed. rev. e ampliada. Rio de Janeiro: Editora Fiocruz: Centro Brasileiro de Estudos da Saúde, 2012. cap. 5, p. 143-181.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDE INTERAGENCIAL DE INFORMAÇÕES PARA A SAÚDE - RIPSA. (org.). <strong>Indicadores básicos para a saúde no Brasil</strong>: conceitos e aplicações. 2. ed. Brasília: Organização Pan-Americana da Saúde, Escritório Regional para as Américas da Organização Mundial da Saúde, 2008. Disponível em: <a href="http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf" target="_blank" rel="noopener noreferrer">http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf</a>. Acesso em: 08 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RISI, J. B. Informação em saúde no Brasil: a contribuição da Ripasa. <strong>Ciência & Saúde Coletiva</strong>, v. 11, p. 1049-1053, 2006. Disponível em: <a href="https://www.scielo.br/j/csc/a/YntJzFbXMN69KJkfsNvfMNn/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csc/a/YntJzFbXMN69KJkfsNvfMNn/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROUQUAYROL, M. Z. Contribuição da epidemiologia. <em>In</em>: CAMPOS, G. W. S. <em>et al.</em> (org.). <strong>Tratado de saúde coletiva</strong>. 2. ed. São Paulo: Hucitec, 2021. p. 343-398.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VIANA, A. L. d’A.; BAPTISTA, T. W. F. Análise de políticas de saúde. <em>In</em>: GIOVANELLA, L. (org.). <strong>Políticas e sistema de saúde no Brasil</strong>. 2. ed. rev. ampliada. Rio de Janeiro: Editora Fiocruz: Centro Brasileiro de Estudos da Saúde, 2012. cap. 2, p. 59-88.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VERMELHO, L. L.; COSTA, A. J. L.; KALE, P. L. Indicadores de saúde. <em>In</em>: MEDRONHO, R. A. (editor-chefe). <strong>Epidemiologia</strong>. 2. ed. São Paulo: Atheneu, 2009. cap. 3, p. 31-82.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Aula 2</button>
								</h5>
								<div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGUIAR, A. C. Informação e atividades de desenvolvimento científico, tecnológico e industrial: tipologia proposta com base em análise funcional. <strong>Ci. Inf</strong>., Brasília, DF, v. 20, n. 1, p. 8, jan./jun. 1991.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ARAÚJO, C. A. A. Correntes teóricas da ciência da informação. <strong>Ci. Inf</strong>., Brasília, DF, v. 38, n. 3, p. 192-204, set./dez., 2009. Disponível em <a href="https://doi.org/10.1590/S0100-19652009000300013" target="_blank" rel="noopener noreferrer">https://doi.org/10.1590/S0100-19652009000300013</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BAPTISTA, P. I. C. F. <strong>Do papiro ao e-book</strong>: uma história social dos suportes da informação. 2014. 48 f. Monografia de conclusão de curso (Graduação em Biblioteconomia e Gestão de Unidade de Informação). Universidade Federal do Rio de Janeiro, Rio de Janeiro. Disponível em: <a href="https://pantheon.ufrj.br/bitstream/11422/265/1/Pedro%20Ivo%20BiblioTCCpdf.pdf" target="_blank" rel="noopener noreferrer">https://pantheon.ufrj.br/bitstream/11422/265/1/Pedro%20Ivo%20BiblioTCCpdf.pdf</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENEZES, Sabrina. Fonte de informação: definição, tipologia e confiabilidade. <strong>Blog da BIBENG</strong>, 10 ago. 2021. Disponível em: <a href="https://www.ufrgs.br/bibeng/fontes-de-informacao-definicao-tipologia-confiabilidade/#:~:text=Fontes%20de%20informa%C3%A7%C3%A3o%20s%C3%A3o%20essenciais,localizar%20informa%C3%A7%C3%B5es%20e%20dados%20confi%C3%A1veis" target="_blank" rel="noopener noreferrer">https://www.ufrgs.br/bibeng/fontes-de-informacao-definicao-tipologia-confiabilidade/#:~:text=Fontes%20de%20informa%C3%A7%C3%A3o%20s%C3%A3o%20essenciais,localizar%20informa%C3%A7%C3%B5es%20e%20dados%20confi%C3%A1veis</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAFEZEIRO, I.; COSTA, L. C.; KUBRUSLY, R. S. Ciência da Computação, Ciência da Informação, Sistemas de Informação: uma reflexão sobre o papel da informação e da interdisciplinaridade na configuração das tecnologias e das ciências. <strong>Perspec. Ci. Inf</strong>., v. 21, n. 3, p. 111–133, jul. 2016. Disponível em: <a href="https://doi.org/10.1590/1981-5344/2681" target="_blank" rel="noopener noreferrer">https://doi.org/10.1590/1981-5344/2681</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMPELLO, B. Aula Fontes de Informação I. <em>In</em>: <strong>Curso de Bacharelado em Biblioteconomia na Modalidade a Distância</strong> - Departamento de Biblioteconomia. UAB: Brasília/DF, 2018. </li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GOMES, L. B. <em>et al.</em> As origens do pensamento sistêmico: das partes para o todo. <strong>Pensando fam.</strong>, Porto Alegre, v. 18, n. 2, p. 3-16, dez. 2014.Disponível em: <a href="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1679-494X2014000200002&lng=pt&nrm=iso" target="_blank" rel="noopener noreferrer">http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1679-494X2014000200002&lng=pt&nrm=iso</a>. Acesso em: 09 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GUIMARÃES, M. C. S.; SILVA, C. H.; SANTANA, R. A. L. Uma abordagem de educação para saúd e a partir da informação científica e tecnológica. <strong>R. Eletr. de Com. Inf. Inov. Saúde</strong>. Rio de Janeiro, v. 6, n. 2, jun., 2012. Disponível em <a href="www.reciis.icict.fiocruz.br" target="_blank" rel="noopener noreferrer">www.reciis.icict.fiocruz.br</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LE COADIC, Y. F. <strong>A Ciência da informação</strong>. 2. ed. Brasília: Briquet de Lemos, 2004.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDE INTERAGENCIAL DE INFORMAÇÕES PARA A SAÚDE – RIPSA. <strong>Indicadores básicos de saúde no Brasil</strong>: conceitos e aplicações. Brasília: Organização Pan-Americana da Saúde, 2002.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SARACEVIC, T. Ciência da informação: origem, evolução e relações <strong>Perspec. Ci. Inf.</strong>, Belo Horizonte, v. 1, n. 1, p. 41-62, jan./jun. 1996.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SENRA, N. C. <strong>A Coordenação da Estatística Nacional</strong>. O Equilíbrio entre o Desejável e o Possível. 1998. Tese (Doutorado em Ciência da Informação) - Escola de Comunicação – ECO, Universidade Federal do Rio de Janeiro – UFRJ e Instituto Brasileiro de Informação em Ciência e Tecnologia – IBICT, Conselho Nacional de Desenvolvimento Científico e Tecnológico – CNPq, Rio de Janeiro, 1998. Disponível em: <a href="https://ridi.ibict.br/bitstream/123456789/665/1/nelsonsenra1998.pdf" target="_blank" rel="noopener noreferrer">https://ridi.ibict.br/bitstream/123456789/665/1/nelsonsenra1998.pdf</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SILVA, C. H. S. <strong>Fontes em Informação Científica e Tecnológica em Saúde</strong> - ICTS - Aula no curso de especialização em ICTS, FIOCRUZ, Rio de Janeiro, junho 2022. </li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUENO, S. B.; BLATMANN, U. Fontes de Informação on-line no contexto da área de ciências da saúde. <strong>Pesquisa Brasileira em Ciência da Informação e Biblioteconomia</strong>, v 1, n 1, 2006. Disponível em: <a href="https://brapci.inf.br/#/v/238971" target="_blank" rel="noopener noreferrer">https://brapci.inf.br/#/v/238971</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUENO, S. B.; BLATMANN, U. Fontes de Informação online no contexto da área de ciências da saúde. <strong>RDBCI:Revista Digital de Biblioteconomia e Ciência da Informação</strong>, v 3, n 1, 2005. Disponível em: <a href="https://brapci.inf.br/#/v/40186" target="_blank" rel="noopener noreferrer">https://brapci.inf.br/#/v/40186</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUSH, V. As We May Think. <strong>The Atlantic Monthly</strong>, July1945. Disponível em: <a href="https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/" target="_blank" rel="noopener noreferrer">https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMPELLO, B. S.; CENDÓN, B. V.; KREMER, J. M. (org.). <strong>Fontes de Informação para pesquisadores e profissionais</strong>. Belo Horizonte: Ed. UFMG, 2000.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMPELLO, Bernadete. Enciclopédias. <em>In</em>: CAMPELLO, B.; CALDEIRA, P. T. (org.). <strong>Introdução às Fontes de Informação</strong>. 2. ed. Belo Horizonte: Autêntica, 2008. (Coleção Ciência da Informação; v. 2).</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GOMEZ, M. N. G.; CANONGIA, C. (org.). <strong>Contribuição para políticas de ICT</strong>. Brasília, DF: IBICT,2001.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLIVEIRA, A. R. F.; ALENCAR, M. S. M. O uso de aplicativos de saúde para dispositivos móveis como fontes de informação e educação em saúde. <strong>Revista Digital de Biblioteconomia e Ciência da Informação</strong>, v. 15, n.1, 2017. Disponível em: <a href="https://brapci.inf.br/#/v/40893" target="_blank" rel="noopener noreferrer">https://brapci.inf.br/#/v/40893</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLIVEIRA, C. M.; <em>et al.</em> Typology of health information soucers: decision making support. <strong>Asklepion: Informação em Saúde</strong>, v. 2, n.1, 2022. Disponível em: <a href="https://asklepionrevista.info/asklepion/article/view/38" target="_blank" rel="noopener noreferrer">https://asklepionrevista.info/asklepion/article/view/38</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROBREDO, J. Do documento impresso à informação nas nuvens: reflexões. <strong>Liinc em Revista</strong>, v. 7, n.1, p. 19-42, 2011. Disponível em: <a href="http://www.ibict.br/liinc" target="_blank" rel="noopener noreferrer">http://www.ibict.br/liinc</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTANA, R. A. L. <strong>Sistema Nacional de Informações Tóxico-Farmacológicas</strong>: o desafio da padronização dos dados. 2005. Dissertação (Mestrado em Saúde Pública) - Escola Nacional de Saúde Pública, Fundação Oswaldo Cruz, Rio de Janeiro, 2005.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, V. P. S.; COELHO, M. T. A. D.; RODRIGUES JUNIOR, N. M. Fontes de Informação em Saúde. <strong>Revista Fontes Documentais</strong>, v. 3, n. 1, 2020. Disponível em: <a href="https://brabci.info.br/index/php/res/v/15116" target="_blank" rel="noopener noreferrer">https://brabci.info.br/index/php/res/v/15116</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, V. P. S.; COELHO, M. T. A. D.; RODRIGUES JUNIOR, N. M. Fontes de Informação em Saúde: influenciam no conhecimento do HVi/AIDS? <strong>Revista Fontes Documentais</strong>, v 3, n. Ed Especial, 2020. Disponível em: <a href="https://periodicos.ufba.br/index.php/RFD/article/view/57818" target="_blank" rel="noopener noreferrer">https://periodicos.ufba.br/index.php/RFD/article/view/57818</a>.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Aula 3</button>
								</h5>
								<div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Aith, F. (2022). Fundamentos e Desafios da Regulação da Saúde Digital em Estados Democráticos de Direito. Em F. Aith, & A. B. Dallari, LGPD na Saúde Digital (pp. 41-59). São Paulo, SP, Brasil : Revista dos Tribunais.<a href="https://www.jusbrasil.com.br/doutrina/secao/1-fundamentos-e-desafios-da-regulacao-da-saude-digital-em-estados-democraticos-de-direito-lgpd-na-saude-digital/1620615610#a-289281868" target="_blank" rel="noopener noreferrer">https://www.jusbrasil.com.br/doutrina/secao/1-fundamentos-e-desafios-da-regulacao-da-saude-digital-em-estados-democraticos-de-direito-lgpd-na-saude-digital/1620615610#a-289281868</a> </li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. (14 de agosto de 2018). <em>Lei 13.709/2018</em>. Fonte: Presidência da República: <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Datasus. (2012). <em>Saúde Digital</em> . Fonte: Datasus : <a href="https://datasus.saude.gov.br/saudedigital/" target="_blank" rel="noopener noreferrer">https://datasus.saude.gov.br/saudedigital/</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">European Union. (27 de april de 2016). <em>General Data Protection Regulation (GDPR)</em>. Fonte: Intersoft Consulting: <a href="https://gdpr-info.eu/" target="_blank" rel="noopener noreferrer">https://gdpr-info.eu/</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Filho, A. D., & Ferrari, I. (2022). Uso de big data em saúde no Brasil: perspectivas e desafios de conformidade com a LGPD. Em F. Aith, & A. B. Dallari, <em>LGPD na Saúde Digital</em> (pp. 2013-229). São Paulo : Revista dos Tribunais.<a href="https://www.jusbrasil.com.br/doutrina/secao/11-uso-de-big-data-em-saude-no-brasil-perspectivas-e-desafios-de-conformidade-com-a-lgpd-lgpd-na-saude-digital/1620615620?utm_source=google&utm_medium=cpc&utm_campaign=doutrina_dsa&utm_term=&utm_content=capitul" target="_blank" rel="noopener noreferrer">https://www.jusbrasil.com.br/doutrina/secao/11-uso-de-big-data-em-saude-no-brasil-perspectivas-e-desafios-de-conformidade-com-a-lgpd-lgpd-na-saude-digital/1620615620?utm_source=google&utm_medium=cpc&utm_campaign=doutrina_dsa&utm_term=&utm_content=capitul</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OMS, O. M. (16 de julho de 2024). <em>World Health Organization</em>. Fonte: Documentod da OMS: <a href="https://www.who.int/pt/publications/m" target="_blank" rel="noopener noreferrer">https://www.who.int/pt/publications/m</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Rivelli, F. (2022). Aplicação e Conformidade dos Dados Sensíveis na Saúde Digital e os Preceitos da LGPD. Em F. Aith, & A. B. Dallari, <em>LGPD na Saúde Digital</em> (pp. 183-198). São Paulo : Revista dos Tribunais . </li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">USA. (20 de aug de 1996). <em>US Departemnet Of Health an Human Service</em>. Fonte: Health Insurance Portability and Accountability Act of 1996: <a href="https://aspe.hhs.gov/reports/health-insurance-portability-accountability-act-1996" target="_blank" rel="noopener noreferrer">https://aspe.hhs.gov/reports/health-insurance-portability-accountability-act-1996</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item4">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="false" aria-controls="collapse1-item4">Aula 4</button>
								</h5>
								<div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei no 8080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. <strong>Diário Oficial da União</strong>, 20 set. 1990. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l8080.htm</a>. Acesso em 7 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 8.142, de 28 de dezembro de 1990. Dispõe sobre a participação da comunidade na gestão do Sistema Único de Saúde (SUS) e sobre as transferências intergovernamentais de recursos financeiros na área da saúde e dá outras providências. <strong>Diário Oficial da União</strong>, 31 dez. 1990. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l8142.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l8142.htm</a>. Acesso em 7 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Decreto nº 100, de 16 de abril de 1991</strong> [Revogado]. Institui a Fundação Nacional de Saúde e dá outras providências. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/decreto/1990-1994/d0100.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/decreto/1990-1994/d0100.htm</a>. Acesso em 7 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. <strong>Portaria nº 589, de 20 de maio de 2015</strong>. Institui a Política Nacional de Informação e Informática em Saúde (PNIIS). Disponível em:  <a href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2015/prt0589_20_05_2015.html" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/saudelegis/gm/2015/prt0589_20_05_2015.html</a>. Acesso em 10 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria nº 1.768, de 30 de julho de 2021. Altera o Anexo XLII da Portaria de Consolidação GM/MS nº 2, de 28 de setembro de 2017, para dispor sobre a Política Nacional de Informação e Informática em Saúde (PNIIS). <strong>Diário Oficial da União</strong>: Seção 1, Brasília, DF, n. 144, p. 45, 02 ago. 2021. Disponível em: <a href="https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-1.768-de-30-de-julho-de-2021-335472332" target="_blank" rel="noopener noreferrer">https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-1.768-de-30-de-julho-de-2021-335472332</a>. Acesso em: 10 de jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria-Executiva. Departamento de Monitoramento e Avaliação do SUS. <strong>Política Nacional de Informação e Informática em Saúde</strong>. Brasília: Ministério da Saúde, 2016. 56 p. Disponível em: <a href="https://www.gov.br/saude/pt-br/composicao/seidigi/publicacoes/pniis-2016.pdf/view" target="_blank" rel="noopener noreferrer">https://www.gov.br/saude/pt-br/composicao/seidigi/publicacoes/pniis-2016.pdf/view</a>. Acesso em: 15 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria nº 1.434, de 28 de maio de 2020. Institui o Programa Conecte SUS e altera a Portaria de Consolidação nº 1/GM/MS, de 28 de setembro de 2017, para instituir a Rede Nacional de Dados em Saúde e dispor sobre a adoção de padrões de interoperabilidade em saúde. <strong>Diário Oficial da União</strong>: Seção 1, Brasília, DF, n. 102, p. 231, 29 maio 2020. Disponível em: <a href="https://www.in.gov.br/en/web/dou/-/portaria-n-1.434-de-28-de-maio-de-2020-259143327" target="_blank" rel="noopener noreferrer">https://www.in.gov.br/en/web/dou/-/portaria-n-1.434-de-28-de-maio-de-2020-259143327</a>. Acesso em: 7 de jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. <strong>Portaria nº 545, de 20 de maio de 1993</strong>. Estabelece normas e procedimentos reguladores do processo de descentralização da gestão das ações e serviços de saúde, através da Norma Operacional Básica - SUS 01/93. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/1993/prt0545_20_05_1993.html" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/saudelegis/gm/1993/prt0545_20_05_1993.html</a>. Acesso em 7 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. Ministério da Saúde, Organização Pan-Americana da Saúde, Fundação Oswaldo Cruz. Brasília: Editora do Ministério da Saúde, 2009. (Série B. Textos Básicos de Saúde).</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria Executiva. Departamento de Informática do SUS. <strong>DATASUS Trajetória 1991-2002</strong>. Brasília: Ministério da Saúde, 2002. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/trajetoria_datasus.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/trajetoria_datasus.pdf</a>. Acesso em: 10 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Decreto n° 4.194, de 11 de abril de 2002</strong> [Revogado]. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/decreto/2002/d4194.htm#:~:text=DECRETO%20N%C2%BA%204.194%2C%20DE%2011%20DE%20ABRIL%20DE%202002.&text=Aprova%20a%20Estrutura%20Regimental%20e,que%20lhe%20confere%20o%20art" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/decreto/2002/d4194.htm#:~:text=DECRETO%20N%C2%BA%204.194%2C%20DE%2011%20DE%20ABRIL%20DE%202002.&text=Aprova%20a%20Estrutura%20Regimental%20e,que%20lhe%20confere%20o%20art</a>. Acesso em: 10 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria Executiva. Departamento de Informação e Informática do SUS. <strong>Política Nacional de Informação e Informática em Saúde Proposta Versão 2.0</strong>. Brasília, 29 mar. 2024.  Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/PoliticaInformacaoSaude29_03_2004.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/PoliticaInformacaoSaude29_03_2004.pdf</a>. Acesso em: 15 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAVALCANTE, R. B.; PINHEIRO, M. M. K. Política Nacional de Informação e Informática em Saúde: avanços e limites atuais. <strong>Perspectivas em Gestão & Conhecimento</strong>, v. 1, n. 2, p. 91–104, 2011. Disponível em: <a href="https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487" target="_blank" rel="noopener noreferrer">https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487</a>. Acesso em: 15 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FONSECA, F. C. S. Sistemas de Informação da Atenção à Saúde: da fragmentação à interoperabilidade. <em>In</em>: BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Regulação, Avaliação e Controle. <strong>Sistemas de Informação da Atenção à Saúde</strong>: contextos históricos, avanços e perspectivas no SUS. Organização Pan-Americana da Saúde: Brasília, 2015. p. 9-22.166 p. Disponível em: <a href="https://www.escoladesaude.pr.gov.br/arquivos/File/sistemas_informacao_atencao_saude_contextos_historicos.pdf" target="_blank" rel="noopener noreferrer">https://www.escoladesaude.pr.gov.br/arquivos/File/sistemas_informacao_atencao_saude_contextos_historicos.pdf</a></li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAVALCANTE, R. B.; PINHEIRO, M. M. K. Política Nacional de Informação e Informática em Saúde: avanços e limites atuais. <strong>Perspectivas em Gestão & Conhecimento</strong>, v. 1, n. 2, p. 91-104, 2011. Disponível em: <a href="https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487" target="_blank" rel="noopener noreferrer">https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487</a>. Acesso em: 10 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELHO NETO, G. C.; CHIORO, A. Afinal, quantos Sistemas de Informação em Saúde de base nacional existem no Brasil?. <strong>Cadernos de Saúde Pública</strong>, v. 37, n. 7, 2021. Disponível em: <a href="https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CONFERÊNCIA NACIONAL DE SAÚDE. <strong>Relatório Final da 5ª Conferência Nacional de Saúde</strong> (CNS). Brasília, 1975. Disponível em: <a href="https://www.gov.br/conselho-nacional-de-saude/pt-br/centrais-de-conteudo/publicacoes/relatorios/relatorio-final-da-5a-conferencia-nacional-de-saude/view#:~:text=A%205%C2%AA%20Confer%C3%AAncia%20Nacional%20de,Nacional%20de%20Vigil%C3%A2ncia%20Epidemiol%C3%B3gica%3B%204" target="_blank" rel="noopener noreferrer">https://www.gov.br/conselho-nacional-de-saude/pt-br/centrais-de-conteudo/publicacoes/relatorios/relatorio-final-da-5a-conferencia-nacional-de-saude/view#:~:text=A%205%C2%AA%20Confer%C3%AAncia%20Nacional%20de,Nacional%20de%20Vigil%C3%A2ncia%20Epidemiol%C3%B3gica%3B%204</a>. Acesso em 10 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JANNNUZZI, P. M. Estatísticas e Políticas Públicas orientadas por evidências no Brasil: o caso das Políticas de Desenvolvimento Social nos anos 2000. <strong>Revista Brasileira de Geografia</strong>, v. 64, n. 1, p. 37-54, 2019. Disponível em: <a href="https://rbg.ibge.gov.br/index.php/rbg/article/view/2096" target="_blank" rel="noopener noreferrer">https://rbg.ibge.gov.br/index.php/rbg/article/view/2096</a>. Acesso em: 7 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JORGE, M. H. P.; LAURENTI, R.; GOTLIEB, S. L. D. O sistema de Informações sobre Mortalidade – SIM: Concepção, Implantação e Avaliação. <em>In</em>: BRASIL. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. Ministério da Saúde, Organização Pan-Americana da Saúde, Fundação Oswaldo Cruz. Brasília: Editora do Ministério da Saúde, 2009.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MARIN, H. F. Sistemas de informação em saúde: considerações gerais. <strong>J. Health Inform.</strong>, v. 2, n. 1, p. 20-4, 2010. Disponível em: <a href="https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/4/52" target="_blank" rel="noopener noreferrer">https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/4/52</a>. Acesso em: 7 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENICUCCI, T. M. G. História da reforma sanitária brasileira e do Sistema Único de Saúde: mudanças, continuidades e a agenda atual. <strong>História, Ciências, Saúde-Manguinhos</strong>, Rio de Janeiro, v. 21, n. 1, p. 77–92, jan. 2014. Disponível em: <a href="https://www.scielo.br/j/hcsm/a/bVMCvZshr9RxtXpdh7YPC5x/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/hcsm/a/bVMCvZshr9RxtXpdh7YPC5x/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REZENDE, F. A. V. S.; SOARES, M. F.; REIS, A. C. Os sistemas de informação em Saúde no Sistema Único de Saúde. <em>In</em>: LEANDRO, B. D. S.; REZENDE, F. A. V. S; PINTO, J. M. C. <strong>Informações e registros em saúde e seus usos no SUS</strong>. Rio de Janeiro: Editora Fiocruz, 2020.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RISI JUNIOR, J. B. Informação e Saúde no Brasil: a contribuição da Ripsa. <strong>Ciência & Saúde Coletiva</strong>, v. 11, n. 4, p. 1049-1053, 2006. Disponível em: <a href="http://www.scielo.br/pdf/csc/v11n4/32340.pdf" target="_blank" rel="noopener noreferrer">http://www.scielo.br/pdf/csc/v11n4/32340.pdf</a>. Acesso em: 7 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VIACAVA, F. Informações em saúde: a importância dos inquéritos populacionais. <strong>Ciência & Saúde Coletiva</strong>, v. 7, n. 4, p. 607-621, 2002. Disponível em: <a href="https://www.scielo.br/j/csc/a/j8mV4fvjSk7K9brzbdCj77J/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csc/a/j8mV4fvjSk7K9brzbdCj77J/?format=pdf&lang=pt</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Fim do Accordion -->
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod2: {
		ariaLabel: "bibliografiaMod2",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia Módulo 2",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-11">
					<div class="mb-5">
						<!-- Accordion -->
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Aula 1</button>
								</h5>
								<div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. Organização Pan-Americana da Saúde, Fundação Oswaldo Cruz. – Brasília : Editora do Ministério da Saúde, 2009. 1 v. (Série B. Textos Básicos de Saúde).</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. Organização Pan-Americana da Saúde, Fundação Oswaldo Cruz. Brasília : Editora do Ministério da Saúde, 2009. 2 v. (Série B. Textos Básicos de Saúde).</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JORGE, M. H. P. M.; LAURENTI, R.; GOTLIEB, S. L. D. Análise da qualidade das estatísticas vitais brasileiras: a experiência de implantação do SIM e do SINASC. <strong>Ciência & Saúde Coletiva</strong>, v. 12, n. 3, p. 643-54, 2007. Disponível em: <a href='https://doi.org/10.1590/S1413-81232007000300014' target='_blank'>https://doi.org/10.1590/S1413-81232007000300014</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAIS, R. M.; COSTA, A. L. Uma avaliação do Sistema de Informações sobre Mortalidade. <strong>Saúde em Debate</strong>, v. 41, n. especial, p. 101-117, 2017. Disponível em: <a href='https://www.scielo.br/j/sdeb/a/FJXQhtgNM3S5qvGHNfLMk3Q/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/sdeb/a/FJXQhtgNM3S5qvGHNfLMk3Q/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SZWARCWALD, C. L. <em>et al.</em> Busca ativa de óbitos e nascimentos no Nordeste e na Amazônia Legal: Estimação das coberturas do SIM e do SINASC nos municípios brasileiros. In: BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Análise de Situação em Saúde. <strong>Saúde Brasil 2010</strong>: uma análise da situação de saúde e de evidências selecionadas de impacto de ações de vigilância em saúde. Brasília: MS, 2011. p. 79-98. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/saude_brasil_2010.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/saude_brasil_2010.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Análise Epidemiológica e Vigilância de Doenças Não Transmissíveis. <strong>Declaração de Nascido Vivo</strong>: manual de instruções para preenchimento. 4. ed. Brasília: Ministério da Saúde, 2022. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/declaracao-de-nascido-vivo-manual-de-instrucoes-para-preenchimento/view' target='_blank'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/declaracao-de-nascido-vivo-manual-de-instrucoes-para-preenchimento/view</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PEDRAZA, D. F. Sistema de informações sobre nascidos vivos: uma análise da qualidade com base na literatura. <strong>Cad saúde colet</strong>., v. 29, n. 1, p. 143-52. Disponível em: <a href='https://www.scielo.br/j/cadsc/a/JjKJcZS5FNxLLQ7BTH6NQRr/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/cadsc/a/JjKJcZS5FNxLLQ7BTH6NQRr/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PELISSARI, M. CNES como instrumento de gestão e sua importância no planejamento das ações em saúde. <strong>Revista de Saúde Pública do Paraná</strong>, v. 2, n. 1, p. 159-65, 2019. Disponível em: <a href='http://revista.escoladesaude.pr.gov.br/index.php/rspp/article/view/210' target='_blank'>http://revista.escoladesaude.pr.gov.br/index.php/rspp/article/view/210</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROCHA, T. A. H. Cadastro Nacional de Estabelecimentos de Saúde: evidências sobre a confiabilidade de dados. <strong>Ciência & Saúde Coletiva</strong>, v. 23, n. 1, p. 229-40, 2018. Disponível em: <a href='https://www.scielo.br/j/csc/a/j7fDnf87zJTpCLKH3DQYzLq/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csc/a/j7fDnf87zJTpCLKH3DQYzLq/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"> </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"> </li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"> </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"> </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"> </li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"> </li>
												
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Aula 2</button>
								</h5>
								<div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>SINAN: normas e rotinas</strong>. 2. ed. Brasília: Editora do Ministério da Saúde, 2007. Disponível em: <a href='https://portalsinan.saude.gov.br/images/documentos/Aplicativos/sinan_net/Manual_Normas_e_Rotinas_2_edicao.pdf' target='_blank'>https://portalsinan.saude.gov.br/images/documentos/Aplicativos/sinan_net/Manual_Normas_e_Rotinas_2_edicao.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Manual Técnico Do Sistema De Informação Hospitalar</strong>. Brasília: Ministério da Saúde, 2007. (Série A. Normas e Manuais Técnicos). Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/07_0066_M.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/07_0066_M.pdf</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Regulação, Avaliação e Controle. Coordenação Geral de Sistemas de Informação. <strong>Manual Técnico Operacional SIA/SUS - Sistema de Informações Ambulatoriais:</strong> aplicativos auxiliáres e de captação da produção ambulatorial APAC Magnético – BPA Magnético - VERSIA – DE-PARA – FPO Magnético. Brasília, DF: Ministério da Saúde, 2010. Disponível em: <a href='http://www1.saude.rs.gov.br/dados/1273242960988Manual_Operacional_SIA2010.pdf' target='_blank'>http://www1.saude.rs.gov.br/dados/1273242960988Manual_Operacional_SIA2010.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Portaria de Consolidação no 4, de 28 de Setembro de 2017</strong>. Consolidação das normas sobre os sistemas e os subsistemas do Sistema Único de Saúde. Brasília, DF: Ministério da Saúde, 2017. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/z/zika-virus/publicacoes/portaria-de-consolidacao-no-4-de-28-de-setembro-de-2017.pdf/view' target='_blank'>https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/z/zika-virus/publicacoes/portaria-de-consolidacao-no-4-de-28-de-setembro-de-2017.pdf/view</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Portaria no 4, de 28 de janeiro de 2021</strong>. Institui os prazos para o envio da produção da Atenção Primária à Saúde para o Sistema de Informação em Saúde para a Atenção Básica (SISAB) a partir de 1o de janeiro de 2021. 20. ed. [s.l: s.n.]. v. Seção 1, p. 94.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento do Programa Nacional de Imunizações e Doenças Imunopreviníveis. <strong>Guia de manejo e tratamento de influenza 2023</strong>. Brasília: MS, 2023. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/influenza/guia-de-manejo-e-tratamento-de-influenza-2023/view' target='_blank'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/influenza/guia-de-manejo-e-tratamento-de-influenza-2023/view</a>. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Portaria GM/MS no 3.148, de 6 de fevereiro 2024. Altera o Anexo 1 do Anexo V à Portaria de consolidação GM/MS no 4, de 2017. 31. ed. <strong>Diário Oficial da União</strong>: Seção 1, Brasília, DF, v. 31, p. 87. 15 fev. 2024. Disponível em: <a href='https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-3.148-de-6-de-fevereiro-de-2024-542935418' target='_blank'>https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-3.148-de-6-de-fevereiro-de-2024-542935418</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Portaria GM/MS no 1.412, de 10 de julho de 2013</strong>. Institui o Sistema de Informação em Saúde para a Atenção Básica (SISAB). Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt1412_10_07_2013.html' target='_blank'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt1412_10_07_2013.html</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RIO DE JANEIRO. Secretária de Estado de Saúde. Sistema de Vigilância Epidemiológica da Gripe – SIVEP-Gripe. <strong>Casos de Síndrome Respiratória Aguda Grave (SRAG)</strong> – Dados completos. Nota Técnica. Rio de Janeiro: SES/RJ, , [s.d.]. Disponível em: <a href='https://sistemas.saude.rj.gov.br/tabnetbd/sivep_gripe/SIVEP_Gripe.pdf' target='_blank'>https://sistemas.saude.rj.gov.br/tabnetbd/sivep_gripe/SIVEP_Gripe.pdf</a>. Acesso em: 15 jul. 2024</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CASTRO, D. M. <em>et al</em>. Impacto da qualidade da atenção primária à saúde na redução das internações por condições sensíveis. <strong>Cadernos de Saúde Pública</strong>, v. 36, n. 11, 2020. Disponível em: <a href='https://www.scielo.br/j/csp/a/5tqLFcwZ6qCthTMGwFBswzM/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csp/a/5tqLFcwZ6qCthTMGwFBswzM/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CERQUEIRA, D. <em>et al</em>. As variáveis existentes e as mudanças ocorridas. Em: CERQUEIRA, D. <em>et al</em>. (eds.). <strong>Uma Análise da Base de Dados do Sistema de Informação Hospitalar entre 2001 e 2018</strong>. Rio de Janeiro: Ipea, 2019. p. 19-36. Disponível em: <a href='https://www.ipea.gov.br/atlasviolencia/artigo/175/uma-analise-da-base-de-dados-do-sistema-de-informacao-hospitalar-entre-2001-e-2018' target='_blank'>https://www.ipea.gov.br/atlasviolencia/artigo/175/uma-analise-da-base-de-dados-do-sistema-de-informacao-hospitalar-entre-2001-e-2018</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELHO, G. C.; ANDREAZZA, R.; CHIORO, A. Integração entre os sistemas nacionais de informação em saúde: o caso do e-SUS Atenção Básica. <strong>Rev. Saúde Pública</strong>, v. 55, 19 nov. 2021. Disponível em: <a href='https://rsp.fsp.usp.br/artigo/integracao-entre-os-sistemas-nacionais-de-informacao-em-saude-o-caso-do-e-sus-atencao-basica/' target='_blank'>https://rsp.fsp.usp.br/artigo/integracao-entre-os-sistemas-nacionais-de-informacao-em-saude-o-caso-do-e-sus-atencao-basica/</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELHO NETO, G. C.; CHIORO, A. Afinal, quantos Sistemas de Informação em Saúde de base nacional existem no Brasil? <strong>Cadernos de Saúde Pública</strong>, v. 37, n. 7, 2021. Disponível em: <a href='https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GUEDES, R. <em>et al</em>. Avaliação dos dados de mortes por COVID-19 nas bases dos cartórios do RC-Arpen, SIVEP-Gripe e SIM no Brasil em 2020. <strong>Cadernos de Saúde Pública</strong>, v. 39, n. 3, 2023. Disponível em: <a href='https://www.scielo.br/j/csp/a/zndvtctBYDyVJYYJLhgt9mB/?format=pdf&lang=p' target='_blank'>https://www.scielo.br/j/csp/a/zndvtctBYDyVJYYJLhgt9mB/?format=pdf&lang=p</a>t</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LAGUARDIA, J. <em>et al</em>. Sistema de informação de agravos de notificação em saúde (SINAN): desafios no desenvolvimento de um sistema de informação em saúde. <strong>Epidemiologia e Serviços de Saúde</strong>, v. 13, n. 3, p. 135-146, set. 2004. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LEVCOVITZ, E.; PEREIRA, T. R. C. <strong>SIH/SUS (Sistema AIH)</strong>: uma análise do sistema público de remuneraçäo de internaçöes hospitalares no Brasil-1983-1991. Rio de Janeiro: UERJ; IMS, 1993. (Série Estudos em Saúde Coletiva, n. 57). Disponível em: <a href='https://www.nescon.medicina.ufmg.br/biblioteca/imagem/0281.pdf' target='_blank'>https://www.nescon.medicina.ufmg.br/biblioteca/imagem/0281.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MELO, M. A. S.<em> et al</em>. Subnotificação no sinan e fatores gerenciais e operacionais associados: revisão sistemática da literatura. R<strong>evista de Administração da UEG</strong>, v. 9, n. 1, p. 26-26, 2018. Disponível em: <a href='https://www.revista.ueg.br/index.php/revista_administracao/article/view/7445' target='_blank'>https://www.revista.ueg.br/index.php/revista_administracao/article/view/7445</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENDES, A. C. G. <em>et al</em>. Avaliação do sistema de informações hospitalares - SIH/SUS como fonte complementar na vigilância e monitoramento de doenças de notificação compulsória. <strong>Informe Epidemiológico do SUS</strong>, v. 9, n. 2, p. 67-86, 2000. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/periodicos/informe_epi_sus_v09_n2.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/periodicos/informe_epi_sus_v09_n2.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MUZY, J. <em>et al</em>. Oferta e demanda de procedimentos atribuíveis ao diabetes mellitus e suas complicações no Brasil.<strong> Ciência & Saúde Coletiva</strong>, v. 27, n. 4, p. 1653-1667, abr. 2022. Disponível em: <a href='https://www.scielo.br/j/csc/a/zbYv33HhbcPJqss5nGtpK3n/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csc/a/zbYv33HhbcPJqss5nGtpK3n/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">POSTAL, L. <em>et al</em>. Sistema de agendamento online: uma ferramenta do PEC e-SUS APS para facilitar o acesso à Atenção Primária no Brasil. <strong>Ciência & Saúde Coletiva</strong>, v. 26, p. 2023-2034, 2021. Disponível em: <a href='https://www.scielo.br/j/csc/a/xMLGMTVS8LXJhyYYMfQkRtq/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csc/a/xMLGMTVS8LXJhyYYMfQkRtq/?format=pdf&lang=pt</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RANZANI, O. T.; MARINHO, M. F.; BIERRENBACH, A. L. Utilidade do Sistema de Informação Hospitalar na vigilância da mortalidade materna no Brasil. R<strong>evista Brasileira de Epidemiologia</strong>, v. 26, 2023. Disponível em: <a href='https://www.scielo.br/j/rbepid/a/FsfndN7G4dpjPtDmrTQtyJp/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/rbepid/a/FsfndN7G4dpjPtDmrTQtyJp/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SECRETARIA DA SAÚDE DO ESTADO DA BAHIA. Secretaria da Saúde do Estado da Bahia. Superintendência de Vigilância e Proteção da Saúde. Diretoria de Vigilância Epidemiológica. <strong>Guia Rápido SIVEP Gripe</strong>. Disponível em: <a href='https://docs.bvsalud.org/biblioref/2021/03/1147534/guia-rapido-sivep-gripe_agosto-2020.pdf' target='_blank'>https://docs.bvsalud.org/biblioref/2021/03/1147534/guia-rapido-sivep-gripe_agosto-2020.pdf</a>. Acesso em: 15 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VILLELA, D. A. M.; GOMES, M. F. C. O impacto da disponibilidade de dados e informação oportuna para a vigilância epidemiológica. <strong>Cadernos de Saúde Pública</strong>, v. 38, n. 7, 2022. Disponível em: <a href='https://www.scielo.br/j/csp/a/dDSpPy898L4Pj3WPLGxLdqN/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csp/a/dDSpPy898L4Pj3WPLGxLdqN/?format=pdf&lang=pt</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ZACHARIAS, F. C. M. <em>et al</em>. e-SUS Atenção Primária: atributos determinantes para adoção e uso de uma inovação tecnológica. <strong>Cadernos de Saúde Pública</strong>, v. 37, n. 6, 2021. Disponível em: <a href='https://www.scielo.br/j/csp/a/CmLbcjLCR4d6xLvNbyW6Fgr/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csp/a/CmLbcjLCR4d6xLvNbyW6Fgr/?format=pdf&lang=pt</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Aula 3</button>
								</h5>
								<div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARCELLOS, C. D. C. <em>et al</em>. Organização espacial, saúde e qualidade de vida: análise espacial e uso de indicadores na avaliação de situações de saúde. <strong>Informe Epidemiológico do SUS</strong>, v. 11, n. 3, p. 129-138, 2002. Disponível em: <a href='https://www.arca.fiocruz.br/handle/icict/713' target='_blank'>https://www.arca.fiocruz.br/handle/icict/713</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Lei nº 6.015, de 31 de dezembro de 1976</strong>. Dispõe sobre os registros públicos, e da outras providências. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/L6015consolidado.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/leis/L6015consolidado.htm</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Saúde Brasil 2020/2021 - uma análise da situação da saúde e da qualidade da informação. Brasília: Ministério da Saúde; <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/saude_brasil_2020_2021_situacao_saude_web.pdf/@@download/file' target='_blank'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/saude_brasil_2020_2021_situacao_saude_web.pdf/@@download/file</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Introdução à Análise de Situação de Saúde. <em>In:</em> <strong>Asis - Análise de Situação de Saúde</strong>. Brasília: Ministério da Saúde; Universidade Federal de Goiás, 2015. (v. 3, Caderno R). Disponível em: <a href='https://svs.aids.gov.br/daent/centrais-de-conteudos/publicacoes/cursos/analise-de-situacao-de-saude-2015-caderno-r.pdf' target='_blank'>https://svs.aids.gov.br/daent/centrais-de-conteudos/publicacoes/cursos/analise-de-situacao-de-saude-2015-caderno-r.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CARVALHO, Marilia Sá; SOUZA-SANTOS, Reinaldo. Análise de espaciais em saúde pública: métodos, problemas, perspectivas. <strong>Cadernos de Saúde Pública</strong>, v. 21, n. 2, p. 361-378, 2005. Disponível em: <a href='https://www.scielo.br/j/csp/a/HJ3R3BCkPCbCsk9YTgKqRWN/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csp/a/HJ3R3BCkPCbCsk9YTgKqRWN/?format=pdf&lang=pt</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. <strong>Pesquisa Nacional por Amostra de Domicílios</strong> PNAD 2013. Rio de Janeiro: IBGE, 2013.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RISI JÚNIOR, João Baptista. Informação em saúde no Brasil: a contribuição da Ripsa. <strong>Ciência & Saúde Coletiva</strong>, v. 11, n. 4, p. 1049-1053, 2006. Disponível em: <a href='https://www.scielo.br/j/csc/a/YntJzFbXMN69KJkfsNvfMNn/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csc/a/YntJzFbXMN69KJkfsNvfMNn/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MARMOT, M.; WILKINSON, R. G. <strong>Social Determinants of Health</strong>. Oxford: Oxford University Press, 2005.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENDES, E. V. <strong>O cuidado das condições crônicas na Atenção Primária à Saúde:</strong> o imperativo da consolidação da Estratégia da Saúde da Família. Brasília: Organização Pan-Americana da Saúde, 2012.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. v. 1: Produção e disseminação de informações sobre saúde no Brasil Brasília: Organização Pan-Americana da Saúde; Fundação Oswaldo Cruz; Editora do Ministério da Saúde, 2009. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/experiencia_brasileira_sistemas_saude_volume1.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/experiencia_brasileira_sistemas_saude_volume1.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZACIÓN PANAMERICANA DE LA SALUD. Resúmenes metodológicos em epidemiología: análisis de la situación de salud. <strong>Boletín Epidemiológico</strong>, v. 20, n. 3, p. 1-3, 1999. Disponível em: <a href='https://iris.paho.org/bitstream/handle/10665.2/46302/BE_v20n3.pdf?sequence=1&isAllowed=y' target='_blank'>https://iris.paho.org/bitstream/handle/10665.2/46302/BE_v20n3.pdf?sequence=1&isAllowed=y</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Indicadores de Salud: elementos básicos para el análisis de la situación de salud. <strong>Boletín Epidemiológico</strong>, v. 22, n. 4, p. 1-5, 2001.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PAIM, J. The Brazilian health system: history, advances, and challenges. <strong>The Lancet</strong>, v. 377, n. 9779, p. 1778-1797, 2011. Disponível em: <a href='https://repositoriohml.ufba.br/bitstream/ri/3028/1/Per%20int%202011.12.pdf' target='_blank'>https://repositoriohml.ufba.br/bitstream/ri/3028/1/Per%20int%202011.12.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SCHWARTZ, Sharon. The fallacy of the ecological fallacy: the potential misuse of a concept and the consequences. <strong>American Journal of Public Health</strong>, v. 84, n. 5, p. 819-824, 1994.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SOLAR, O.; IRWIN, A. <strong>A conceptual framework for action on the social determinants of health</strong>. Geneva: World Health Organization, 2010. (Social Determinants of Health Discussion Paper 2). Disponível em: <a href='https://iris.who.int/bitstream/handle/10665/44489/9789241500852_eng.pdf?sequence=1' target='_blank'>https://iris.who.int/bitstream/handle/10665/44489/9789241500852_eng.pdf?sequence=1</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SOUZA, M. <strong>Sistema de información de salud</strong>: conceptos básicos e implicaciones para las políticas de salud. New York: International Standards for Civil Registration and Vital Statistics Systems, 2011.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VIACAVA, F. Informações em saúde: a importância dos inquéritos populacionais. <strong>Ciência & Saúde Coletiva</strong>, v. 7, n. 4, p. 607-621, 2002. Disponível  em: <a href='https://www.scielo.br/j/csc/a/j8mV4fvjSk7K9brzbdCj77J/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csc/a/j8mV4fvjSk7K9brzbdCj77J/?format=pdf&lang=pt</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WALDMAN, Eliseu Alves; ROSA, Tereza Etsuko Costa. <strong>Vigilância em saúde pública</strong>. São Paulo, Universidade de São Paulo. Faculdade de Saúde Pública, 1998. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/saude_cidadania_volume07.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/saude_cidadania_volume07.pdf</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item4">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="false" aria-controls="collapse1-item4">Aula 4</button>
								</h5>
								<div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARCELLOS, C.; XAVIER, D. R. As diferentes fases, os seus impactos e os desafios da pandemia de covid-19 no Brasil. <strong>Revista Eletrônica de Comunicação, Informação & Inovação em Saúde</strong>, v. 16, n. 2, 2022. Disponível em: <a href='https://www.reciis.icict.fiocruz.br/index.php/reciis/article/view/3349' target='_blank'>https://www.reciis.icict.fiocruz.br/index.php/reciis/article/view/3349</a>. Acesso em: 26 jun. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Portaria nº 1.839, de 27 julho de 2020</strong>. Altera a Portaria de Consolidação nº 1/GM/MS, de 28 de setembro de 2017, para dispor sobre as ações que envolvam o uso de dados e indicadores para saúde pública no âmbito do Sistema Único de Saúde (SUS), e sobre o Módulo de Gestão de Dados e Indicadores (MGDI). Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2020/prt1839_28_07_2020.html#:~:text=Altera%20a%20Portaria%20de%20Consolida%C3%A7%C3%A3o,Dados%20e%20Indicadores%20(MGDI)' target='_blank'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2020/prt1839_28_07_2020.html#:~:text=Altera%20a%20Portaria%20de%20Consolida%C3%A7%C3%A3o,Dados%20e%20Indicadores%20(MGDI)</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CARVALHO, C.C. <em>et al</em>. Análise comparativa de classificações de vulnerabilidade para municípios g100. <strong>Revista Brasileira de Estudos de População</strong> - REBEP, v. 40, p. 1-20, 2023. Disponível em: <a href='https://www.scielo.br/j/rbepop/a/x3WRtg5F7LyLwtgszQtxhxx/?format=html&lang=pt#' target='_blank'>https://www.scielo.br/j/rbepop/a/x3WRtg5F7LyLwtgszQtxhxx/?format=html&lang=pt#</a>. Acesso em: 26 jun. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FRIEBEL, R.; STEVENTON, A. Composite measures of healthcare quality: sensible in theory, problematic in practice. <strong>BMJ Qual Saf</strong>., 17 set. 2018. Disponível em: <a href='https://qualitysafety.bmj.com/content/early/2018/09/16/bmjqs-2018-008280.info' target='_blank'>https://qualitysafety.bmj.com/content/early/2018/09/16/bmjqs-2018-008280.info</a>. Acesso em: 26 jun. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GUIMARÃES, J. R. S.; JANNUZZI, P. IDH, indicadores sintéticos e suas aplicações em políticas públicas: uma análise crítica. <strong>Revista Brasileira de Estudos Urbanos e Regionais</strong>, v. 7, n. 1, p. 73, 2005. <a href='https://doi.org/10.22296/2317-1529.2005v7n1p73' target='_blank'>https://doi.org/10.22296/2317-1529.2005v7n1p73</a>. Acesso em: 26 jun. 2024.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. <strong>Síntese de indicadores sociais</strong>: uma análise das condições de vida da população brasileira: 2023. Rio de Janeiro: IBGE, 2023. 152 p. (Estudos e pesquisas. Informação demográfica e socioeconômica, n. 53).</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO DE PESQUISA ECONÔMICA APLICADA. <strong>Atlas da Vulnerabilidade Social</strong>. Disponível em: <a href='http://ivs.ipea.gov.br/' target='_blank'>http://ivs.ipea.gov.br/</a>. Acesso em: 26 jun. 2024. /li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JANNUZZI, P. M. <strong>Indicadores Sociais no Brasil:</strong> conceitos, fontes de dados e aplicações. 4. ed. Campinas: Editora Alínea; PUC-Campinas, 2009. v. 1. 141 p.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANISATION FOR ECONOMIC CO-OPERATION AND DEVELOPMENT. <strong>Handbook on Constructing Composite Indicators</strong>: methodology and user guide. Paris: OECD, 2008. Disponível em: <a href='https://www.oecd-ilibrary.org/docserver/9789264043466-en.pdf?expires=1731337906&id=id&accname=guest&checksum=FF811394FD32B23A6A20C53F1F885602' target='_blank'>https://www.oecd-ilibrary.org/docserver/9789264043466-en.pdf?expires=1731337906&id=id&accname=guest&checksum=FF811394FD32B23A6A20C53F1F885602</a>. Acesso em: 26 jun. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. <strong>Constituição da Organização Mundial da Saúde</strong>. Geneva: OMS, 1946. Disponível em: <a href='https://edisciplinas.usp.br/pluginfile.php/5733496/mod_resource/content/0/Constitui%C3%A7%C3%A3o%20da%20Organiza%C3%A7%C3%A3o%20Mundial%20da%20Sa%C3%BAde%20%28WHO%29%20-%201946%20-%20OMS.pdf' target='_blank'>https://edisciplinas.usp.br/pluginfile.php/5733496/mod_resource/content/0/Constitui%C3%A7%C3%A3o%20da%20Organiza%C3%A7%C3%A3o%20Mundial%20da%20Sa%C3%BAde%20%28WHO%29%20-%201946%20-%20OMS.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. <strong>Indicadores de saúde:</strong> elementos conceituais e práticos. Washington, D.C.: OPAS; 2018. Disponível em: <a href='https://iris.paho.org/bitstream/handle/10665.2/49057/9789275720059_por.pdf?sequence=5&isAllowed=y' target='_blank'>https://iris.paho.org/bitstream/handle/10665.2/49057/9789275720059_por.pdf?sequence=5&isAllowed=y</a>. Acesso em: 26 jun. 2024.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PROGRAMA DAS NAÇÕES UNIDAS PARA O DESENVOLVIMENTO. <strong>Índice de Desenvolvimento Humano Municipal Brasileiro</strong>. Brasília: PNUD, Ipea, FJP, 2013. ((Atlas do Desenvolvimento Humano no Brasil 2013). Disponível em: <a href='https://www.undp.org/sites/g/files/zskgke326/files/2023-07/indice_de_desenvolvimento_humano_municipal_brasileiro_-_2013.pdf' target='_blank'>https://www.undp.org/sites/g/files/zskgke326/files/2023-07/indice_de_desenvolvimento_humano_municipal_brasileiro_-_2013.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PROGRAMA DAS NAÇÕES UNIDAS PARA O DESENVOLVIMENTO. <strong>Atlas do Desenvolvimento Humano no Brasil</strong>. Disponível em: <a href='http://www.atlasbrasil.org.br/' target='_blank'>http://www.atlasbrasil.org.br/</a>. Acesso em: 26 jun. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PROJETO DE AVALIAÇÃO DO DESEMPENHO DO SISTEMA DE SAÚDE - PROADESS. Fiocruz, Icict. Disponível em: <a href='https://www.proadess.icict.fiocruz.br' target='_blank'>https://www.proadess.icict.fiocruz.br</a>. Acesso em: 26 jun. 2024. </li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDE INTERAGENCIAL DE INFORMAÇÃO PARA A SAÚDE - RIPSA. <strong>Indicadores básicos para a saúde no Brasil:</strong> conceitos e aplicações. Brasília: Organização Pan-Americana da Saúde, 2008. 349 p. Disponível em: <a href='http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf' target='_blank'>http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf</a>. Acesso em: 26 jun. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDE INTERAGENCIAL DE INFORMAÇÃO PARA A SAÚDE - RIPSA. Disponível em: <a href='https://www.ripsa.org.br/' target='_blank'>https://www.ripsa.org.br/</a>. Acesso em: 26 jun. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VALENTE, J. G. Uma avaliação crítica sobre o índice composto na avaliação dos sistemas de saúde no mundo. <strong>Revista Brasileira de Epidemiologia</strong>, v. 5, supl. 1, p. 83-90, 2002. Disponível em: <a href='https://www.scielo.br/j/rbepid/a/JvPdyqdqjwtwWbxxKwb96Zv/?lang=pt' target='_blank'>https://www.scielo.br/j/rbepid/a/JvPdyqdqjwtwWbxxKwb96Zv/?lang=pt</a>. Acesso em: 26 jun. 2024.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Fim do Accordion -->
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod3: {
		ariaLabel: "bibliografiaMod3",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia Módulo 3",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-11">
					<div class="mb-5">
						<!-- Accordion -->
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Aula 1</button>
								</h5>
								<div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INFRAESTRUTURA NACIONAL DE DADOS. BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. <strong>Infraestrutura Nacional de Dados</strong>. Brasília, DF: Governo Digital, 2023. Disponível em: <a href='https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados' target='_blank'>https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados</a>. Acesso em: 30 maio 2025.Serviços e Informações do Brasil</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDE NACIONAL DE DADOS EM SAÚDE (RNDS). BRASIL. Ministério da Saúde. <strong>Rede Nacional de Dados em Saúde (RNDS)</strong>. Brasília, DF: Ministério da Saúde, 2020. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/seidigi/rnds' target='_blank'>https://www.gov.br/saude/pt-br/composicao/seidigi/rnds</a>. Acesso em: 30 maio 2025.</li>

											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Aula 2</button>
								</h5>
								<div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Datasus. <strong>Ata da 2ª Reunião CIINFO, 10 de dezembro de 2019</strong> - Versão Final Assinada. Disponível em: <a href='https://datasus.saude.gov.br/wp-content/uploads/2020/05/ATA-da-2a-Reuni%C3%A3o-CIINFO-10.12.2019-Vers%C3%A3o-FINAL-Assinada.pdf' target='_blank'>https://datasus.saude.gov.br/wp-content/uploads/2020/05/ATA-da-2a-Reuni%C3%A3o-CIINFO-10.12.2019-Vers%C3%A3o-FINAL-Assinada.pdf</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Gstão e Inovação dos Serviços Públicos. Instituto Nacional de Tecnologia da Informação. <strong>ICP-Brasil</strong>. Disponível em: <a href='https://www.gov.br/iti/pt-br/assuntos/icp-brasil' target='_blank'>https://www.gov.br/iti/pt-br/assuntos/icp-brasil</a>. Acesso em: 13 jul. 2024.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Lei n.º 13.709, de 14 de agosto de 2018</strong>. Dispõe sobre a proteção de dados pessoais e altera a Lei n.º 12.965, de 23 de abril de 2014 (Marco Civil da Internet). Este texto não substitui o publicado no DOU de 15.8.2018, e republicado parcialmente em 15.8.2018 - Edição extra Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Portaria GM/MS n.º 1796, de 22 de julho de 2019</strong>. Redefine o Comitê de Informação e Informática em Saúde (CIINFO/MS) no âmbito do Ministério da Saúde. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2019/prt1796_22_07_2019.html' target='_blank'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2019/prt1796_22_07_2019.html</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria-Executiva. Departamento de Monitoramento e Avaliação do SUS. <strong>Política Nacional de Informação e Informática em Saúde</strong>. Brasília: Ministério da Saúde, 2016. 56 p. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_infor_informatica_saude_2016.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_infor_informatica_saude_2016.pdf</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Portaria nº 1.434, de 28 de maio de 2020. Meu SUS Digital: Legislação. <strong>Diário Oficial da União</strong>: Seção 1, Brasília, DF, n. 102, p. 231, 29 maio 2020. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/seidigi/meususdigital/legislacao' target='_blank'>https://www.gov.br/saude/pt-br/composicao/seidigi/meususdigital/legislacao</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Síndrome Respiratória Aguda Grave</strong>. SRAG 2021 e 2022. Disponível em: <a href='https://dados.gov.br/dados/conjuntos-dados/srag-2021-e-2022' target='_blank'>https://dados.gov.br/dados/conjuntos-dados/srag-2021-e-2022</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">D. Bender and K. Sartipi, "HL7 FHIR: An Agile and RESTful approach to healthcare information exchange," Proceedings of the 26th IEEE International Symposium on Computer-Based Medical Systems, Porto, Portugal, 2013, pp. 326-331, <a href='https://ieeexplore.ieee.org/document/6627810' target='_blank'>https://ieeexplore.ieee.org/document/6627810</a>. Acesso em: 22 maio 2025.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BENDER, Duane; SARTIPI, KAMRAN. HL7 FHIR: An Agile and REST-ful approach to healthcare information exchange. <em>In:</em> Proceedings of the 26th IEEE International Symposium on Computer-based Medical Systems; 2013. Portugal. p. 326-31.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HARRIS, P. A. <em>et al</em>. Research Electronic Data Capture (REDCap): a metadata-driven methodology and workflow process for providing translational research informatics support. <strong>Journal of Biomedical Informatics</strong>, v. 42, n. 2, p. 377-381, 2009. Disponível em: <a href='https://www.sciencedirect.com/science/article/pii/S1532046408001226' target='_blank'>https://www.sciencedirect.com/science/article/pii/S1532046408001226</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO DE ESTUDOS PARA POLÍTICAS DE SAÚDE. <strong>Panorama IEPS:</strong> Programa TechSUS- Governança e interoperabilidade de dados para a Saúde. (Panorama IEPS nº 4) Disponível em: <a href='https://ieps.org.br/wp-content/uploads/2023/04/panorama-ieps-4-techSUS-saude-digital.pdf' target='_blank'>https://ieps.org.br/wp-content/uploads/2023/04/panorama-ieps-4-techSUS-saude-digital.pdf</a>. Acesso em: 13 jul. 2024.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Ayaz M, Pasha MF, Alzahrani MY, Budiarto R, Stiawan D
												The Fast Health Interoperability Resources (FHIR) Standard: Systematic Literature Review of Implementations, Applications, Challenges and Opportunities. JMIR Med Inform 2021;9(7):e21929. <a href='https://medinform.jmir.org/2021/7/e21929' target='_blank'>https://medinform.jmir.org/2021/7/e21929</a>. Acesso em: 22 maio 2025.
												</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VORISEK CN, LEHNE M, KLOPFENSTEIN SAI, MAYER PJ, BARTSCHKE A, HAESE T, THUN S. Fast Healthcare Interoperability Resources (FHIR) for Interoperability in Health Research: Systematic Review JMIR Med Inform 2022;10(7):e35724 <a href='https://medinform.jmir.org/2022/7/e35724/' target='_blank'>https://medinform.jmir.org/2022/7/e35724/</a> Acesso em : 16 maio 2025.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PRUD'HOMMEAUX E, COLLINS J, BOOTH D, PETERSON KJ, SOLBRIG HR, JIANG G. Development of a FHIR RDF data transformation and validation framework and its evaluation. J Biomed Inform. 2021 May;117:103755. doi: 10.1016/j.jbi.2021.103755. Epub 2021 Mar 26. PMID: 33781919; PMCID: PMC8131260. <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC8131260/' target='_blank'>https://pmc.ncbi.nlm.nih.gov/articles/PMC8131260/</a> Acesso em: 16 maio 2025</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAIS NETO, O. L. D.; BARROS, M. B. D. A. Fatores de risco para mortalidade neonatal e pós-neonatal na Região Centro-Oeste do Brasil: linkage entre bancos de dados de nascidos vivos e óbitos infantis. <strong>Caderno de Saúde Pública</strong>, v. 16, n. 2, p. 477-85, 2000. Disponível em: <a href='https://www.scielo.br/j/csp/a/4j5FmhX3rKjGTC8fmHLrZxF/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csp/a/4j5FmhX3rKjGTC8fmHLrZxF/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NAKAMOTO, S. <strong>Bitcoin</strong>: a peer-to-peer electronic cash system. 2008. Disponível em: <a href='https://bitcoin.org/bitcoin.pdf' target='_blank'>https://bitcoin.org/bitcoin.pdf</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANISATION FOR ECONOMIC CO-OPERATION AND DEVELOPMENT - OECD. <strong>Health Data Governance for the Digital Age</strong> - 2022. Disponível em: <a href='https://www.oecd-ilibrary.org/sites/68b60796-en/1/3/5/index.html?itemId=/content/publication/68b60796-en&_csp_=06e97bce8767c64c4b34a465198dee0c&itemIGO=oecd&itemContentType=book' target='_blank'>https://www.oecd-ilibrary.org/sites/68b60796-en/1/3/5/index.html?itemId=/content/publication/68b60796-en&_csp_=06e97bce8767c64c4b34a465198dee0c&itemIGO=oecd&itemContentType=book</a>. Acesso em: 13 jul. 2024.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SMITH, B.; JONES, J.; BROWN, A. Implementation of HL7 FHIR in Electronic Health Record Systems: Lessons Learned. <strong>IEEE Journal of Biomedical and Health Informatics</strong>, 2017. Disponível em: <a href='https://ieeexplore.ieee.org/document/7892358' target='_blank'>https://ieeexplore.ieee.org/document/7892358</a>. Acesso em: 13 jul. 2024.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Aula 3</button>
								</h5>
								<div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Araújo, M. S., Brito, M. B. R. de, Pessoa, L. T. S., Cadête, M. L. X., Marques, E. J. G., Coelho, L. N. L., … Resplandes, P. H. S. (2023). IMPACTO DA TELEMEDICINA NA PRESTAÇÃO DE CUIDADOS DE SAÚDE: DESAFIOS E OPORTUNIDADES. <strong>Revista Ibero-Americana De Humanidades, Ciências E Educação</strong>, 9(8), 1300–1306. <a href='https://doi.org/10.51891/rease.v9i8.10990' target='_blank'>https://doi.org/10.51891/rease.v9i8.10990</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Costa, M. V. da S., Camargos, M. C. S., Viana, S. M. N., & Mendes, U. V. de S. (2025). Avanços e desafios da interoperabilidade no Sistema Único de Saúde. <strong>Journal of Health Informatics</strong>, 17(1), 1112. <a href='https://doi.org/10.59681/2175-4411.v17.2025.1112' target='_blank'>https://doi.org/10.59681/2175-4411.v17.2025.1112</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Rachid, Raquel <em>et al</em>. Saúde digital e a plataformização do Estado brasileiro. <strong>Ciência & Saúde Coletiva [online]</strong>. v. 28, n. 7 [Acessado 22 Maio 2025] , pp. 2143-2153. Disponível em: <<a href='https://doi.org/10.1590/1413-81232023287.14302022' target='_blank'>https://doi.org/10.1590/1413-81232023287.14302022</a>>. ISSN 1678-4561. <a href='https://doi.org/10.1590/1413-81232023287.14302022' target='_blank'>https://doi.org/10.1590/1413-81232023287.14302022</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. Ministério da Saúde. Secretaria-Executiva. Departamento de Informática do SUS. <strong>Estratégia de Saúde Digital para o Brasil 2020-2028</strong> [recurso eletrônico]. / Ministério da Saúde, Secretaria-Executiva, Departamento de Informática do SUS. – Brasília : Ministério da Saúde, 2020. 128 p. : il. <a href='https://bvsms.saude.gov.br/bvs/publicacoes/estrategia_saude_digital_Brasil.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/estrategia_saude_digital_Brasil.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALBUQUERQUE, E. A. Y. <em>et al</em>. Prontuário Eletrônico do Paciente e certificação de software em saúde: Avanços que visam maior segurança dos dados médicos. <strong>Revista Brasileira de Inovação Tecnológica em Saúde</strong> ISSN: 2236-1103, v. 7, n. 2, 2017. <a href='https://revista.ibict.br/ciinf/article/view/5007' target='_blank'>https://revista.ibict.br/ciinf/article/view/5007</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. <strong>Diretrizes nacionais de implantação da estratégia e-SUS AB</strong> [recurso eletrônico] / Ministério da Saúde, Secretaria de Atenção à Saúde, Departamento de Atenção Básica. – Brasília : Ministério da Saúde, 2014. 11 p. <a href='https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_nacionais_implantacao_estrategia_esus.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_nacionais_implantacao_estrategia_esus.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Colleti Junior, J., Andrade, A. B. de ., & Carvalho, W. B. de .. (2018). Avaliação do uso de sistemas de prontuário eletrônico nas unidades de terapia intensiva brasileiras. <strong>Revista Brasileira De Terapia Intensiva</strong>, 30(3), 338–346. <a href='https://doi.org/10.5935/0103-507X.20180057' target='_blank'>https://doi.org/10.5935/0103-507X.20180057</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item4">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="false" aria-controls="collapse1-item4">Aula 4</button>
								</h5>
								<div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. MINISTÉRIO DA SAÚDE. Secretarie Executiva. Departamento de Monitoramento e Avaliação do SUS. <strong>Política Nacional de Informação e Informática em Saúde</strong> / Ministério da Saúde, Secretaria Executiva, Departamento de Monitoramento e Avaliação do SUS. – Brasília : Ministério da Saúde, 2016. 56 p. : il. <a href='https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_infor_informatica_saude_2016.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_infor_informatica_saude_2016.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SCHÖNHOLZER TE, PINTO IC, ZACHARIAS FCM, GAETE RAC, SERRANO-GALLARDO MDP. <strong>Implantação do sistema e-SUS Atenção Básica</strong>: impacto no cotidiano dos profissionais da Atenção Primária à Saúde. Rev. Latino-Am. Enfermagem. 2021;29:e3447. <a href='https://www.scielo.br/j/rlae/a/mpkGdqxpRBHH3B7cSyzjSXc/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/rlae/a/mpkGdqxpRBHH3B7cSyzjSXc/?format=pdf&lang=pt</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DE ALENCAR, M. M. V.; ANDRADE, C. R. A. G.; E VÉRAS, A. R. de A. R.; FREITAS NETO, O. de G.; POL-FACHIN, L. <strong>Interoperabilidade e Sistemas de Informações em Saúde</strong>: o que estamos publicando no Brasil?. Brazilian Journal of Health Review, [S. l.], v. 6, n. 4, p. 17771–17790, 2023. DOI: 10.34119/bjhrv6n4-292. <a href='https://ojs.brazilianjournals.com.br/ojs/index.php/BJHR/article/view/62255' target='_blank'>https://ojs.brazilianjournals.com.br/ojs/index.php/BJHR/article/view/62255</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REIS-SANTOS, BARBARA. <strong>Sistemas de Informação em Saúde: o quanto estamos avançando?</strong>. Epidemiologia e Serviços de Saúde [online]. v. 32, n. 2, 2023. <a href='https://www.scielo.br/j/ress/a/YcfndkbP5rnMXS4chLM4WSr/?lang=pt' target='_blank'>https://www.scielo.br/j/ress/a/YcfndkbP5rnMXS4chLM4WSr/?lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION. <strong>Global strategy on digital health 2020-2025</strong>. Geneva: World Health Organization; 2021. <a href='https://www.who.int/docs/default-source/documents/gs4dhdaa2a9f352b0445bafbc79ca799dce4d.pdf' target='_blank'>https://www.who.int/docs/default-source/documents/gs4dhdaa2a9f352b0445bafbc79ca799dce4d.pdf</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COSTA, M. V. DA S., CAMARGOS, M. C. S., VIANA, S. M. N., & MENDES, U. V. DE S. <strong>Avanços e desafios da interoperabilidade no Sistema Único de Saúde</strong>. Journal of Health Informatics, 2025, 17(1). <a href='https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/1112' target='_blank'>https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/1112</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Fim do Accordion -->
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod4: {
		ariaLabel: "bibliografiaMod4",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia Módulo 4",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-11">
					<div class="mb-5">
							<p>A bibliografia a seguir é comum às aulas 1, 2, 3 e 4.</p>

							<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ASSOCIAÇÃO BRASILEIRA DE TELEMEDICINA E TELESSAÚDE. Relatório sobre Telemedicina no Brasil. 2023. Disponível em: <a href='https://www.abtms.org.br/' target='_blank'>https://www.abtms.org.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BANCO MUNDIAL. Relatório sobre Saúde Global. 2020. Disponível em: <a href='https://www.worldbank.org/en/topic/health' target='_blank'>https://www.worldbank.org/en/topic/health</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FUNDAÇÃO GETÚLIO VARGAS. Parcerias Público-Privadas na Saúde. 2021. Disponível em: <a href='https://www.fgv.br/' target='_blank'>https://www.fgv.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FROST & SULLIVAN. Mercado de Saúde Digital no Brasil. 2023. Disponível em: <a href='https://ww2.frost.com/' target='_blank'>https://ww2.frost.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GLOBAL MARKET INSIGHTS. Mercado Global de Saúde Digital. 2024. Disponível em: <a href='https://www.gminsights.com/' target='_blank'>https://www.gminsights.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Pesquisa Nacional de Saúde. 2019a. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Estatísticas de Saúde. 2019b. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. População Quilombola. 2019c. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INTERNATIONAL DATA CORPORATION. Mercado Global de Dispositivos Vestíveis. 2024. Disponível em: <a href='https://www.idc.com/' target='_blank'>https://www.idc.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MCKINSEY & COMPANY. A IA na Saúde: Economia e Eficiência. 2023. Disponível em: <a href='https://www.mckinsey.com/' target='_blank'>https://www.mckinsey.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Boletim Epidemiológico de Arboviroses. 2022. Disponível em: <a href='https://www.saude.gov.br/' target='_blank'>https://www.saude.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Indicadores de Mortalidade Materna. 2020. Disponível em: <a href='https://www.saude.gov.br/indicadores-de-saude' target='_blank'>https://www.saude.gov.br/indicadores-de-saude</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. COVID-19 Dashboard. 2023. Disponível em: <a href='https://covid19.who.int/' target='_blank'>https://covid19.who.int/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Doenças Crônicas. 2020. Disponível em: <a href='https://www.who.int/chronic_diseases/en/' target='_blank'>https://www.who.int/chronic_diseases/en/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Envelhecimento e saúde. 2015. Disponível em: <a href='https://www.who.int/ageing/en/' target='_blank'>https://www.who.int/ageing/en/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Tecnologias em Saúde. 2021. Disponível em: <a href='https://www.who.int/health-topics/technology' target='_blank'>https://www.who.int/health-topics/technology.</li>
</a>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Saúde Mental no Brasil. 2020. Disponível em: <a href='https://www.paho.org/' target='_blank'>https://www.paho.org/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SECRETARIA ESPECIAL DE SAÚDE INDÍGENA. Relatório de Saúde Indígena. 2021. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/sesai' target='_blank'>https://www.gov.br/saude/pt-br/composicao/sesai</a>.</li>
												
											</ul>
										</div>
					</div>
				</div>
			</div>
		`,
	},
	autorMod1Aula1: {
		ariaLabel: "autorMod1Aula1",
		modalSize: "modal-xl",
		modalTitle: "Sobre os autores",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Uende Aparecida Figueiredo Gomes</h5>
						<p class="mb-0">Professora-pesquisadora do Departamento de Engenharia Sanitária e Ambiental da Escola de Engenharia da Universidade Federal de Minas Gerais (DESA/UFMG).</p>
					</div>
					
					<div class="mb-5">
						<h5 class="mb-3">Alexandre Pessoa Dias </h5>
						<p class="mb-0">Coordenador acadêmico do curso, professor-pesquisador da Escola Politécnica de Saúde Joaquim Venâncio da Fiocruz (ESPJV/Fiocruz).</p>
					</div>

				</div>
			</div>
		`,
	},
	glossario: {
		ariaLabel: "glossario",
		modalSize: "modal-lg",
		modalTitle: "Glossário",
		modalBody: `
			<div class="accordion accordion-flush" id="accordionExample2">
	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-c">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-c" aria-expanded="false" aria-controls="collapse1-c">C</button>
		</h2>
		<div id="collapse1-c" class="accordion-collapse collapse" aria-labelledby="heading1-c" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>CIT</strong></p>
					<p><strong>Comissão Intergestores Tripartite:</strong> Um fórum de discussão e deliberação que reúne
						representantes do Ministério da Saúde, dos estados e dos municípios para tratar de temas
						relacionados ao SUS.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-e">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-e" aria-expanded="false" aria-controls="collapse1-e">E</button>
		</h2>
		<div id="collapse1-e" class="accordion-collapse collapse" aria-labelledby="heading1-e" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>ESD</strong></p>
					<p><strong>Estratégia de Saúde Digital:</strong> Iniciativa do Ministério da Saúde para promover a
						digitalização dos serviços de saúde no Brasil, com foco na integração de dados e no uso de
						tecnologias emergentes.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-i">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-i" aria-expanded="false" aria-controls="collapse1-i">I</button>
		</h2>
		<div id="collapse1-i" class="accordion-collapse collapse" aria-labelledby="heading1-i" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>IA</strong></p>
					<p>Inteligência Artificial: Tecnologia que simula processos de inteligência humana, utilizada na
						saúde para diagnósticos, previsão de surtos e personalização de tratamentos.</p>
				</div>

				<div class="mb-5">
					<p class="mb-3"><strong>IoT</strong></p>
					<p><strong>Internet das Coisas:</strong> Tecnologia que conecta objetos do dia a dia à internet,
						permitindo que eles coletem e compartilhem dados, sendo aplicada na saúde para monitoramento e
						gestão de dados clínicos.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-o">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-o" aria-expanded="false" aria-controls="collapse1-o">O</button>
		</h2>
		<div id="collapse1-o" class="accordion-collapse collapse" aria-labelledby="heading1-o" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>OMS</strong></p>
					<p><strong>Organização Mundial da Saúde:</strong> Agência especializada das Nações Unidas que
						coordena a saúde pública internacional e define normas e diretrizes globais para a saúde.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-p">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-p" aria-expanded="false" aria-controls="collapse1-p">P</button>
		</h2>
		<div id="collapse1-p" class="accordion-collapse collapse" aria-labelledby="heading1-p" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>PNIIS</strong></p>
					<p><strong>Política Nacional de Informação e Informática em Saúde:</strong> Política elaborada para
						consolidar as ações do SUS relacionadas à informação e tecnologia da informação em saúde, com
						diretrizes para os três níveis da federação.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-r">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-r" aria-expanded="false" aria-controls="collapse1-r">R</button>
		</h2>
		<div id="collapse1-r" class="accordion-collapse collapse" aria-labelledby="heading1-r" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>RNDS</strong></p>
					<p><strong>Rede Nacional de Dados e Saúde:</strong> Plataforma de interoperabilidade do SUS que
						integra dados de saúde em todo o país, promovendo a conectividade entre as diferentes regiões.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-s">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-s" aria-expanded="false" aria-controls="collapse1-s">S</button>
		</h2>
		<div id="collapse1-s" class="accordion-collapse collapse" aria-labelledby="heading1-s" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>SNIS</strong></p>
					<p><strong>Sistema Nacional de Informações em Saúde:</strong> Um sistema proposto para organizar as
						informações em saúde no Brasil, gerido pelo Ministério da Saúde em parceria com estados e
						municípios.</p>
				</div>

				<div class="mb-5">
					<p class="mb-3"><strong>SUS</strong></p>
					<p><strong>Sistema Único de Saúde:</strong> O sistema de saúde pública do Brasil que visa garantir
						acesso universal, integral e gratuito aos serviços de saúde para toda a população.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-t">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-t" aria-expanded="false" aria-controls="collapse1-t">T</button>
		</h2>
		<div id="collapse1-t" class="accordion-collapse collapse" aria-labelledby="heading1-t" data-bs-parent="">
			<div class="accordion-body">
				<p class="mb-3"><strong>TIC</strong></p>
				<p><strong>Tecnologias de Informação e Comunicação:</strong> Conjunto de tecnologias usadas para o
					processamento e comunicação de dados, fundamentais para a organização e gestão da informação em
					saúde.</p>
			</div>
		</div>
	</div>
</div>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener("DOMContentLoaded", function (event) {
	//do work

	modalButtons.forEach((btn) => {
		// Check if the modal exist
		const modalId = btn.getAttribute("data-bs-target").slice(1);
		const createdModalId = document.getElementById(modalId);
		const modalOrigin = btn.getAttribute("data-bs-target").slice(7);
		const hasPropriety = Object.hasOwn(modalInfos, modalOrigin);

		if (!createdModalId && hasPropriety) {
			// console.log('modalOrigin: ' + modalOrigin + ' hasPropriety: ' + hasPropriety);

			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement("div");
	const modalLabel = id.slice(6);

	newModal.classList.add("modal", "fade");
	newModal.setAttribute("id", id);
	newModal.setAttribute("tabindex", "-1");
	newModal.setAttribute("aria-labelledby", modalLabel);
	newModal.setAttribute("aria-hidden", "true");

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}

//Before and after
const container = document.querySelector(".antes-e-depois--container");
document.querySelector(".antes-e-depois--slider").addEventListener("input", (e) => {
	container.style.setProperty("--position", `${e.target.value}%`);
});
