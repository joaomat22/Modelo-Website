
let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 13000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;    
    
    let l1 = document.getElementById("r1");

    
    
}

function countReturn1(){
    count = 1;
}

function countReturn2(){
    count = 2;
}

function countReturn3(){
    count = 3;
}

function countReturn4(){
    count = 4;
}



function changeTextFirst(){
    let changeColorIconFirst = document.getElementById("boxSelectionFirst");
    let changeImageIconFirst = document.getElementById("iconFirst");
    changeColorIconFirst.style.backgroundColor = "#00bf63";
    changeImageIconFirst.src = "./assets/icon_2.png";

    let changeColorIconSecond = document.getElementById("boxSelectionSecond");
    let changeImageIconSecond = document.getElementById("iconSecond");
    changeColorIconSecond.style.backgroundColor = "#1e1a1b";
    changeImageIconSecond.src = "./assets/icon_3.png";
    
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");
    let p6 = document.getElementById("p6");
    p1.innerText = "Garantimos que seu site carregue rapidamente e funcione de maneira eficiente, otimizando o código, os recursos e a infraestrutura. Melhoramos a velocidade e o desempenho geral para proporcionar uma experiência excepcional aos visitantes.";
    p2.innerText = "Na PixelLogic Developments, estamos comprometidos em oferecer soluções web com o melhor desempenho possível. Utilizamos tecnologias avançadas e estratégias de otimização para garantir que o sites e aplicativos que desenvolvemos sejam rápidos, eficientes e altamente responsivos.";
    p3.innerText = "Nossa equipe altamente capacitada está sempre buscando as melhores práticas de codificação para garantir que cada linha de código seja escrita de forma otimizada. Trabalhamos com algoritmos eficientes, implementamos caching adequado, comprimimos recursos e otimizamos imagens para garantir que o desempenho do site seja excelente.";
    p4.innerText = "Além disso, realizamos testes rigorosos de desempenho para identificar gargalos e realizar ajustes necessários. Monitoramos constantemente o desempenho dos sites que desenvolvemos, garantindo que estejam funcionando de maneira eficiente e rápida em diferentes dispositivos e navegadores.";
    p5.innerText = "Com nossa abordagem focada em otimização de desempenho, oferecemos aos nossos clientes uma experiência excepcional, com sites que carregam rapidamente, navegação suave e interações ágeis.";
    p6.innerText = "";
}

function changeTextSecond(){
    let changeColorIconSecond = document.getElementById("boxSelectionSecond");
    let changeImageIconSecond = document.getElementById("iconSecond");
    changeColorIconSecond.style.backgroundColor = "#00bf63";
    changeImageIconSecond.src = "./assets/icon_4.png";

    let changeColorIconFirst = document.getElementById("boxSelectionFirst");
    let changeImageIconFirst = document.getElementById("iconFirst");
    changeColorIconFirst.style.backgroundColor = "#1e1a1b";
    changeImageIconFirst.src = "./assets/icon_1.png";
    
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");
    let p6 = document.getElementById("p6");
    p1.innerHTML = "Oferecemos serviços de manutenção contínua para garantir que seu site esteja sempre atualizado, seguro e funcionando perfeitamente. Estamos prontos para fornecer suporte técnico especializado e resolver qualquer problema que possa surgir.";
    p2.innerHTML = "Na PixelLogic Developments, entendemos a importância da manutenção contínua e suporte de qualidade para garantir que os sites e aplicativos funcionem perfeitamente ao longo do tempo. É por isso que oferecemos serviços abrangentes de manutenção e suporte para atender às necessidades de nossos clientes.";
    p3.innerHTML = "Nossa equipe de suporte dedicada está disponível para ajudar em todas as etapas, desde a identificação e correção de problemas até a implementação de melhorias e atualizações. Temos um período de tempo acordado com os clientes durante o qual nossa equipe revisará regularmente seus sites, verificando a funcionalidade, a segurança e o desempenho.";
    p4.innerHTML = "Se surgir algum problema, nossa equipe estará pronta para responder prontamente, oferecendo soluções eficazes e rápidas. Além disso, estamos sempre disponíveis para fornecer orientação e suporte técnico aos nossos clientes, ajudando-os a aproveitar ao máximo suas soluções web.";
    p5.innerHTML = "Nossa abordagem proativa de manutenção e suporte garante que os sites e aplicativos de nossos clientes estejam sempre atualizados, seguros e funcionando perfeitamente, proporcionando tranquilidade e confiança.";
    p6.innerHTML = "Conte conosco para uma otimização de desempenho excepcional e um suporte confiável e dedicado em todas as suas necessidades de desenvolvimento web. Estamos prontos para ajudar a impulsionar o sucesso de sua presença online.";
}


