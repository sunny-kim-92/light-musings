import React from 'react';
import ReactDOM from 'react-dom';
import { AnimateGroup, Animate } from 'react-animate-mount';
import {
  Wrapper,
  Item,
  RadioButton,
  RadioButtonLabel,
  Container,
  Question
} from './VaultComp.css.js';
import { parseThree, parseFour, finalVault } from './helper.js';

import './styles.css';

class VaultComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextItem: {},
      items: [
        {
          q: 'What direction will you face jumping off the springboard?',
          names: ['Forward', 'Backward'],
          values: ['f', 'b'],
        },
      ],
      dir: 'f',
      fTurn: 'z',
      salto: 'z',
      sTurn: 'z',
      bp: 's',
      backFlag: false,
      complete: 'f',
      activePage: 1,
      switch: false,
      finished: false,
      changing: false,
      reset: false,
      finalV: [],
      final: [],
      backQ: [],
    };
    this._next = this._next.bind(this);
    this._back = this._back.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleDir = this.handleDir.bind(this);
    this.handleFTurn = this.handleFTurn.bind(this);
    this.handleSalto = this.handleSalto.bind(this);
    this.handleBP = this.handleBP.bind(this);
    this.handleSTurn = this.handleSTurn.bind(this);
    this.handleReset = this.handleReset.bind(this);

    // this.parseThree = this.parseThree.bind(this);
    // this.parseFour = this.parseFour.bind(this);
    // this.finalVault = this.finalVault.bind(this);
  }

  // parseThree = combo => {
  //   if (combo === 'fzz') {
  //     return {
  //       names: ['Straight', 'Piked'],
  //       values: ['s', 'p'],
  //     };
  //   }
  //   if (combo === 'foz') {
  //     return 's';
  //   }
  //   if (combo === 'ftz') {
  //     return 's';
  //   }
  //   if (combo === 'bzz') {
  //     return 'finished';
  //   }
  //   if (combo === 'boz') {
  //     return 's';
  //   }
  //   if (combo === 'btz') {
  //     return 's';
  //   }
  //   if (combo === 'fzo') {
  //     return {
  //       names: ['Straight', 'Tucked', 'Piked'],
  //       values: ['s', 't', 'p'],
  //     };
  //   }
  //   if (combo === 'fto') {
  //     return {
  //       names: ['Tucked', 'Piked'],
  //       values: ['t', 'p'],
  //     };
  //   }
  //   if (combo === 'fzt') {
  //     return 'finished';
  //   }
  //   if (combo === 'foo') {
  //     return {
  //       names: ['Straight', 'Tucked', 'Piked'],
  //       values: ['s', 't', 'p'],
  //     };
  //   }
  //   if (combo === 'bzo') {
  //     return {
  //       names: ['Straight', 'Tucked', 'Piked'],
  //       values: ['s', 't', 'p'],
  //     };
  //   }
  //   if (combo === 'bto') {
  //     return {
  //       names: ['Straight', 'Tucked', 'Piked'],
  //       values: ['s', 't', 'p'],
  //     };
  //   }
  //   if (combo === 'boo') {
  //     return {
  //       names: ['Straight', 'Tucked', 'Piked'],
  //       values: ['s', 't', 'p'],
  //     };
  //   }
  // };

  // parseFour = combo => {
  //   let tri = combo.slice(0, 3);
  //   let quad = combo;
  //   if (quad === 'fzzs') {
  //     return {
  //       names: [
  //         '0',
  //         '1/2 (180°)',
  //         '1/1 (360°)',
  //         '3/2 (540°)',
  //         '2/1 (720°)',
  //         '5/2 (900°)',
  //       ],
  //       values: ['zero', 'one', 'two', 'three', 'four', 'five'],
  //     };
  //   }
  //   if (quad === 'foop') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)'],
  //       values: ['zero', 'one', 'two'],
  //     };
  //   }
  //   if (tri === 'foz') {
  //     return {
  //       names: ['0', '1/1 (360°)'],
  //       values: ['zero', 'two'],
  //     };
  //   }
  //   if (tri === 'ftz') {
  //     return {
  //       names: ['0', '1/1 (360°)'],
  //       values: ['zero', 'two'],
  //     };
  //   }
  //   if (tri === 'bzz') {
  //     return 'finished';
  //   }
  //   if (tri === 'boz') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
  //       values: ['zero', 'one', 'two', 'three'],
  //     };
  //   }
  //   if (tri === 'btz') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)'],
  //       values: ['zero', 'one', 'two'],
  //     };
  //   }
  //   if (quad === 'fzot') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
  //       values: ['zero', 'one', 'two', 'three'],
  //     };
  //   }
  //   if (quad === 'fzop') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)'],
  //       values: ['zero', 'one', 'two'],
  //     };
  //   }
  //   if (quad === 'fzos') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
  //       values: ['zero', 'one', 'two', 'three'],
  //     };
  //   }
  //   if (quad === 'ftot') {
  //     return 'finished';
  //   }
  //   if (quad === 'ftop') {
  //     return 'finished';
  //   }
  //   if (tri === 'fzt') {
  //     return 'finished';
  //   }
  //   if (quad === 'foot') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)', '2/1 (720°)'],
  //       values: ['zero', 'one', 'two', 'three', 'four'],
  //     };
  //   }
  //   if (quad === 'foop') {
  //     return 'finished';
  //   }
  //   if (quad === 'foos') {
  //     return {
  //       names: [
  //         '0',
  //         '1/2 (180°)',
  //         '1/1 (360°)',
  //         '3/2 (540°)',
  //         '2/1 (720°)',
  //         '5/2 (900°)',
  //       ],
  //       values: ['zero', 'one', 'two', 'three', 'four', 'five'],
  //     };
  //   }
  //   if (quad === 'bzot') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)', '2/1 (720°)'],
  //       values: ['zero', 'one', 'two', 'three', 'four'],
  //     };
  //   }
  //   if (quad === 'foop') {
  //     return 'finished';
  //   }
  //   if (quad === 'foot') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)', '2/1 (720°)'],
  //       values: ['zero', 'one', 'two', 'three', 'four'],
  //     };
  //   }
  //   if (quad === 'bzop') {
  //     return 'finished';
  //   }
  //   if (quad === 'bzos') {
  //     return {
  //       names: [
  //         '0',
  //         '1/2 (180°)',
  //         '1/1 (360°)',
  //         '3/2 (540°)',
  //         '2/1 (720°)',
  //         '5/2 (900°)',
  //       ],
  //       values: ['zero', 'one', 'two', 'three', 'four', 'five'],
  //     };
  //   }
  //   if (quad === 'btot') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)'],
  //       values: ['zero', 'one', 'two'],
  //     };
  //   }
  //   if (quad === 'bzop') {
  //     return 'finished';
  //   }
  //   if (quad === 'ftos') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)'],
  //       values: ['zero', 'one', 'two'],
  //     };
  //   }

  //   if (quad === 'boot') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
  //       values: ['zero', 'one', 'two', 'three'],
  //     };
  //   }
  //   if (quad === 'boop') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)'],
  //       values: ['zero', 'one', 'two'],
  //     };
  //   }
  //   if (quad === 'boos') {
  //     return {
  //       names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
  //       values: ['zero', 'one', 'two', 'three'],
  //     };
  //   }
  // };

  // finalVault = str => {
  //   if (str === 'fzzszero') {
  //     return ['Handspring forward', 1.0, 2.0];
  //   }
  //   if (str === 'fzzsone') {
  //     return ['Handspring fwd on – 1⁄2 turn (180°) off', 1.01, 2.4];
  //   }
  //   if (str === 'fzzstwo') {
  //     return ['Handspring fwd on – 1/1 turn (360°) off', 1.02, 3.0];
  //   }
  //   if (str === 'fzzsthree') {
  //     return ['Handspring fwd on – 1 1⁄2 turn (540°) off', 1.03, 3.6];
  //   }
  //   if (str === 'fzzsfour') {
  //     return ['Handspring fwd on – 2/1 turn (720°) off', 1.04, 4.0];
  //   }
  //   if (str === 'fzzsfive') {
  //     return ['Handspring fwd on – 2 1⁄2 turn (900°) off', 1.05, 4.4];
  //   }
  //   if (str === 'fzzpzero') {
  //     return ['Yamashita', 1.1, 2.4];
  //   }
  //   if (str === 'fzzpone') {
  //     return ['Yamashita with 1⁄2 turn (180°) off', 1.11, 2.8];
  //   }
  //   if (str === 'fzzptwo') {
  //     return ['Yamashita with 1⁄2 turn (180°) off', 1.12, 3.2];
  //   }
  //   if (str === 'fozszero') {
  //     return [
  //       'Handspring fwd with 1⁄2 turn (180°) on – repulsion off',
  //       1.2,
  //       2.0,
  //     ];
  //   }
  //   if (str === 'fozsone') {
  //     return [
  //       'Handspring fwd with 1⁄2 turn (180°) on – 1⁄2 turn (180°) off (in either direction)',
  //       1.21,
  //       2.8,
  //     ];
  //   }
  //   if (str === 'fozstwo') {
  //     return [
  //       'Handspring fwd with 1⁄2 turn (180°) on – 1/1 turn (360°) off',
  //       1.22,
  //       3.0,
  //     ];
  //   }
  //   if (str === 'fozsthree') {
  //     return [
  //       'Handspring fwd with 1⁄2 turn (180°) on – 1 1/2 turn (540°) off',
  //       1.23,
  //       3.6,
  //     ];
  //   }
  //   if (str === 'fozsfour') {
  //     return [
  //       'Handspring fwd with 1⁄2 turn (180°) on – 2/1 turn (720°) off',
  //       1.24,
  //       4.0,
  //     ];
  //   }
  //   if (str === 'ftzszero') {
  //     return [
  //       'Handspring fwd with 1/1 turn (360°) on – Handspring fwd off',
  //       1.3,
  //       3.6,
  //     ];
  //   }
  //   if (str === 'ftzstwo') {
  //     return [
  //       'Handspring fwd with 1/1 turn (360°) on – 1/1 turn (360°) off',
  //       1.31,
  //       4.0,
  //     ];
  //   }
  //   if (str.slice(0, 3) === 'bzz') {
  //     return ['Round-off, flic-flac on – repulsion off', 1.4, 2.0];
  //   }
  //   if (str === 'bozszero') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – Handspring fwd off',
  //       1.5,
  //       2.6,
  //     ];
  //   }
  //   if (str === 'bozsone') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on –1⁄2 turn (180°) off',
  //       1.51,
  //       3.0,
  //     ];
  //   }
  //   if (str === 'bozstwo') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – 1/1 turn (360°) off',
  //       1.52,
  //       3.4,
  //     ];
  //   }
  //   if (str === 'bozsthree') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – 1 1⁄2 turn (540°) off',
  //       1.53,
  //       3.8,
  //     ];
  //   }
  //   if (str === 'btzszero') {
  //     return [
  //       'Round-off, flic-flac with 1/1 turn (360°) on – Repulsion off',
  //       1.6,
  //       2.8,
  //     ];
  //   }
  //   if (str === 'btzsone') {
  //     return [
  //       'Round-off, flic-flac with 1/1 turn (360°) on – 1/2 turn (180°) off',
  //       1.61,
  //       3.2,
  //     ];
  //   }
  //   if (str === 'btzstwo') {
  //     return [
  //       'Round-off, flic-flac with 1/1 turn (360°) on – 1/1 turn (360°) off',
  //       1.62,
  //       3.8,
  //     ];
  //   }
  //   if (str === 'fzotzero') {
  //     return ['Handspring fwd on – 1⁄2 turn (180°) off', 2.1, 4.0];
  //   }
  //   if (str === 'fzotone') {
  //     return [
  //       'Handspring fwd on – tucked salto fwd with 1⁄2 turn (180°) off, also – 1⁄2 turn (180°) and tucked salto bwd off',
  //       2.11,
  //       4.4,
  //     ];
  //   }
  //   if (str === 'fzottwo') {
  //     return [
  //       'Handspring fwd on – tucked salto fwd with 1/1 turn (360°) off',
  //       2.12,
  //       4.8,
  //     ];
  //   }
  //   if (str === 'fzotthree') {
  //     return [
  //       'Handspring fwd on – tucked salto fwd with 11⁄2 turn (540°) off',
  //       2.13,
  //       5.2,
  //     ];
  //   }
  //   if (str === 'fzopzero') {
  //     return ['Handspring fwd on – piked salto fwd off', 2.2, 4.2];
  //   }
  //   if (str === 'fzopone') {
  //     return [
  //       'Handspring fwd on – piked salto fwd with 1⁄2 turn (180°) off, also – 1⁄2 turn (180°) and piked salto bwd off',
  //       2.21,
  //       4.6,
  //     ];
  //   }
  //   if (str === 'fzoptwo') {
  //     return [
  //       'Handspring fwd on – piked salto fwd with 1/1 turn (360°) off',
  //       2.22,
  //       5.0,
  //     ];
  //   }
  //   if (str === 'fzoszero') {
  //     return ['Handspring fwd on – stretched salto fwd off', 2.3, 4.6];
  //   }
  //   if (str === 'fzosone') {
  //     return [
  //       'Handspring fwd on – stretched salto fwd with 1⁄2 turn (180°) off',
  //       2.31,
  //       5.0,
  //     ];
  //   }
  //   if (str === 'fzostwo') {
  //     return [
  //       'Handspring fwd on – stretched salto fwd with 1/1 turn (360°) off',
  //       2.32,
  //       5.4,
  //     ];
  //   }
  //   if (str === 'fzosthree') {
  //     return [
  //       'Handspring fwd on – stretched salto fwd with 1 1/2 turn (540°) off',
  //       2.33,
  //       5.8,
  //     ];
  //   }
  //   if (str === 'ftotzero') {
  //     return [
  //       'Handspring fwd with 1/1 turn (360°) on - tucked salto fwd off',
  //       2.4,
  //       5.2,
  //     ];
  //   }
  //   if (str === 'ftopzero') {
  //     return [
  //       'Handspring fwd with 1/1 turn (360°) on - piked salto fwd off',
  //       2.41,
  //       5.6,
  //     ];
  //   }
  //   if (str.slice(0, 3) === 'fzt') {
  //     return ['Handspring fwd on – tucked double salto fwd off', 2.5, 6.4];
  //   }
  //   if (str === 'footzero') {
  //     return ['Tsukahara tucked', 3.1, 3.5];
  //   }
  //   if (str === 'footone') {
  //     return ['Tsukahara tucked with 1/2 turn (180°) off', 3.11, 3.8];
  //   }
  //   if (str === 'foottwo') {
  //     return ['Tsukahara tucked with 1/1 turn (360°) off', 3.12, 4.1];
  //   }
  //   if (str === 'footthree') {
  //     return ['Tsukahara tucked with 1 1⁄2 turn (540°) off', 3.13, 4.4];
  //   }
  //   if (str === 'footfour') {
  //     return ['Tsukahara tucked with 2/1 turn (720°) off', 3.14, 4.9];
  //   }
  //   if (str.slice(0, 4) === 'foop') {
  //     return ['Tsukahara piked', 3.2, 3.7];
  //   }
  //   if (str === 'fooszero') {
  //     return ['Tsukahara stretched', 3.3, 4.2];
  //   }
  //   if (str === 'foosone') {
  //     return ['Tsukahara stretched with 1⁄2 turn (180°) off', 3.31, 4.4];
  //   }
  //   if (str === 'foostwo') {
  //     return ['Tsukahara stretched with 1⁄1 turn (360°) off', 3.32, 4.8];
  //   }
  //   if (str === 'foosthree') {
  //     return ['Tsukahara stretched with 1 1⁄2 turn (540°) off', 3.33, 5.2];
  //   }
  //   if (str === 'foosfour') {
  //     return ['Tsukahara stretched with 2/1 turn (720°) off', 3.34, 5.6];
  //   }
  //   if (str === 'foosfive') {
  //     return ['Tsukahara stretched with 2 1/2 turn (900°) off', 3.35, 6.0];
  //   }
  //   if (str === 'bzotzero') {
  //     return ['Round-off, flic-flac on – tucked salto bwd off', 4.1, 3.3];
  //   }
  //   if (str === 'bzotone') {
  //     return [
  //       'Round-off, flic-flac on – tucked salto bwd with 1⁄2 turn (180°) off',
  //       4.11,
  //       3.6,
  //     ];
  //   }
  //   if (str === 'bzottwo') {
  //     return [
  //       'Round-off, flic-flac on - tucked salto bwd with 1/1 turn (360°) off',
  //       4.12,
  //       3.9,
  //     ];
  //   }
  //   if (str === 'bzotthree') {
  //     return [
  //       'Round-off, flic-flac on - tucked salto bwd with 1 1/2 turn (540°) off',
  //       4.13,
  //       4.2,
  //     ];
  //   }
  //   if (str === 'bzotfour') {
  //     return [
  //       'Round-off, flic-flac on - tucked salto bwd with 2/1 turn (720°) off',
  //       4.14,
  //       4.7,
  //     ];
  //   }
  //   if (str.slice(0, 4) === 'bzop') {
  //     return ['Round-off, flic-flac on – piked salto bwd off', 4.2, 3.5];
  //   }
  //   if (str === 'bzoszero') {
  //     return ['Round-off, flic-flac on – stretched salto bwd off', 4.3, 4.0];
  //   }
  //   if (str === 'bzosone') {
  //     return [
  //       'Round-off, flic-flac on – stretched salto bwd with 1⁄2 turn (180°) off',
  //       4.31,
  //       4.2,
  //     ];
  //   }
  //   if (str === 'bzostwo') {
  //     return [
  //       'Round-off, flic-flac on – stretched salto bwd with 1/1 turn (360°) off',
  //       4.32,
  //       4.6,
  //     ];
  //   }
  //   if (str === 'bzosthree') {
  //     return [
  //       'Round-off, flic-flac on – stretched salto bwd with 11⁄2 turn (540°) off',
  //       4.33,
  //       5.0,
  //     ];
  //   }
  //   if (str === 'bzosfour') {
  //     return [
  //       'Round-off, flic-flac on – stretched salto bwd with 2/1 turn (720°) off',
  //       4.34,
  //       5.4,
  //     ];
  //   }
  //   if (str === 'bzosfive') {
  //     return [
  //       'Round-off, flic-flac on –stretched salto bwd with 21⁄2 turn (900°) off',
  //       4.35,
  //       5.8,
  //     ];
  //   }
  //   if (str === 'btotzero') {
  //     return [
  //       'Round-off, flic-flac with 1/1 turn (360°) on – tucked salto bwd off',
  //       4.4,
  //       4.0,
  //     ];
  //   }
  //   if (str === 'btotone') {
  //     return [
  //       'Round-off, flic-flac with 1/1 turn (360°) on – tucked salto bwd with 1⁄2 turn (180°) off',
  //       4.41,
  //       4.4,
  //     ];
  //   }
  //   if (str === 'btottwo') {
  //     return [
  //       'Round-off, flic-flac with 1/1 turn (360°) on – tucked salto bwd with 1⁄1 turn (360°) off',
  //       4.42,
  //       4.8,
  //     ];
  //   }
  //   if (str === 'btopzero') {
  //     return [
  //       'Round-off, flic-flac 1/1 turn (360°) on – piked salto bwd off',
  //       4.5,
  //       4.2,
  //     ];
  //   }
  //   if (str === 'btoszero') {
  //     return [
  //       'Round-off, flic-flac 1/1 turn (360°) on – stretched salto bwd off',
  //       4.51,
  //       4.6,
  //     ];
  //   }
  //   if (str === 'btosone') {
  //     return [
  //       'Round-off, flic-flac 1/1 turn (360°) on – stretched salto bwd with 1⁄2 turn (180°) off',
  //       4.52,
  //       5.0,
  //     ];
  //   }
  //   if (str === 'btostwo') {
  //     return [
  //       'Round-off, flic-flac 1/1 turn (360°) on – stretched salto bwd with 1⁄1 turn (360°) off',
  //       4.53,
  //       5.4,
  //     ];
  //   }
  //   if (str === 'bootzero') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – tucked salto fwd off',
  //       5.1,
  //       4.2,
  //     ];
  //   }
  //   if (str === 'bootone') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – tucked salto fwd with 1⁄2 turn (180°) off, also – 1⁄2 turn (180°) and tucked salto bwd off',
  //       5.11,
  //       4.6,
  //     ];
  //   }
  //   if (str === 'boottwo') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – tucked salto fwd with 1⁄1 turn (360°) off',
  //       5.12,
  //       5.0,
  //     ];
  //   }
  //   if (str === 'bootthree') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – tucked salto fwd with 1 1/2 turn (540°) off',
  //       5.13,
  //       5.4,
  //     ];
  //   }
  //   if (str === 'boopzero') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – piked salto fwd off',
  //       5.2,
  //       4.4,
  //     ];
  //   }
  //   if (str === 'boopone') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – piked salto fwd with 1⁄2 turn (180°) off, also – 1⁄2 turn (180°) and piked salto bwd off',
  //       5.21,
  //       4.8,
  //     ];
  //   }
  //   if (str === 'booptwo') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – piked salto fwd with 1/1 turn (360°) off',
  //       5.22,
  //       5.2,
  //     ];
  //   }
  //   if (str === 'booszero') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – stretched salto fwd off',
  //       5.3,
  //       4.8,
  //     ];
  //   }
  //   if (str === 'boosone') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – salto fwd stretched with 1⁄2 turn (180°) off',
  //       5.31,
  //       5.2,
  //     ];
  //   }
  //   if (str === 'boostwo') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – salto fwd stretched with 1⁄1 turn (360°) off',
  //       5.32,
  //       5.6,
  //     ];
  //   }
  //   if (str === 'boosthree') {
  //     return [
  //       'Round-off, flic-flac with 1⁄2 turn (180°) on – salto fwd stretched with 1 1/2 turn (540°) off',
  //       5.33,
  //       6.0,
  //     ];
  //   }
  // };

  componentDidUpdate() {
    let setObj = {}
    if (this.state.switch) {
      if (this.state.reset){
        setTimeout(() => {this.setState({
      nextItem:
        {
          q: 'What direction will you face jumping off the springboard?',
          names: ['Forward', 'Backward'],
          values: ['f', 'b'],
        },
      dir: 'f',
      fTurn: 'z',
      salto: 'z',
      sTurn: 'z',
      bp: 's',
      backFlag: false,
      complete: 'f',
      activePage: 1,
      finished: false,
      changing: true,
      reset: false,
      finalV: [],
      final: [],
      backQ: [],
        })}, 500)
      }
      else if (this.state.backFlag) {
        let count = this.state.activePage;
        let resThree = parseThree(
          this.state.dir + this.state.fTurn + this.state.salto
        );
        count === 1
          ? setTimeout(() => {
              this.setState({
                nextItem:
                {
                  q:
                    'What direction will you face jumping off the springboard?',
                  names: ['Forward', 'Backward'],
                  values: ['f', 'b'],
                },
                backFlag: false,
                changing: true,
              });
            }, 500)
          : count === 2
          ? setTimeout(() => {
              this.setState({
                nextItem:
                {
                  q:
                    'How many turns will you take from springboard to aparatus?',
                  names: ['0', '1 (180°)', '2 (360°)'],
                  values: ['z', 'o', 't'],
                },
                backFlag: false,
                changing: true
              });
            }, 500)
          : count === 3
          ? setTimeout(() => {
              this.setState({
                nextItem:
                {
                  q: 'How many saltos will you perform?',
                  names: ['0', '1', '2'],
                  values: ['z', 'o', 't'],
                },
                backFlag: false,
                changing: true
              });
            }, 500)
          : count === 4
          ? setTimeout(() => {
              this.setState({
                nextItem:
                {
                  q:
                    'What body position will you maintain from aparatus to landing?',
                  names: resThree.names,
                  values: resThree.values,
                },
                backFlag: false,
                changing: true
              });
            }, 500)
          : null;
      } else {
        if (!this.state.finished) {
          if (this.state.changing) {
            setTimeout(() => {
              let hold = [this.state.nextItem];
              this.setState({
                items: hold,
                nextItem: {},
                switch: false,
                changing: false,
              });
            }, 500);
          } else {
            let currNum = this.state.activePage;
            let arr = this.state.backQ;
            arr.push(currNum);
            if (currNum === 1) {
              setTimeout(() => {
                this.setState({
                  activePage: 2,
                  // items: [],
                  switch: true,
                  nextItem: {
                    q:
                      'How many turns will you take from springboard to aparatus?',
                    names: ['0', '1 (180°)', '2 (360°)'],
                    values: ['z', 'o', 't'],
                  },
                  backQ: arr,
                  changing: true,
                });
              }, 500);
            } else if (currNum === 2) {
              setTimeout(() => {
                this.setState({
                  activePage: 3,
                  // items: [],
                  switch: true,
                  nextItem: {
                    q: 'How many saltos will you perform?',
                    names: ['0', '1', '2'],
                    values: ['z', 'o', 't'],
                  },
                  changing: true,
                  backQ: arr,
                });
              }, 500);
            } else if (currNum === 3) {
              let resThree = parseThree(
                this.state.dir + this.state.fTurn + this.state.salto
              );
              if (typeof resThree === 'string') {
                if (resThree === 'finished') {
                  let ans = finalVault(
                    this.state.dir +
                      this.state.fTurn +
                      this.state.salto +
                      this.state.bp +
                      this.state.sTurn
                  );
                  setTimeout(() => {
                    this.setState({
                      switch: true,
                      finished: true,
                      finalV: ans,
                    });
                  }, 500);
                } else {
                  let skipParse = parseFour(
                    this.state.dir +
                      this.state.fTurn +
                      this.state.salto +
                      resThree
                  );
                  setTimeout(() => {
                    this.setState({
                      switch: true,
                      bp: resThree,
                      activePage: 5,
                      // items: [],
                      changing: true,
                      nextItem: {
                        q:
                          'How many turns will you take from aparatus to landing?',
                        names: skipParse.names,
                        values: skipParse.values,
                      },
                      backQ: arr,
                    });
                  }, 500);
                }
              } else {
                setTimeout(() => {
                  this.setState({
                    switch: true,
                    activePage: 4,
                    // items: [],
                    changing: true,
                    nextItem: {
                      q:
                        'What body position will you maintain from aparatus to landing?',
                      names: resThree.names,
                      values: resThree.values,
                    },
                    backQ: arr,
                  });
                }, 500);
              }
            } else if (currNum === 4) {
              let resFour = parseFour(
                this.state.dir +
                  this.state.fTurn +
                  this.state.salto +
                  this.state.bp
              );
              if (typeof resThree === 'string') {
                let finalAns = finalVault(
                  this.state.dir +
                    this.state.fTurn +
                    this.state.salto +
                    this.state.bp +
                    this.state.sTurn
                );
                setTimeout(() => {
                  this.setState({
                    switch: true,
                    finished: true,
                    items: [],
                    finalV: finalAns,
                  });
                }, 500);
              } else {
                setTimeout(() => {
                  this.setState({
                    switch: true,
                    activePage: 5,
                    // items: [],
                    nextItem: resFour,
                    backQ: arr,
                    changing: true,
                  });
                }, 500);
              }
            } else {
              let finalAns = finalVault(
                this.state.dir +
                  this.state.fTurn +
                  this.state.salto +
                  this.state.bp +
                  this.state.sTurn
              );
              setTimeout(() => {
                this.setState({
                  switch: true,
                  finished: true,
                  // items: [],
                  finalV: finalAns,
                });
              }, 500);
            }
          }
        } else {
          setTimeout(() => {
            this.setState({
              switch: false,
              nextItem: {},
              final: this.state.finalV,
            });
          }, 500);
        }
      }
    }
  }

  handleDir = event => {
    const value = event.target.value;
    this.setState({ dir: value });
  };
  handleFTurn = event => {
    const value = event.target.value;
    this.setState({ fTurn: value });
  };
  handleSalto = event => {
    const value = event.target.value;
    this.setState({ salto: value });
  };
  handleBP = event => {
    const value = event.target.value;
    this.setState({ bp: value });
  };
  handleSTurn = event => {
    const value = event.target.value;
    this.setState({ sTurn: value });
  };

  _next = () => {
    const curr = this.state.activePage + 1;
    this.setState({
      activePage: curr,
    });
  };

  _back = () => {
    let arr = this.state.backQ;
    let next = arr.pop();
    this.setState({
      switch: true,
      activePage: next,
      backQ: arr,
      backFlag: true,
    });
  };

  handleNext = event => {
    this.setState({ switch: true });
  };

  handleReset = event => {
    this.setState({ switch: true, reset: true })
  }

  render() {
    const items = this.state.items != [] ? this.state.items[0] : null;
    let currNum = this.state.activePage;
    const currQ =
      currNum === 1
        ? 'dir'
        : currNum === 2
        ? 'fTurn'
        : currNum === 3
        ? 'salto'
        : currNum === 4
        ? 'bp'
        : 'sTurn';
    return (
        <Container>
          <Animate show={!this.state.switch} type="slide" duration={500}>
            {!this.state.finished && this.state.final != [] ? (
              <Wrapper>
                {!this.state.changing ? <Question>{this.state.items[0].q}</Question> : null}
                {!this.state.changing
                  ? items.values.map((aItem, aI) => {
                      return (
                        <Item key={items.names[aI] + aI}>
                          <RadioButton
                            type="radio"
                            name={this.state.activePage}
                            value={aItem}
                            checked={this.state[currQ] === aItem}
                            onChange={event => {
                              currNum === 1
                                ? this.handleDir(event)
                                : currNum === 2
                                ? this.handleFTurn(event)
                                : currNum === 3
                                ? this.handleSalto(event)
                                : currNum === 4
                                ? this.handleBP(event)
                                : this.handleSTurn(event);
                            }}
                          />
                          <RadioButtonLabel />
                          <div>{items.names[aI]}</div>
                        </Item>
                      );
                    })
                  : null}
              </Wrapper>
            ) : (
              <div>
                <h1>{this.state.final[0]}</h1>
                <h1>{this.state.final[1]}</h1>
                <h1>{this.state.final[2]}</h1>
              </div>
            )}
            {!this.state.finished ? (
              <div>
                <button type="button" onClick={this._back}>
                  Back
                </button>
                <button type="button" onClick={this.handleNext}>
                  Next
                </button>
              </div>
            ) : (
              <div>
                <button type="button" onClick={this.handleReset}>
                  Build Another Vault!
                </button>
              </div>
            )}
          </Animate>
        </Container>
    );
  }
}

export default VaultComp;
