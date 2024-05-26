import '../rodape/rodape.css'
import insta from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'


function rodape() {
    return (
        <>
        <footer>
            <div className='contato'><img src={insta} alt="" />gabrieldiniz.dev</div>
            <div className='contato'><img src={linkedin} alt="" />gabrieldinizcarreiro</div>
        </footer>
        
        </>
    )
}

export default rodape