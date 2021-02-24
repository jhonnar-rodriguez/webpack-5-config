import '../styles/index.scss';
import Recipes from './Recipes';
import payments from '../images/payments.png';
import logoFooter from '../../public/assets/images/logo-footer.jpeg';
import blueCake from '../../public/assets/images/blue-cake.svg';

const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <h1>Hi From App Updated!</h1>
        </section>
      </main>

      <img src={payments} alt='Payment Image' />
      <img src={logoFooter} alt='Logo Footer' />
      <img src={blueCake} alt='Blue Cake' width='50px'/>

      <Recipes />
    </>
  );
};

export default App;
