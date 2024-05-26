import '../conteudo/conteudo.css'
import pc from '../../assets/pcImg.png'
import git from '../../assets/github.png'

function corpo() {
    return (
        <>
            <main>
                <div className='container'>
                    <div className='text'>
                        <div className='title'>PÁGINA WEB A PARTIR DE <span>COMPONENTES</span></div>
                        <div className='containerGit'>
                            <div>
                                GIT HUB
                                <img src={git} alt="" />
                            </div>
                        </div>
                    </div>
                    <div><img src={pc} alt="" /></div>
                </div>
            </main>
        </>
    )
}

export default corpo