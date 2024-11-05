
import Footer from './assets/Components/Footer.tsx';
import CardGrid from './assets/Components/Cards.tsx';
import Categories from './assets/Components/Categories.tsx';
import HeroSection from './assets/Components/Herosection.tsx';
import FrequentlyAskedQues from './assets/Components/FAQ.tsx';


const App = () => {
  return (
    <div>
      <HeroSection/>  
          <CardGrid/>
          <Categories/>
          <FrequentlyAskedQues/>
      <Footer/>
    </div>
  );
}

export default App;