function changeTextFirstEng(){
    let changeColorIconFirst = document.getElementById("boxSelectionFirst");
    let changeImageIconFirst = document.getElementById("iconFirst");
    changeColorIconFirst.style.backgroundColor = "#00bf63";
    changeImageIconFirst.src = "./assets/icon_2.png";

    let changeColorIconSecond = document.getElementById("boxSelectionSecond");
    let changeImageIconSecond = document.getElementById("iconSecond");
    changeColorIconSecond.style.backgroundColor = "#1e1a1b";
    changeImageIconSecond.src = "./assets/icon_3.png";
    
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");
    let p6 = document.getElementById("p6");
    p1.innerText = "We make sure your website loads quickly and runs efficiently by optimizing the code, resources and infrastructure. We've improved speed and overall performance to provide an exceptional visitor experience.";
    p2.innerText = "At PixelLogic Developments, we are committed to delivering web solutions with the best possible performance. We utilize advanced technologies and optimization strategies to ensure that the websites and applications we develop are fast, efficient, and highly responsive.";
    p3.innerText = "Our highly skilled team is always looking for best coding practices to ensure every line of code is written optimally. We work with efficient algorithms, implement proper caching, compress resources and optimize images to ensure that the website performs at an excellent level.";
    p4.innerText = "In addition, we conduct rigorous performance tests to identify bottlenecks and make necessary adjustments. We constantly monitor the performance of the websites we develop, ensuring they are working efficiently and quickly across different devices and browsers.";
    p5.innerText = "With our approach focused on performance optimization, we offer our customers an exceptional experience, with websites that load quickly, smooth navigation and agile interactions.";
    p6.innerText = "";
}

function changeTextSecondEng(){
    let changeColorIconSecond = document.getElementById("boxSelectionSecond");
    let changeImageIconSecond = document.getElementById("iconSecond");
    changeColorIconSecond.style.backgroundColor = "#00bf63";
    changeImageIconSecond.src = "./assets/icon_4.png";

    let changeColorIconFirst = document.getElementById("boxSelectionFirst");
    let changeImageIconFirst = document.getElementById("iconFirst");
    changeColorIconFirst.style.backgroundColor = "#1e1a1b";
    changeImageIconFirst.src = "./assets/icon_1.png";
    
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");
    let p6 = document.getElementById("p6");
    p1.innerHTML = "We offer ongoing maintenance services to ensure that your website is always up to date, secure and running smoothly. We are ready to provide expert technical support and resolve any issues that may arise.";
    p2.innerHTML = "At PixelLogic Developments, we understand the importance of ongoing maintenance and quality support to ensure websites and apps run smoothly over time. That's why we offer comprehensive maintenance and support services to meet our customers' needs.";
    p3.innerHTML = "Our dedicated support team is available to help every step of the way, from identifying and fixing issues to implementing improvements and updates. We have an agreed period of time with clients during which our team will regularly review their sites for functionality, security and performance.";
    p4.innerHTML = "If any problems arise, our team is ready to respond promptly, offering effective and quick solutions. In addition, we are always available to provide guidance and technical support to our customers, helping them to get the most out of their web solutions.";
    p5.innerHTML = "Our proactive approach to maintenance and support ensures that our customers' websites and applications are always up to date, secure and running smoothly, providing peace of mind and confidence.";
    p6.innerHTML = "Count on us for exceptional performance optimization and reliable, dedicated support for all your web development needs. We're ready to help drive the success of your online presence.";
}


