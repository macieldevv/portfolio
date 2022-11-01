import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.jpg';

import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return(
    <aside id="sidebar">
      <img src={Avatar} alt="Maciel Monteiro" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className="btn">
        Download Curriculo
      </a>
  </aside>
  )
    
 
}

export default Sidebar