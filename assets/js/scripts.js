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
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FIGUEIREDO, José Augusto N. G.; FIGUEIREDO, Jacyra N. G. <strong>Algoritmos</strong>: Lógica para Desenvolvimento de Programação de Computadores. 28. ed. Rio de Janeiro: Érica, 2016.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENEZES, Nilo Ney Coutinho. <strong>Introdução à Programação com Python</strong>: Algoritmos e Lógica de Programação para Iniciantes. 2. ed. São Paulo: Novatec Editora, 2018. Disponível em: <a href='' target='_blank' rel="noopener noreferrer">https://www.kufunda.net/publicdocs/Introdu%C3%A7%C3%A3o%20%C3%A0%20programa%C3%A7%C3%A3o%20com%20Python%20algoritmos%20e%20l%C3%B3gica%20de%20programa%C3%A7%C3%A3o%20para%20iniciantes%20(Nilo%20Ney%20Coutinho%20Menezes).pdf</a>. Acesso em: 8 jun. 2025.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENEZES, Nilo Ney Coutinho.<strong> Introdução à programação com Python:</strong> algoritmos e lógica de programação. 2. ed. São Paulo: Novatec Editora, 2014. p. 53.</li>
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
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GROLEMUND, Garrett; WICKHAM, Hadley. <strong>R for Data Science</strong>: import, tidy, transform, visualize, and model data. Disponível em: <a href='https://r4ds.had.co.nz' target='_blank' rel="noopener noreferrer">https://r4ds.had.co.nz</a>. Acesso em: 8 jun. 2025. Versão em português em tradução: Disponível em: <a href='https://r4ds-translation.netlify.app' target='_blank' rel="noopener noreferrer">https://r4ds-translation.netlify.app</a>. Acesso em: 8 jun. 2025.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MATLOFF, Norman. <strong>The Art of R Programming</strong>: a tour of statistical software design. San Francisco: No Starch Press, 2011.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">THEUS, Garrett. <strong>Hands-On Programming with R</strong>: write your own functions and simulations. [S.l.]: Shroff Publishers & Distributors Pvt Ltd, 1 jul. 2014.</li>
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
											<ul class="list-group mb-5">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GROLEMUND, Garrett; WICKHAM, Hadley. <strong>R for Data Science</strong>: import, tidy, transform, visualize, and model data. Disponível em: <a href='https://r4ds.had.co.nz' target='_blank' rel="noopener noreferrer">https://r4ds.had.co.nz</a>. Acesso em: 8 jun. 2025. Versão em português em tradução: Disponível em: <a href='https://r4ds-translation.netlify.app' target='_blank' rel="noopener noreferrer">https://r4ds-translation.netlify.app</a>. Acesso em: 8 jun. 2025.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GIOVANIS, E.; OZDAMAR, O.; SAMUK, S. Health status and willingness-to-pay estimates for the benefits of improved recycling rates: evidence from Great Britain. <strong>SN Business & Economics</strong>, v. 1, n. 1, 2021. Dispoível em: <a href='https://doi.org/10.1007/s43546-020-00006-9' target='_blank' rel="noopener noreferrer">https://doi.org/10.1007/s43546-020-00006-9</a></li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">IMAI, C. <em>et al</em>. Tropical influenza and weather variability among children in an urban low-income population in Bangladesh. <strong>Global Health Action</strong>, v. 7, n. 1, 2014. Disponível em: <a href='https://doi.org/10.3402/gha.v7.24413' target='_blank' rel="noopener noreferrer">https://doi.org/10.3402/gha.v7.24413</a></li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Kostaki, E. G. l. <em>et al</em>. Estimation of the determinants for HIV late presentation using the traditional definition and molecular clock‐inferred dates: Evidence that older age, heterosexual risk group and more recent diagnosis are prognostic factors. <strong>HIV Medicine</strong>, v. 23, n. 11, p. 1143-1152, 2022. Disponível em: <a href='https://doi.org/10.1111/hiv.13415' target='_blank' rel="noopener noreferrer">https://doi.org/10.1111/hiv.13415</a></li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Morettin, P. A. <strong>Estatística Básica</strong>. 10. ed. Campinas, SP: Saraiva Uni, 2024</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Rosner, B. <strong>Fundamentals of biostatistics</strong>. 6th ed. Belmont, CA: Thomson-Brooks/Cole, 2006</li>
											</ul>

											<p><strong>Websites</strong></p>

											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GDESCRIPTIVE Statistics. Disponível em: <a href='https://aprendeconalf.es/en/teaching/statistics/manual/descriptive-statistics/' target='_blank' rel="noopener noreferrer">https://aprendeconalf.es/en/teaching/statistics/manual/descriptive-statistics/</a></li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HISTOGRAMA. 2022. 1 vídeo (8 min.). Disponível em: <a href='https://www.youtube.com/watch?v=cTFUfb0QL7o' target='_blank' rel="noopener noreferrer">https://www.youtube.com/watch?v=cTFUfb0QL7o</a></li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MEDIUM . Boxplot: Como interpretar e plotar em Python? Disponível em: </li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. PNAD – Pesquisa Nacional por Amostra de Domicílios. Disponível em: <a href='https://www.ibge.gov.br/estatisticas/sociais/populacao/9127-pesquisa-nacional-por-amostra-de-domicilios.html?=&t=o-que-e' target='_blank' rel="noopener noreferrer">https://www.ibge.gov.br/estatisticas/sociais/populacao/9127-pesquisa-nacional-por-amostra-de-domicilios.html?=&t=o-que-e</a></li>
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
											<ul class="list-group mb-5">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EME, P. E. <em>et al</em>. Obesity measures in the Kiribati population: a need to reclassify body mass index cut-points. <strong>BMC Public Health</strong>, v. 20, n. 1, 2020. <a href='https://doi.org/10.1186/s12889-020-09217-z' target='_blank' rel="noopener noreferrer">https://doi.org/10.1186/s12889-020-09217-z</a></li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">IMAI, C. <em>et al</em>. Tropical influenza and weather variability among children in an urban low-income population in Bangladesh. <strong>Global Health Action</strong>, v. 7, n. 1, 2014. <a href='https://doi.org/10.3402/gha.v7.24413' target='_blank' rel="noopener noreferrer">https://doi.org/10.3402/gha.v7.24413</a></li>
											</ul>

											<p><strong>Websites</strong></p>

											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DATA VIZ PROJECT. Disponível em: <a href='https://datavizproject.com/' target='_blank' rel="noopener noreferrer">https://datavizproject.com/</a></li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">THE DATA visualisation catalogue. <strong>Data Viz Project</strong>. Disponível em: <a href='https://datavizcatalogue.com/' target='_blank' rel="noopener noreferrer">https://datavizcatalogue.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FLOURISH. How to choose the right chart type for your data. Disponível em: <a href='https://flourish.studio/blog/choosing-the-right-visualisation/' target='_blank' rel="noopener noreferrer">https://flourish.studio/blog/choosing-the-right-visualisation/</a></li>
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
