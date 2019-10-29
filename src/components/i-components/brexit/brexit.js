import React from 'react';
import Tree from 'react-d3-tree';

const debugData = [
  {
    name: 'A',
    text:
      'After rejection of Dec 12 election, Johnson pivots towards Lib Dem - 1 line bill to get election between 9 & 12 Dec',
    children: [
      {
        name: 'B',
        choice: 1,
        text: 'Bill Passes Commons and Lords by 31 Oct',
        color: 'green',
        children: [
          {
            name: 'X1',
            text: 'General Election in late 2019',
          },
        ],
      },
      {
        name: 'B',
        choice: 2,
        text: "Bill doesn't pass or runs out of time",
        color: 'red',
        children: [
          {
            name: 'C',
            choice: 1,
            text:
              'Efforts to find a way to a General Election continue - but timetable slips',
            children: [
              {
                name: 'X2',
                text: 'General Election in early 2020',
              },
            ],
          },
          {
            name: 'C',
            choice: 2,
            text: 'Corbyn tables Vote of No Confidence',
            children: [
              {
                name: 'D1',
                text: 'Vote of No Confidence succeeds',
                children: [
                  {
                    name: 'E1',
                    text: 'Johnson refuses to resign',
                    children: [
                      {
                        name: 'F1',
                        text: 'Johnson cannot be removed',
                        children: [
                          {
                            name: 'G1',
                            text:
                              'Rules of Fixed-Term Parliaments Act - leads to General Election',
                            children: [
                              {
                                name: 'H1',
                                text:
                                  'No Caretaker administration formed - so acting PM can decide when election happens - as this person would be a Consertive will be sooner rather than later',
                                children: [
                                  {
                                    name: 'I1',
                                    text:
                                      'Fixed-Term Parliaments Act delay, plus Christmas, pushes election back to January',
                                    children: [
                                      {
                                        name: 'X2',
                                        text: 'General Election in early 2020',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'F2',
                            text: 'Queen effectively sacks Johnson',
                            children: [
                              {
                                name: 'G2',
                                text:
                                  'Scramble to form alternative caretaker Government in 14 days under FTPA',
                                children: [
                                  {
                                    name: 'H1',
                                    text:
                                      'No Caretaker administration formed - so acting PM can decide when election happens - as this person would be a Consertive will be sooner rather than later',
                                    children: [
                                      {
                                        name: 'I1',
                                        text:
                                          'Fixed-Term Parliaments Act delay, plus Christmas, pushes election back to January',
                                        children: [
                                          {
                                            name: 'X2',
                                            text:
                                              'General Election in early 2020',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    name: 'H2',
                                    text: 'Caretaker administration formed',
                                    children: [
                                      {
                                        name: 'I2',
                                        text:
                                          'Caretaker PM goes for General Election first',
                                        children: [
                                          {
                                            name: 'I1',
                                            text:
                                              'Fixed-Term Parliaments Act delay, plus Christmas, pushes election back to January',
                                            children: [
                                              {
                                                name: 'X2',
                                                text:
                                                  'General Election in early 2020',
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        name: 'I3',
                                        text:
                                          "Caretaker PM goes for People's Vote first",
                                        children: [
                                          {
                                            name: 'X3',
                                            text:
                                              '2nd Referendum in mid-2020 (requires 9-month Article 50 extension)',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'E2',
                    text: 'Johnson resigns after Vote of No Confidence',
                    children: [
                      {
                        name: 'G2',
                        text:
                          'Scramble to form alternative caretaker Government in 14 days under FTPA',
                        children: [
                          {
                            name: 'H1',
                            text:
                              'No Caretaker administration formed - so acting PM can decide when election happens - as this person would be a Consertive will be sooner rather than later',
                            children: [
                              {
                                name: 'I1',
                                text:
                                  'Fixed-Term Parliaments Act delay, plus Christmas, pushes election back to January',
                                children: [
                                  {
                                    name: 'X2',
                                    text: 'General Election in early 2020',
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'H2',
                            text: 'Caretaker administration formed',
                            children: [
                              {
                                name: 'I2',
                                text:
                                  'Caretaker PM goes for General Election first',
                                children: [
                                  {
                                    name: 'I1',
                                    text:
                                      'Fixed-Term Parliaments Act delay, plus Christmas, pushes election back to January',
                                    children: [
                                      {
                                        name: 'X2',
                                        text: 'General Election in early 2020',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: 'I3',
                                text:
                                  "Caretaker PM goes for People's Vote first",
                                children: [
                                  {
                                    name: 'X3',
                                    text:
                                      '2nd Referendum in mid-2020 (requires 9-month Article 50 extension)',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'D2',
                text: 'Vote of No Confidence fails',
                children: [
                  {
                    name: 'E3',
                    text:
                      "Johnson's stuck - cannot get election and cannot get Brexit deal",
                    children: [
                      {
                        name: 'F3',
                        text: 'Johnson resigns',
                        children: [
                          {
                            name: 'G3',
                            text:
                              'Need to form alternative caretaker Government but no 14-day time limit',
                            children: [
                              {
                                name: 'H1',
                                text:
                                  'No Caretaker administration formed - so acting PM can decide when election happens - as this person would be a Consertive will be sooner rather than later',
                                children: [
                                  {
                                    name: 'I1',
                                    text:
                                      'Fixed-Term Parliaments Act delay, plus Christmas, pushes election back to January',
                                    children: [
                                      {
                                        name: 'X2',
                                        text: 'General Election in early 2020',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: 'H2',
                                text: 'Caretaker administration formed',
                                children: [
                                  {
                                    name: 'I2',
                                    text:
                                      'Caretaker PM goes for General Election first',
                                    children: [
                                      {
                                        name: 'I1',
                                        text:
                                          'Fixed-Term Parliaments Act delay, plus Christmas, pushes election back to January',
                                        children: [
                                          {
                                            name: 'X2',
                                            text:
                                              'General Election in early 2020',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    name: 'I3',
                                    text:
                                      "Caretaker PM goes for People's Vote first",
                                    children: [
                                      {
                                        name: 'X3',
                                        text:
                                          '2nd Referendum in mid-2020 (requires 9-month Article 50 extension)',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'G4',
                            text:
                              'As election routes have failed, MPs (perhaps using SO24) seek routes to a 2nd referendum',
                            children: [
                              {
                                name: 'X2',
                                text:
                                  '2nd Referendum in mid-2020 (needs 9-month Article 50 extension)',
                              },
                            ],
                          },
                          {
                            name: 'G5',
                            text:
                              'Loop of infinite tedium - everyone keeps blocking everyone else',
                            children: [
                              {
                                name: 'X3',
                                text:
                                  "Stalemate - both General Election and People's Vote efforts blocked",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'C',
            choice: 3,
            text: `Johnson's focus returns to passing Withdrawal Agreement Bill`
          }
          //
        ],
      },
    ],
  },
];

const containerStyles = {
  width: '100%',
  height: '70vh',
};

class NodeLabel extends React.PureComponent {
  render() {
    const { className, nodeData } = this.props;
    return (
      <div className={className}>
        <h2>{nodeData.text}</h2>
      </div>
    );
  }
}



export default class CenteredTree extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      translate: {},
    }
  }

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 4,
      },
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          data={debugData}
          translate={this.state.translate}
          orientation={'vertical'}
          allowForeignObjects
          initialDepth={1}
          nodeSvgShape={{ shape: 'none' }}
          shouldCollapseNeighborNodes={true}
          nodeLabelComponent={{
            render: <NodeLabel className="myLabelComponentInSvg" />,
            foreignObjectWrapper: {
              y: 2,
              x: -2,
            },
          }}
        />
      </div>
    );
  }
}
