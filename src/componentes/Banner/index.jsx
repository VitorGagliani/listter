import './style.css'

export const Banner = () =>{
  return(
    <div className='banner'>
      <div className='banner-txt'>
        <h1>Listter</h1>
        <p>Seu facilitador de tarefas diárias</p>
      </div>
      <div className='banner-img'>
        <img src="/imagens/banner-img.svg"></img>
      </div>
    </div>
  )
}