import Header from "../header"
import { toast } from 'react-toastify';
import kissCat from '../../assets/kiss-cat.gif'

import './home.css'
import { useState } from "react";


export default function Home() {
  const [showImage, setShowImage] = useState(false)
  const handleClickYes = () => {
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
    setShowImage(true)
  }
  
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

  const name = 'Uda,'

  return (
    <diV>
      <Header text={name}/>
      <Header text={showImage ? "agora é real e oficial!" : "namora comigo?"}/>
      {
        showImage ? 
        <div>
          <img src={kissCat} alt="gif de coracao" width="320" />
        </div> :
      <div className="divButtons">
        <button className="buttonStyle" onClick={handleClickYes}>
          <i class="fa fa-heart" style={{fontSize: '48px', color: '#A60303'}}></i>
          Sim
        </button>
        <button className="buttonStyle" onClick={handleClickNo}>
        <i class="fa fa-ban" aria-hidden="true" style={{fontSize: '48px', color: '#A60303'}}></i>
          não</button>
      </div>
      }
    </diV>
  )
}