export const parseThree = combo => {
  if (combo === 'fzz') {
    return {
      names: ['Straight', 'Piked'],
      values: ['s', 'p'],
    };
  }
  if (combo === 'foz') {
    return 'straight';
  }
  if (combo === 'ftz') {
    return 'straight';
  }
  if (combo === 'bzz') {
    return 'straight';
  }
  if (combo === 'boz') {
    return 'straight';
  }
  if (combo === 'btz') {
    return 'straight';
  }
  if (combo === 'fzo') {
    return {
      names: ['Straight', 'Tucked', 'Piked'],
      values: ['s', 't', 'p'],
    };
  }
  if (combo === 'fto') {
    return {
      names: ['Tucked', 'Piked'],
      values: ['t', 'p'],
    };
  }
  if (combo === 'fzt') {
    return 'tucked';
  }
  if (combo === 'foo') {
    return {
      names: ['Straight', 'Tucked', 'Piked'],
      values: ['s', 't', 'p'],
    };
  }
  if (combo === 'bzo') {
    return {
      names: ['Straight', 'Tucked', 'Piked'],
      values: ['s', 't', 'p'],
    };
  }
  if (combo === 'bto') {
    return {
      names: ['Straight', 'Tucked', 'Piked'],
      values: ['s', 't', 'p'],
    };
  }
  if (combo === 'boo') {
    return {
      names: ['Straight', 'Tucked', 'Piked'],
      values: ['s', 't', 'p'],
    };
  }
};

export const parseFour = () => {
  let tri = this.state.dir + this.state.fTurn + this.state.salto;
  let quad =
    this.state.dir + this.state.fTurn + this.state.salto + this.state.bp;
  if (quad === 'fzzs') {
    return {
      names: [
        '0',
        '1/2 (180°)',
        '1/1 (360°)',
        '3/2 (540°)',
        '2/1 (720°)',
        '5/2 (900°)',
      ],
      values: ['zero', 'one', 'two', 'three', 'four', 'five'],
    };
  }
  if (quad === 'foop') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)'],
      values: ['zero', 'one', 'two'],
    };
  }
  if (tri === 'foz') {
    return {
      names: ['0', '1/1 (360°)'],
      values: ['zero', 'two'],
    };
  }
  if (tri === 'ftz') {
    return {
      names: ['0', '1/1 (360°)'],
      values: ['zero', 'two'],
    };
  }
  if (tri === 'bzz') {
    //finished
  }
  if (tri === 'boz') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
      values: ['zero', 'one', 'two', 'three'],
    };
  }
  if (tri === 'btz') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)'],
      values: ['zero', 'one', 'two'],
    };
  }
  if (quad === 'fzot') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
      values: ['zero', 'one', 'two', 'three'],
    };
  }
  if (quad === 'fzop') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)'],
      values: ['zero', 'one', 'two'],
    };
  }
  if (quad === 'fzos') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
      values: ['zero', 'one', 'two', 'three'],
    };
  }
  if (quad === 'ftot') {
    //finished
  }
  if (quad === 'ftop') {
    //finished
  }
  if (tri === 'fzt') {
    //finished
  }
  if (quad === 'foot') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)', '2/1 (720°)'],
      values: ['zero', 'one', 'two', 'three', 'four'],
    };
  }
  if (quad === 'foop') {
    //finished
  }
  if (quad === 'foos') {
    return {
      names: [
        '0',
        '1/2 (180°)',
        '1/1 (360°)',
        '3/2 (540°)',
        '2/1 (720°)',
        '5/2 (900°)',
      ],
      values: ['zero', 'one', 'two', 'three', 'four', 'five'],
    };
  }
  if (quad === 'bzot') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)', '2/1 (720°)'],
      values: ['zero', 'one', 'two', 'three', 'four'],
    };
  }
  if (quad === 'foop') {
    //finished
  }
  if (quad === 'foot') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)', '2/1 (720°)'],
      values: ['zero', 'one', 'two', 'three', 'four'],
    };
  }
  if (quad === 'bzop') {
    //finished
  }
  if (quad === 'bzos') {
    return {
      names: [
        '0',
        '1/2 (180°)',
        '1/1 (360°)',
        '3/2 (540°)',
        '2/1 (720°)',
        '5/2 (900°)',
      ],
      values: ['zero', 'one', 'two', 'three', 'four', 'five'],
    };
  }
  if (quad === 'btot') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)'],
      values: ['zero', 'one', 'two'],
    };
  }
  if (quad === 'bzop') {
    //finished
  }
  if (quad === 'ftos') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)'],
      values: ['zero', 'one', 'two'],
    };
  }

  if (quad === 'boot') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
      values: ['zero', 'one', 'two', 'three'],
    };
  }
  if (quad === 'boop') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)'],
      values: ['zero', 'one', 'two'],
    };
  }
  if (quad === 'boos') {
    return {
      names: ['0', '1/2 (180°)', '1/1 (360°)', '3/2 (540°)'],
      values: ['zero', 'one', 'two', 'three'],
    };
  }
};

