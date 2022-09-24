import './Header.scss'
import logo from '../../assets/LogoMain.webp'
import restart from '../../assets/restart.svg'
import question from '../../assets/question.png'
import mail from '../../assets/mail.png'
import brain from '../../assets/brain.png'



export default function Header() {

    function refreshPage() {
        window.location.reload(false);
      }
 
  return (
    <div className="Header">
        <a className='logoMain' href="https://martza-tech.com/"><img src={logo}/></a>
        <div className='header_main'>
            <h1>Website Design Calculator</h1>
            <div className='header_main_content'>
                    <a><img src={question}/>6 Questions</a>
                    <a><img src={mail}/>No E-mail Required</a>
                    <a><img src={brain}/>Instant Quote</a>
            </div>
        </div>
      
      <img className='restart' src={restart} onClick={refreshPage}/>
    </div>
  );
}