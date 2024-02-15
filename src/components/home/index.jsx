import Header from "../header"
import { toast } from 'react-toastify';

import './home.css'


export default function Home() {
  const handleClickYes = () => 
    toast.success('😍️ Status atualizado com sucesso!!! 😘️', {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  
  const handleClickNo = () => 
    toast.error('🤨️ Erro ao processar a resposta. Tente novamente! 😝️', {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const queryParameters = new URLSearchParams(window.location.search)
  const name = queryParameters.get("name")

  return (
    <diV>
      {!name ? null : <Header text={name}/>}
      <Header text="Namora comigo?"/>
      <div className="divButtons">
        <button className="buttonStyle" onClick={handleClickYes}>
          <i class="fa fa-heart" style={{fontSize: '48px', color: 'red'}}></i>
          Sim
        </button>
        <button className="buttonStyle" onClick={handleClickNo}>
        <i class="fa fa-ban" aria-hidden="true" style={{fontSize: '48px', color: 'red'}}></i>
          não</button>
      </div>
    </diV>
  )
}