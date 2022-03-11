import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Profil_component from './Profile/Profil_component';
import {HandleClick} from './Profile/HandleClick';
import Counter from './Profile/Counter'

function App() {
  return (
    <div className="App">
      <Profil_component
        Nom="N'Gatia"
        Prenom="Yao Eric Constant"
        Profession="Etudiant"
        Bio="On reste des êtres humians malgré tous! Personne n'a la droit de nous juger avant la fin parce que l'homme est capable du pire comme du meilleur jusqu'au bont.
              Au fond ce n'est qu'au moment de disparaitre que se rend compte de qui on a ete, la fin donne un sens à tous ce qui a prédcédé"
      />

      <HandleClick/>
      <Counter/>
    </div>
  );
}

export default App;
