import React, { useState } from 'react';
import { Image, Segment, Header } from 'semantic-ui-react';
import gold from './../ranked-emblems/Emblem_Gold.png';

function PlayerCard(props) {
  return (
    <div class="player-card">
      <Image src={props.user.backdrop}></Image>
      <Segment raised>
        <Header inverted>{props.user.username}</Header>
        <Image circular src={props.user.avatar}></Image>
        <Image circular src={gold}></Image>
        <Header inverted>{props.user.rank} {props.user.lp} LP</Header>
      </Segment>

    </div>
  );
}

export default PlayerCard;
