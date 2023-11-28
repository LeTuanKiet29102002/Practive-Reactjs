import logo from '../../assets/img/kimoon.gif'

const Home = () => {
    return (
        <div className="home-container text-center mt-5">
            <div>Hello Home page</div>
            <div>
                <img alt="anh" src={logo} style={{ height: '300px', width: '300px', borderRadius: '6px', margin: '20px' }} />
            </div>
        </div>
    )
}

export default Home;