import './App.scss';

import Header from '../../components/header';
import Footer from '../../components/footer'

export default function App() {
  return (
    <div className="inu">
      <Header/>

      <h2>Página</h2>
      <h3>Seja bem vindo ao meu primeiro programa de React 😁</h3>
      <img id='inu' src="/assets/images/inuyasha.gif" alt="" />

      <Footer/>
    </div>
  );
}

