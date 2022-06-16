import './HomePage.css'
import metal from '../images/metal.jpeg'
import pop from '../images/pop.jpeg'
import musician from '../images/musician.jpeg'


//Function to show content during page load and no search
const HomePage = () => {
    return (
        <div>
            <h3>Choose Your Genre</h3>
            <div className="row">
                <div className=" offset-s1 col s4 m3">
                <div className="card">
                    <div className="card-image">
                    <img src={metal} alt=""/>
                    <div className="card-title">Metal</div>
                    </div>
                </div>
                </div>
                <div className="offset-m1 col s4 m3">
                <div className="card">
                    <div className="card-image">
                    <img src={musician} alt=""/>
                        <div className="card-title">Country</div>
                    </div>
                    
                    
                </div>
                </div>
                <div className="offset-m1 col s4 m3">
                <div className="card">
                    <div className="card-image">
                    <img src={pop} alt=""/>
                        <div className="card-title">Pop</div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default HomePage;