import './App.css'
import LandingImage from './assets/image-omelette.jpeg'
import Header from './Header/Header.jsx'
import FirstList from './utils/FirstList/FirstList.jsx'
import SecondList from './utils/SecondList/SecondList.jsx'
import ThirdList from './utils/ThirdList/ThirdList.jsx'
import FourthList from './utils/FourthList/FourthList.jsx'

function App() {
    return (
        <div className="wrapper">
            <img className="Landing-picture" src={LandingImage} alt="" />
            <div className="wrapper-mini">

                <Header />
                <FirstList />
                <SecondList />
                <SecondList />
                <SecondList />
                <SecondList />
                <SecondList />
                <div className="line-frame1"></div>
                <ThirdList />
                <div className="line-frame1"></div>
                <FourthList />
                <div className="list4-items">
                    <div className="list4-items__info">
                        <h3 className="list4-items__title">Calories</h3>
                        <h3 className="list4-items__number not-transform">277kcal</h3>
                    </div>
                    <div className="line-frame2"></div>
                    <div className="list4-items__info">
                        <h3 className="list4-items__title">Carbs</h3>
                        <h3 className="list4-items__number" >0g</h3>
                    </div>
                    <div className="line-frame2"></div>
                    <div className="list4-items__info">
                        <h3 className="list4-items__title">Protein</h3>
                        <h3 className="list4-items__number">20g</h3>
                    </div>
                    <div className="line-frame2"></div>
                    <div className="list4-items__info">
                        <h3 className="list4-items__title">Fat</h3>
                        <h3 className="list4-items__number">22g</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
