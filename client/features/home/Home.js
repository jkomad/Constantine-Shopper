import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div className="containMe">
      <h3> Oh Aiiit, {username} have you heard of much Irish folklore? When you were
      wee lad growing up in Ireland, and you looked out and saw the green grass and
      blue sky; did they ever teach you any old songs from the old days? Well I am
      going to teach you one anyway. It's called <i>the Death of Dorae</i>, Here it goes:</h3>
      <p>I told you once, I told you twice</p>
      <p>The candyman he don't play nice.</p>
      <p>Men from Ireland we don't back down</p>
      <p>We'll turn your smile into a frown.</p>
      <p>Jump for joy and come my friends</p>
      <p>to pot of gold at rainbow's end.</p>
      <p>True Irish, remember the tale...</p>
      <p>of William Wallace the first alpha male.</p>
      <p>His ghost of the isle fights by my side</p>
      <p>it is to him to whom I confide</p>
      <p>Tee hee hee! the candyman sees</p>
      <p>all possible futures that now could be...</p>
      <p>Sugary biscuits dollop the eyes</p>
      <p>candyman speaketh with buttered up pride</p>
      <p>caramel gloves cut through skin of lies,</p>
      <p>When candyman sweeten the death of Dorae</p>
    <h3>Well lad when you were growing up in the Ireland, and you 
    looked out and you saw the sweet maidens in their dresses
    dancing their irish dances, did you ever hear perhaps of the
    <i>The Candyman's Song</i>? Well it goes like this:</h3>
      <p>Sweet sugary adversaries are perfect for the munching</p>
      <p>With a hankering for confectionaries my fists are hungry for punching</p>
      <p>I weave my cotton candy web and you fall into my trap</p>
      <p>Procure my bib and dessert fork so that I may begin to snack</p>
      <p>Should I crunch 'em now?! or should I savor every lick?!</p>
      <p>I can punish 'em slowly or dip and sprinke him quick</p>
      <p>First I'll gingerly ginger snap his candy coated pretzel arms in half!</p>
      <p>Then I'll buttery pop gumdrop smack him to the chocolatey canvas with a slap!</p>
      <p>In the marshmallow ring the ropes look like twizzlers,</p>
      <p>Body shots at my jelly belly merely give me a snicker!</p>
      <p>Crooked cubes of candy cane! Sugar plums galore!</p>
      <p>The candyman will sourpatch you fist to knock clean to the floor...</p>
      <p>I'll pumpkin crumb cream crunch punch his powedered doughnut head</p>
      <p>until the juniper jelly belly jam comes tumble bumble squeezing out of his neck</p>
    </div>
  );
};

export default Home;
