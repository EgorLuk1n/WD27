import '../../styles/Loader.css';
import LOADER from '../../image/loader.gif'

const Loader = () => {
    return <div className="bouncing-dot-loader">
        <img src={LOADER} alt="" className="a"/>
    </div>
};

export default Loader;