import '../css/about.css';
import PageHeader from './page-header';
import bronzehardypatches from '../img/bronzehardypatches.jpeg';

function About() {
  return(
    <>
      <PageHeader title={"About"} />
      <div className="about">
        <img className="aboutImage" src={bronzehardypatches} alt="Hardy and Patches"/>
        <p className="text">The modern American West is a place of vibrance and color and doom-proof landscapes. My unique mountings and radically colored patinas not only evoke the West of today but awaken that mad, half-sleeping, ancient self in all of us. My work does not hearken. To the past nor to the future. Barbed wire stretched across my vista does not diminish the sunsets. My sculptures are poems, writ in bronze, iron, and bone. Poems that indict. Poems that celebrate. The denizens of my West populate these works. The line I follow can be traced through the one object where we are all tabernacled, that mad capsule, the skull.</p>
        <p className="text">The lost wax investment casting system is dangerous, labor intensive, and requires manifold skills, both arcane and modern. People have practiced this art, commingled with alchemy, for more than 4,000 years. It remains the only method of casting bronze that allows the artisan to express with real intimacy the detail of the original. Chemical patinas, hot and cold, are the palette of the sculptor working with bronze. Colors and methods long forgotten come to life in my shop. At every step in the process, my blood is infused into the work.</p>
        <p className="text">I have at various times made my living as a cabinet maker, welder, orchard worker, ranch hand, log home builder, bartender, iron hanger, dishwasher, race motor builder, jug stomper, blaster, ditch digger, foundry worker, crane operator, carpenter, sous chef, miner, logger, window builder, concrete worker, mechanic, drywaller, lift operator, and sculptor.</p>
      </div>
    </>
  )
}

export default About;
