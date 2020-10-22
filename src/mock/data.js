import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Asaph | Biotecnologista', // e.g: 'Name | Developer'
  lang: 'pt-br', // e.g: en, es, fr, jp
  description: 'Site portifólio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá, meu nome é',
  name: 'Asaph',
  subtitle: 'Biotecnologista </DevOps>',
  cta: 'Vamos lá!',
};

// ABOUT DATA
export const aboutData = {
  img: '1.png',
  paragraphOne: 'Um <b>biotecnologista apaixonado</b> pelo que faz, excelente <b>comunicador</b> e um ávido <b>relacionamentista</b>. Ama <b>descobrir</b> novas formas de <b>resolver</b> problemas e, justamete por isso, está sempre disposto a <b>enfrentar</b> novos dilemas.',
  paragraphTwo: 'Atualmete atua no setor de TI de uma grande <a class= about-wrapper__info-text href="https://www.magazineluiza.com.br/">varejista brasileira</a>, monitorando serviços e servidores, desenvolvendo scripts para novas monitorias e automações.',
  paragraphThree: 'Procura crescer na sua área de formação, buscando desafios no setor industrial, tendo um apreço grande pela indústria farmacêutica do país.',
  resume: 'https://drive.google.com/file/d/1jk5nPqzyxlCuVpuOg6_elo5UToEjMDmo/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'butantan.jpg',
    title: 'Instituto Butantan',
    info: 'Laboratório de Expressão Gênica em Eucariotos [02/2018 - 07/2018]',
    info2: 'Trabalhei como estagiário em diversos experimentos envolvendo o parasito <i>Schistosoma mansoni</i>, auxiliando a equipe técnica a desenvolver suas pesquisas com manutenção de meios de cultura, extração de vermes para execução de novos experimentos, bem como em pesquisas de bioinformática e quimioinformática usando de ferramentas como <a href="https://www.megasoftware.net/">MEGA</a> para alinhamento de sequências de proteínas e o software de ancoragem molecular <a href="https://www.ccdc.cam.ac.uk/solutions/csd-discovery/components/gold/">GOLD</a>.',
    url: 'http://verjolab.usp.br/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'softbox-luizalabs.jpeg',
    title: 'Assistente de Infraestrutura',
    info: 'Softbox|Luizalabs [02/2019 - Atualmente]',
    info2: 'Trabalho dando atendimento e suporte aos clientes da <a href="https://www.magazineluiza.com.br/">Magalu</a>, monitorando seus serviços, servidores e indicadores estratégicos da empresa usando as ferramentas <a href="https://grafana.com/">Grafana</a> e <a href="https://checkmk.com/"/>Check-MK</a>. Desenvolvo scripts para monitorias e automação de rotinas utilizando as linguagens <a href="https://www.python.org/">Pyhton</a> e <a href="https://www.gnu.org/software/bash/">Shell Script</a>.',
    url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Quer conversar comigo?',
  btn: 'Vamos Conversar',
  email: 'contato@asaph.dev.br',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/asaphcomph',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/asaph_96/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/asaphsd/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/asaph96',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'contato@asaph.dev.br',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
