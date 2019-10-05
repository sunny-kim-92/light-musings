---
type: 'blog-post'
link: '/10-2-states-as-friends-of-the-court/'
title: 'States as Friends of the Court'
date: '2019-10-02'
subtitle: 'Analysis of State-filed Amicus Briefs During SCOTUS October 2018 Term'
frontimg: '../../images/amici/scotus.jpeg'
tags: ['Law', 'Data Analysis']
---

States play an important role in the litigation and outcome of Supreme Court cases by authoring amicus briefs, which allow parties not directly involved with the case the ability to provide input on particular topics of legal interests that a given case covers. These briefs are provided to Supreme Court Justices, who often cite these texts during oral arguments and opinions. To analyze the breadth of states and their amicus filings, I explored amicus briefs filed by states during the October 2018 Supreme Court term. Through this, we can identify a number of relationships both among states and between states and justices.

*Since I don’t have access to major legal database tools like LexisNexus or CaseText, I wrote a number of programs for accumulating the data used for this article. I chiefly used web-scraping techniques designed for SCOTUSblog.com. [The code can be found here.](https://github.com/sunny-kim-92/amici-link) The total accumulated raw data, as well as numerous charts and tables, detailing the data collected [can be found here.](https://docs.google.com/spreadsheets/d/19ms2JFLqjp2bGO2YD_4uz_V35Wy2kYkLSMb_2pixFb0/edit?usp=sharing)*


<br></br>

**States filed amicus briefs for 28 cases during the October 2018 SCOTUS term. The following graphs displays the totals arranged by state and by Supreme Court case:**

<amici-total-bar></amici-total-bar>
<case-bar></case-bar>

<br></br>

**Use the following map to explore which states filed amicus briefs for each case. You can search or select from the dropdown menu:**

<us-case-map></us-case-map>

<br></br>

<br></br>

Cases with the highest rates of state participation often deal directly with states issues. *Franchise Tax Board of California v. Hyatt* involves the sovereign immunity of states being sued in other state courts. *Rucho v. Common Cause* was one of a number of cases this term challenging political gerrymandering in congressional districts. *Tennessee Wine and Spirits Retailers Association v. Thomas* involved the rights of states to regulate alcohol sales by out-of-state sellers.

States filed on opposing sides of the same case only four times (14.3% of cases in which at least one state filed an amicus brief) this term. In addition to the aforementioned *Rucho v. Common Cause*: *North Carolina Department of Revenue v. The Kimberley Rice Kaestner 1992 Family Trust* challenged interpretations of residency as pertaining to a state’s right to collect taxes on trust income. *The American Legion v. The American Humanist Society* is the latest case involving the various tests measuring separation of church and state. The case concerned a 40-foot Latin Cross erected in Bladensburg, Maryland in 1925 as a memorial to fallen WWI veterans. *Frank v. Gaos* and *Department of Commerce v. Southern District of New York*, two other cases in which cases filed on opposing sides, were not included, as all or major portions of either case were remanded to lower courts with challenges left unsettled. As these examples illustrate, states appear more likely to back cases which directly affect state legislation.

<both-bar></both-bar>

<br></br>

<br></br>

We can attempt to measure the relationships between states and justices. Similar to our previous analysis, we can calculate a net score by finding the number of cases in which justices voted on the same side of a state subtracted by cases in which justices opposed states. We can take our investigation a step further by finding a net proportion. We take each net score and divide by the total number of cases in which a state filed, thus providing a simple normalized ratio consistent with each state’s total amicus briefs. These scores provide insight into the level of agreement or disagreement between justices and states.

<br></br>

**The following sortable table lists a “normalized net agreement score” for each state and District of Columbia with each justice. These scores, ranging from -1 to 1, measures the total difference between cases in which a justice voted with the side of a state's amicus filing with cases in wich justice voted against a state, divided by the total number of cases in which any state filed an amicus brief (28):**

<justice-table></justice-table>

<br></br>

In addition to the relationship between states and justices, we can attempt to analyze relationships between states. We calculate a net score of cases in which states filed in support of the same side subtracted by cases in which states filed on opposing sides.

<br></br>

**The following sortable table lists a net agreement score (Difference SCOTUS cases in which states filed on the same side and cases in which states filed on opposing sides):**

<comorb-table></comorb-table>

<br></br>

**Given that states filed on opposing sides on only 4 of the 28 cases, a negative net agreement score represents a particularly sharp divide in litigation this term. The following Sankey diagram displays states pairs with negative scores:**

<sankey-chart></sankey-chart>

<br></br>

There are a number of surprising alignments of political ideology among the scores. Iowa, a state in which the Republican Party holds complete state-wide (Governor, State Senate, State House) control and one that voted for Donald Trump in 2016, has positive scores with a number of Democratic states. Perhaps one function of this is Tom Miller, Iowa’s Attorney General. He has held the office since 1995, weathering multiple electoral shifts on both the national and state levels to win nine straight Attorney General elections. His 24 years at the position is the longest continuous service among the 50 states. Interestingly, the Attorney General with the second-longest active streak, Jim Hood of Mississippi, is also a Democrat in a consistently Republican state.

Notably, in addition to a general correlation between justices and like-minded states, there is a broad trend of lower scores for liberal justices than those of conservative justices. This is perhaps a function of the conservative justices’ more favorable view towards federalism and the rights of states. Such cases prompt a larger, more unified response from states, and in turn provides a noticeable aggregate impact on the state-justice data.

<br></br>

*References*

*Programs developed for data collection can be found at www.github.com/sunny-kim-92/amici-link*

*www.scotusblog.com*

*www.ballotopedia.org*