import './style.css'
import BlurText from "./BlurText.js";


export const Banner = ({handleAnimationComplete}) =>{
  return(
    <div className='banner'>
      <div className='banner-txt'>
        <BlurText
        text="Listter"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl mb-8"
        
/>
        <BlurText
        text="Seu facilitador de tarefas diárias"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
/>
       
      </div>
      <div className='banner-img'>
        <img src="/imagens/banner-img.svg"></img>
      </div>
    </div>
  )
}