function changeLanguage(){
    let selectElement = document.querySelector("select");
    let selectionOption = selectElement.value;


    if(selectionOption == 'en'){
        let menueng = document.getElementById("menu");
        menueng.innerHTML = '<li><a href="index.html">home</a></li>' +
        '<li><a href="notfound.html">about</a></li>' +
        '<li><a href="notfound.html">services</a></li>' +
        '<li><a href="notfound.html">contacts</a></li>';

        let companyNameEng = document.getElementById("boxText");
        companyNameEng.innerHTML = '<h2><span class="company-name">PixelLogic Developments</span> - Your Partner in Web Development</h2>' +
        '<br>' +
        '<p class="text-company">We offer a wide range of web development solutions to meet our clients unique needs. With the experience and expertise of PixelLogic Developments, we deliver innovative and functional projects. Check out the services we have to offer:</p>' +
        '<br>' +
        '<!-- List of services -->' +
        '<ul class="serviceList">' +
            '<li>Modern Web Design</li>' +
            '<li>Front-end Development</li>' +
            '<li>Back-end Development</li>' +
            '<li>Performance Optimization</li>' +
            '<li>API Integration</li>' +
            '<li>Maintenance and Support</li>' +
        '</ul>'

        let slideFirstEng = document.getElementById("slideFirst");
        let slideSecondEng = document.getElementById("slideSecond");
        let slideThirdEng = document.getElementById("slideThird");
        let slideFourthEng = document.getElementById("slideFourth");

        slideFirstEng.innerHTML = '<span>Modern Web Design:</span>' +
        '<p>We create attractive and responsive designs that adapt perfectly to different devices and screen sizes. Our web design experts ensure an exceptional user experience.</p>';

        slideSecondEng.innerHTML = '<span>Back-end Development: </span>' +
        '<p>We build robust and scalable server-side systems, utilizing languages such as Python, PHP, and Node.js. We implement advanced features and customized functionalities to meet the specific needs of your project.</p>'

        slideThirdEng.innerHTML = '<span>Front-end Development: </span>' +
        '<p>We transform designs into functional code, utilizing technologies such as HTML, CSS, and JavaScript. We create interactive and intuitive interfaces to provide a smooth and engaging navigation experience.</p>'

        slideFourthEng.innerHTML = '<span>API Integration: </span>' +
        '<p>We connect your website to external services, such as social media platforms, payment systems, and third-party services. We intelligently integrate APIs to expand functionalities and enhance the efficiency of your website.</p>'

        let selectionFirst = document.getElementById('selectionFirst');
        selectionFirst.innerHTML = '<div class="boxSelectionFirst" id="boxSelectionFirst" onclick="changeTextFirstEng()">' +
            '<img src="./assets/icon_2.png" alt="icon first" class="iconfirst" id="iconFirst">' +
            '<br>' +
            '<div class="textfirst">' +
                '<p>Performance Optimization</p>' +
            '</div>' +
        '</div>' +
        '' +
        '<div class="boxSelectionSecond" id="boxSelectionSecond" onclick="changeTextSecondEng()">' +
            '<img src="./assets/icon_3.png" alt="icon second" class="iconsecond" id="iconSecond">' +
            '<br>' +
            '<div class="textfirst">' +
                '<p>Maintenance and Support</p>' +
            '</div>' +
        '</div>';

        changeTextFirstEng();

        let companyFooter = document.getElementById("companyFooter");
        companyFooter.innerHTML = '<h2>PixelLogic Developments</h2>' +

        '<a href="./notfound.html"><img src="./assets/footer_icon_1.png" alt="facebook icon"></a>' +
        '<a href="./notfound.html"><img src="./assets/footer_icon_2.png" alt="youtube icon"></a>' +
        '<a href="./notfound.html"><img src="./assets/footer_icon_3.png" alt="linkedin icon"></a>' +
        '<a href="./notfound.html"><img src="./assets/footer_icon_4.png" alt="instagram icon"></a>' +
        '<a href="./notfound.html"><img src="./assets/footer_icon_5.png" alt="twitter icon"></a>' +

        '<p>You are accessing the experience in:</p>' +

        '<select name="language" onchange="changeLanguage()" class="select">' +
            '<option value="pt">Português</option>' +
            '<option value="en" selected>English</option>' +
        '</select>' +

        '<p>Update language preference</p>';

        let linksFooter = document.getElementById("linksFooter");
        linksFooter.innerHTML = '<ul>' +
            '<li><a href="notfound.html">Who we are</a></li>' +
            '<li><a href="notfound.html">What we do</a></li>' +
            '<li><a href="notfound.html">Contact us</a></li>' +
            '<li><a href="notfound.html">Contact information</a></li>' +
            '<li><a href="notfound.html">Our people</a></li>' +
        '</ul>';

        let servicesFooter = document.getElementById("servicesFooter");
        servicesFooter.innerHTML = '<ul>' +
            '<li><a href="notfound.html">Accessibility</a></li>' +
            '<li><a href="notfound.html">Terms and conditions</a></li>' +
            '<li><a href="notfound.html">Cookie policy</a></li>' +
            
        '</ul>';

        let copyrightFooter = document.getElementById("copyrightFooter");
        copyrightFooter.innerHTML = '© PixelLogic Developments | All rights reserved.'
    }

    if(selectionOption == 'pt'){
        let menupt = document.getElementById("menu");
        menupt.innerHTML = '<li><a href="index.html">home</a></li>' +
        '<li><a href="notfound.html">sobre</a></li>' +
        '<li><a href="notfound.html">serviços</a></li>' +
        '<li><a href="notfound.html">contatos</a></li>';

        let companyNamePt = document.getElementById("boxText");
        companyNamePt.innerHTML = '<h2><span class="company-name">PixelLogic Developments</span> - Seu parceiro em Desenvolvimento Web</h2>' +
        '<br>' +
        '<p class="text-company">Oferecemos uma ampla gama de soluções de desenvolvimento web para atender às necessidades exclusivas dos nossos clientes. Com a experiência e expertise da PixelLogic Developments, entregamos projetos inovadores e funcionais. Confira os serviços que temos a oferecer:</p>' +
        '<br>' +
        '<!-- List of services -->' +
        '<ul class="serviceList">' +
            '<li>Web Design Moderno</li>' +
            '<li>Desenvolvimento Front-end</li>' +
            '<li>Desenvolvimento Back-end</li>' +
            '<li>Otimização de Desempenho</li>' +
            '<li>Integração de APIs</li>' +
            '<li>Manutenção e Suporte</li>' +
        '</ul>'

        let slideFirstPt = document.getElementById("slideFirst");
        let slideSecondPt = document.getElementById("slideSecond");
        let slideThirdPt = document.getElementById("slideThird");
        let slideFourthPt = document.getElementById("slideFourth");

        slideFirstPt.innerHTML = '<span>Web Design Moderno:</span>' +
        '<p>Criamos designs atraentes e responsivos que se adaptam perfeitamente a diferentes dispositivos e tamanhos de tela. Nossos especialistas em web design garantem uma experiência de usuário excepcional.</p>';

        slideSecondPt.innerHTML = '<span>Desenvolvimento Back-end: </span>' +
        '<p>Construímos sistemas robustos e escaláveis do lado do servidor, utilizando linguagens como Python, PHP e Node.js. Implementamos recursos avançados e funcionalidades personalizadas para atender às necessidades específicas do seu projeto.</p>'

        slideThirdPt.innerHTML = '<span>Desenvolvimento Front-end: </span>' +
        '<p>Transformamos designs em código funcional, utilizando tecnologias como HTML, CSS e JavaScript. Criamos interfaces interativas e intuitivas para proporcionar uma navegação suave e envolvente.</p>'

        slideFourthPt.innerHTML = '<span>Integração de APIs: </span>' +
        '<p>Conectamos seu site a serviços externos, como mídias sociais, sistemas de pagamento e serviços de terceiros. Integramos APIs de forma inteligente para expandir as funcionalidades e melhorar a eficiência do seu site.</p>'

        let selectionFirst = document.getElementById('selectionFirst');
        selectionFirst.innerHTML = '<div class="boxSelectionFirst" id="boxSelectionFirst" onclick="changeTextFirst()">' +
            '<img src="./assets/icon_2.png" alt="icon first" class="iconfirst" id="iconFirst">' +
            '<br>' +
            '<div class="textfirst">' +
                '<p>Otimização de Desempenho</p>' +
            '</div>' +
        '</div>' +
        '' +
        '<div class="boxSelectionSecond" id="boxSelectionSecond" onclick="changeTextSecond()">' +
            '<img src="./assets/icon_3.png" alt="icon second" class="iconsecond" id="iconSecond">' +
            '<br>' +
            '<div class="textfirst">' +
                '<p>Manutenção e Suporte</p>' +
            '</div>' +
        '</div>';

        changeTextFirst();

        let companyFooter = document.getElementById("companyFooter");
        companyFooter.innerHTML = '<h2>PixelLogic Developments</h2>' +

        '<a href="./notfound.html"><img src="./assets/footer_icon_1.png" alt="facebook icon"></a>' +
        '<a href="./notfound.html"><img src="./assets/footer_icon_2.png" alt="youtube icon"></a>' +
        '<a href="./notfound.html"><img src="./assets/footer_icon_3.png" alt="linkedin icon"></a>' +
        '<a href="./notfound.html"><img src="./assets/footer_icon_4.png" alt="instagram icon"></a>' +
        '<a href="./notfound.html"><img src="./assets/footer_icon_5.png" alt="twitter icon"></a>' +

        '<p>Você está acessando a experiência em:</p>' +

        '<select name="language" onchange="changeLanguage()" class="select">' +
            '<option value="pt">Português</option>' +
            '<option value="en">English</option>' +
        '</select>' +

        '<p>Atualizar preferência de idioma</p>';

        let linksFooter = document.getElementById("linksFooter");
        linksFooter.innerHTML = '<ul>' +
            '<li><a href="notfound.html">Quem somos</a></li>' +
            '<li><a href="notfound.html">O que fazemos</a></li>' +
            '<li><a href="notfound.html">Fale conosco</a></li>' +
            '<li><a href="notfound.html">Informações de contato</a></li>' +
            '<li><a href="notfound.html">Nossa gente</a></li>' +
        '</ul>';

        let servicesFooter = document.getElementById("servicesFooter");
        servicesFooter.innerHTML = '<ul>' +
            '<li><a href="notfound.html">Acessibilidade</a></li>' +
            '<li><a href="notfound.html">Termos e condições</a></li>' +
            '<li><a href="notfound.html">Politica de cookies</a></li>' +
            
        '</ul>';

        let copyrightFooter = document.getElementById("copyrightFooter");
        copyrightFooter.innerHTML = '<p id="copyrightFooter">© PixelLogic Developments | Todos os direitos reservados.</p>'
    }
}
