import featuresDatas from '../../datas/features.json';
import Feature from '../Feature';

const Datas = featuresDatas; 

const Features = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {(Datas).map(Data => Feature(Data))}
        </section>
    )
}

export default Features;