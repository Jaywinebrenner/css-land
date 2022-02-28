
import React, {useState} from 'react';
import Modal from './components/modal'

export default function Home() {

  
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  

console.log("modal", modal); 
  return (
    <div className="home">

      <div className='home__top'>
        <div onClick={() => Toggle()} className='home__top-left'>
          <h3>LEFT</h3>
        </div>
        <div onClick={() => Toggle()} className='home__top-middle'>
          <h3>MIDDLE</h3>
        </div>
        <div onClick={() => Toggle()} className='home__top-right'>
          <h3>RIGHT</h3>
        </div>
      </div>

      <div className="home__hero">
        <div className="home__hero-left">
          <div className="home__hero-left-top">
              <h1>BOLDFACETYPE</h1>
          </div>
          <div className="home__hero-left-bottom">
            <h3>THIS IS WHERE TEXT WILL GO</h3>
            <h3>LOREM IPSOM IG NAS TOFURM</h3>
          </div>

        </div>
        <div className="home__hero-right">
            <h3>LOREM IPSOM IG NAS TOFURM</h3>
        </div>
      </div>

      <div className="home__main">
        <div className="home__main-left">
            <h4>Odio dignissimos</h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
        <div className="home__main-right">
            <h4>Dolores et quas molestias</h4>
            <p>Oorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <h4>Uas molestias</h4>
            <p>Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

        </div>

      </div>

      <Modal show={modal} title="My Modal" close={Toggle}></Modal>

    </div>
  )
}
