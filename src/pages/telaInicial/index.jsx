import './style.css';


function Telainicial() {

    return (
        <div>
            <div className='topo'>
                <img className='logo' src='../src/imagens/logo.png' />
                <input className='buscar' type='text' label='Buscar' />
                <h1 className='user'>Usuario aqui!</h1>
            </div>

            <div className='links'>
                <nav className='links-nav'> 
                    <a href="#">Tenis</a>
                    <a href="#">Moletons</a>
                    <a href="#">Chinelos</a>
                    <a href="#">Panelas</a>       
                </nav>
            </div>

            <div className='prod'>
                <img className='prods' src='../src/imagens/img1.jpg'/>
                <img className='prods' src='../src/imagens/img4.jpg'/>
                <img className='prods' src='../src/imagens/img3.jpg'/>
            </div>
        </div>

    )
};

export default Telainicial;

