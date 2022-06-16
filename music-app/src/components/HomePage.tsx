import './HomePage.css'
import metal from '../images/metal.jpeg'
import pop from '../images/pop.jpeg'
import musician from '../images/musician.jpeg'

const HomePage = () => {
    return (
        <div>
            <div className="row">
                <div className=" offset-s1 col s4 m3">
                <div className="card">
                    <div className="card-image">
                    <img src={metal}/>
                    
                    </div>
                    
                    <div className="card-action">
                    <span>Metal</span>
                    </div>
                </div>
                </div>
                <div className="offset-m1 col s4 m3">
                <div className="card">
                    <div className="card-image">
                    <img src={musician}/>
                    
                    </div>
                    
                    <div className="card-action">
                    <span>Country</span>
                    </div>
                </div>
                </div>
                <div className="offset-m1 col s4 m3">
                <div className="card">
                    <div className="card-image">
                    <img src={pop}/>
                    
                    </div>
                    
                    <div className="card-action">
                    <span>Pop</span>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default HomePage;