export const final = str => {
  if (str === 'fzzszero') {
    return ['Handspring forward', 1.0, 2.0];
  }
  if (str === 'fzzsone') {
    return ['Handspring fwd on – 1⁄2 turn (180°) off', 1.01, 2.4];
  }
  if (str === 'fzzstwo') {
    return ['Handspring fwd on – 1/1 turn (360°) off', 1.02, 3.0];
  }
  if (str === 'fzzsthree') {
    return ['Handspring fwd on – 1 1⁄2 turn (540°) off', 1.03, 3.6];
  }
  if (str === 'fzzsfour') {
    return ['Handspring fwd on – 2/1 turn (720°) off', 1.04, 4.0];
  }
  if (str === 'fzzsfive') {
    return ['Handspring fwd on – 2 1⁄2 turn (900°) off', 1.05, 4.4];
  }
  if (str === 'fzzpzero') {
    return ['Yamashita', 1.1, 2.4];
  }
  if (str === 'fzzpone') {
    return ['Yamashita with 1⁄2 turn (180°) off', 1.11, 2.8];
  }
  if (str === 'fzzptwo') {
    return ['Yamashita with 1⁄2 turn (180°) off', 1.12, 3.2];
  }
  if (str === 'fozszero') {
    return ['Handspring fwd with 1⁄2 turn (180°) on – repulsion off', 1.2, 2.0];
  }
  if (str === 'fozsone') {
    return [
      'Handspring fwd with 1⁄2 turn (180°) on – 1⁄2 turn (180°) off (in either direction)',
      1.21,
      2.8,
    ];
  }
  if (str === 'fozstwo') {
    return [
      'Handspring fwd with 1⁄2 turn (180°) on – 1/1 turn (360°) off',
      1.22,
      3.0,
    ];
  }
  if (str === 'fozsthree') {
    return [
      'Handspring fwd with 1⁄2 turn (180°) on – 1 1/2 turn (540°) off',
      1.23,
      3.6,
    ];
  }
  if (str === 'fozsfour') {
    return [
      'Handspring fwd with 1⁄2 turn (180°) on – 2/1 turn (720°) off',
      1.24,
      4.0,
    ];
  }
  if (str === 'ftzszero') {
    return [
      'Handspring fwd with 1/1 turn (360°) on – Handspring fwd off',
      1.3,
      3.6,
    ];
  }
  if (str === 'ftzstwo') {
    return [
      'Handspring fwd with 1/1 turn (360°) on – 1/1 turn (360°) off',
      1.31,
      4.0,
    ];
  }
  if (str[(0, 2)] === 'bzz') {
    return ['Round-off, flic-flac on – repulsion off', 1.4, 2.0];
  }
  if (str === 'bozszero') {
    return [
      'Round-off, flic-flac with 1⁄2 turn (180°) on – Handspring fwd off',
      1.5,
      2.6,
    ];
  }
  if (str === 'bozsone') {
    return [
      'Round-off, flic-flac with 1⁄2 turn (180°) on –1⁄2 turn (180°) off',
      1.51,
      3.0,
    ];
  }
  if (str === 'bozstwo') {
    return [
      'Round-off, flic-flac with 1⁄2 turn (180°) on – 1/1 turn (360°) off',
      1.52,
      3.4,
    ];
  }
  if (str === 'bozsthree') {
    return [
      'Round-off, flic-flac with 1⁄2 turn (180°) on – 1 1⁄2 turn (540°) off',
      1.53,
      3.8,
    ];
  }
  if (str === 'btzszero') {
    return [
      'Round-off, flic-flac with 1/1 turn (360°) on – Repulsion off',
      1.6,
      2.8,
    ];
  }
  if (str === 'btzsone') {
    return [
      'Round-off, flic-flac with 1/1 turn (360°) on – 1/2 turn (180°) off',
      1.61,
      3.2,
    ];
  }
  if (str === 'btzstwo') {
    return [
      'Round-off, flic-flac with 1/1 turn (360°) on – 1/1 turn (360°) off',
      1.62,
      3.8,
    ];
  }
  if (str === 'fzotzero') {
    return ['Handspring fwd on – 1⁄2 turn (180°) off', 2.10, 4.00];
  }
  if (str === 'fzotone') {
    return ['Handspring fwd on – tucked salto fwd with 1⁄2 turn (180°) off, also – 1⁄2 turn (180°) and tucked salto bwd off', 2.11, 4.40];
  }
  if (str === 'fzottwo') {
    return ['Handspring fwd on – tucked salto fwd with 1/1 turn (360°) off', 2.12, 4.80];
  }
  if (str === 'fzotthree') {
    return ['Handspring fwd on – tucked salto fwd with 11⁄2 turn (540°) off', 2.13, 5.20];
  }
  if (str === 'fzopzero') {
    return ['Handspring fwd on – piked salto fwd off', 2.20, 4.20];
  }
  if (str === 'fzopone') {
    return ['Handspring fwd on – piked salto fwd with 1⁄2 turn (180°) off, also – 1⁄2 turn (180°) and piked salto bwd off', 2.21, 4.60];
  }
  if (str === 'fzoptwo') {
    return ['Handspring fwd on – piked salto fwd with 1/1 turn (360°) off', 2.22, 5.00];
  }
  if (str === 'fzoszero') {
    return ['Handspring fwd on – stretched salto fwd off', 2.30, 4.60];
  }
  if (str === 'fzosone') {
    return ['Handspring fwd on – stretched salto fwd with 1⁄2 turn (180°) off', 2.31, 5.00];
  }
  if (str === 'fzostwo') {
    return ['Handspring fwd on – stretched salto fwd with 1/1 turn (360°) off', 2.32, 5.40];
  }
  if (str === 'fzosthree') {
    return ['Handspring fwd on – stretched salto fwd with 1 1/2 turn (540°) off', 2.33, 5.80];
  }
  if (str === 'ftotzero') {
    return ['Handspring fwd with 1/1 turn (360°) on - tucked salto fwd off', 2.40, 5.20];
  }
  if (str === 'ftopzero') {
    return ['Handspring fwd with 1/1 turn (360°) on - piked salto fwd off', 2.41, 5.60];
  }
  if (str[0,2] === 'fot') {
    return ['Handspring fwd on – tucked double salto fwd off', 2.50, 6.40];
  }
  if (str === 'footzero') {
    return ['Tsukahara tucked', 3.10, 3.50];
  }
  if (str === 'footone') {
    return ['Tsukahara tucked with 1/2 turn (180°) off', 3.11, 3.80];
  }
  if (str === 'foottwo') {
    return ['Tsukahara tucked with 1/1 turn (360°) off', 3.12, 4.10];
  }
  if (str === 'footthree') {
    return ['Tsukahara tucked with 1 1⁄2 turn (540°) off', 3.13, 4.40];
  }
  if (str === 'footfour') {
    return ['Tsukahara tucked with 2/1 turn (720°) off', 3.14, 4.90];
  }
  if (str[0,3] === 'foop') {
    return ['Tsukahara piked', 3.20, 3.70];
  }
  if (str === 'fooszero') {
    return ['Tsukahara stretched', 3.30, 4.20];
  }
  if (str === 'foosone') {
    return ['Tsukahara stretched with 1⁄2 turn (180°) off', 3.31, 4.40];
  }
  if (str === 'foostwo') {
    return ['Tsukahara stretched with 1⁄1 turn (360°) off', 3.32, 4.80];
  }
  if (str === 'foosthree') {
    return ['Tsukahara stretched with 1 1⁄2 turn (540°) off', 3.33, 5.20];
  }
  if (str === 'foosfour') {
    return ['Tsukahara stretched with 2/1 turn (720°) off', 3.34, 5.60];
  }
  if (str === 'foosfive') {
    return ['Tsukahara stretched with 2 1/2 turn (900°) off', 3.35, 6.00];
  }
  if (str === 'bzotzero') {
    return ['Round-off, flic-flac on – tucked salto bwd off', 4.10, 3.30];
  }
  if (str === 'bzotone') {
    return ['Round-off, flic-flac on – tucked salto bwd with 1⁄2 turn (180°) off', 4.11, 3.60];
  }
  if (str === 'bzottwo') {
    return ['Round-off, flic-flac on - tucked salto bwd with 1/1 turn (360°) off', 4.12, 3.90];
  }
  if (str === 'bzotthree') {
    return ['Round-off, flic-flac on - tucked salto bwd with 1 1/2 turn (540°) off', 4.13, 4.20];
  }
  if (str === 'bzotfour') {
    return ['Round-off, flic-flac on - tucked salto bwd with 2/1 turn (720°) off', 4.14, 4.70];
  }
  if (str[0,3] === 'bzop') {
    return ['Round-off, flic-flac on – piked salto bwd off', 4.20, 3.50];
  }
  if (str === 'bzoszero') {
    return ['Round-off, flic-flac on – stretched salto bwd off', 4.30, 4.00];
  }
  if (str === 'bzosone') {
    return ['Round-off, flic-flac on – stretched salto bwd with 1⁄2 turn (180°) off', 4.31, 4.20];
  }
  if (str === 'bzostwo') {
    return ['Round-off, flic-flac on – stretched salto bwd with 1/1 turn (360°) off', 4.32, 4.60];
  }
  if (str === 'bzosthree') {
    return ['Round-off, flic-flac on – stretched salto bwd with 11⁄2 turn (540°) off', 4.33, 5.00];
  }
  if (str === 'bzosfour') {
    return ['Round-off, flic-flac on – stretched salto bwd with 2/1 turn (720°) off', 4.34, 5.40];
  }
  if (str === 'bzosfive') {
    return ['Round-off, flic-flac on –stretched salto bwd with 21⁄2 turn (900°) off', 4.35, 5.80];
  }
  if (str === 'btotzero') {
    return ['Round-off, flic-flac with 1/1 turn (360°) on – tucked salto bwd off', 4.40, 4.00];
  }
  if (str === 'btotone') {
    return ['Round-off, flic-flac with 1/1 turn (360°) on – tucked salto bwd with 1⁄2 turn (180°) off', 4.41, 4.40];
  }
  if (str === 'btottwo') {
    return ['Round-off, flic-flac with 1/1 turn (360°) on – tucked salto bwd with 1⁄1 turn (360°) off', 4.42, 4.80];
  }
  if (str === 'btopzero') {
    return ['Round-off, flic-flac 1/1 turn (360°) on – piked salto bwd off', 4.50, 4.20];
  }
  if (str === 'btoszero') {
    return ['Round-off, flic-flac 1/1 turn (360°) on – stretched salto bwd off', 4.51, 4.60];
  }
  if (str === 'btosone') {
    return ['Round-off, flic-flac 1/1 turn (360°) on – stretched salto bwd with 1⁄2 turn (180°) off', 4.52, 5.00];
  }
  if (str === 'btostwo') {
    return ['Round-off, flic-flac 1/1 turn (360°) on – stretched salto bwd with 1⁄1 turn (360°) off', 4.53, 5.40];
  }
  if (str === 'bootzero') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – tucked salto fwd off', 5.10, 4.20];
  }
  if (str === 'bootone') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – tucked salto fwd with 1⁄2 turn (180°) off, also – 1⁄2 turn (180°) and tucked salto bwd off', 5.11, 4.60];
  }
  if (str === 'boottwo') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – tucked salto fwd with 1⁄1 turn (360°) off', 5.12, 5.00];
  }
  if (str === 'bootthree') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – tucked salto fwd with 1 1/2 turn (540°) off', 5.13, 5.40];
  }
  if (str === 'boopzero') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – piked salto fwd off', 5.20, 4.40];
  }
  if (str === 'boopone') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – piked salto fwd with 1⁄2 turn (180°) off, also – 1⁄2 turn (180°) and piked salto bwd off', 5.21, 4.80];
  }
  if (str === 'booptwo') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – piked salto fwd with 1/1 turn (360°) off', 5.22, 5.20];
  }
  if (str === 'booszero') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – stretched salto fwd off', 5.30, 4.80];
  }
  if (str === 'boosone') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – salto fwd stretched with 1⁄2 turn (180°) off', 5.31, 5.20];
  }
  if (str === 'boostwo') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – salto fwd stretched with 1⁄1 turn (360°) off', 5.32, 5.60];
  }
  if (str === 'boosthree') {
    return ['Round-off, flic-flac with 1⁄2 turn (180°) on – salto fwd stretched with 1 1/2 turn (540°) off', 5.33, 6.00];
  }
};
