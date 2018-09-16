import React from 'react'
import { connect } from 'react-redux'

const positions = [
	[1604, 90],
	[1604, 117],
	[1604, 138],
	[1604, 159],
	[1604, 182],
	[1604, 204],
	[1604, 227],
	[1603, 249],
	[1603, 273],
	[1603, 296],
	[1603, 322],
	[1603, 353],
	[1603, 382],
	[1603, 412],
	[1603, 442],
	[1603, 473],
	[1602, 503],
	[1602, 534],
	[1602, 564],
	[1602, 595],
	[1602, 628],
	[1602, 662],
	[1602, 695],
	[1602, 730],
	[1602, 764],
	[1602, 800],
	[1602, 834],
	[1602, 868],
	[1601, 904],
	[1601, 938],
	[1601, 974],
	[1601, 1007],
	[1601, 1039],
	[1601, 1073],
	[1601, 1107]
]

class Sheet extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			souffle: 0
		}
	}

	componentDidMount() {
		let vigueur = parseInt(this.props.profil.get('vigueur').get('dice')[1], 10)
		let ame = parseInt(this.props.profil.get('ame').get('dice')[1], 10)
		let bonus = 0;
		let assets = this.props.profil.get('assets')
		assets.forEach(function(elt, index) {
			if(elt.get('name') == "Solide comme un roc") {
				bonus += parseInt(elt.get('value'), 10) * 2
			}
		})
		let souffle = vigueur + ame + bonus
		this.setState({
			souffle: souffle
		})
	}

	render() {
		return(
			<div>
				<div className="sheet">
					<div id="name">{this.props.profil.name}</div>
					<div id="occupation">{this.props.profil.occupation}</div>
					<div id="perception">{this.props.profil.get('perception').get('dice')}</div>
					<div id="artillerie" className="competence">1</div>
					<div id="arts" className="competence">1</div>
					<div id="detecter" className="competence">1</div>
					<div id="pister" className="competence">1</div>
					<div id="orientation" className="competence">1</div>
					<div id="scruter" className="competence">1</div>
					<div id="perc_other" className="competence">1</div>

					<div id="connaissance">{this.props.profil.get('connaissance').get('dice')}</div>
					<div id="carriere" className="competence">1</div>
					<div id="con_terr" className="competence">1</div>
					<div id="deguisement" className="competence">1</div>
					<div id="explosif" className="competence">1</div>
					<div id="lang_mat" className="competence">1</div>
					<div id="langues" className="competence">1</div>
					<div id="langues1" className="competence">1</div>
					<div id="langues2" className="competence">1</div>
					<div id="langues3" className="competence">1</div>
					<div id="medecine1" className="competence">1</div>
					<div id="medecine2" className="competence">1</div>
					<div id="metier" className="competence">1</div>
					<div id="science1" className="competence">1</div>
					<div id="science2" className="competence">1</div>
					<div id="universalis" className="competence">1</div>
					<div id="con_other" className="competence">1</div>

					<div id="charisme">{this.props.profil.get('charisme').get('dice')}</div>
					<div id="autorite" className="competence">1</div>
					<div id="dressage" className="competence">1</div>
					<div id="eloquence" className="competence">1</div>
					<div id="intimider" className="competence">1</div>
					<div id="persuation" className="competence">1</div>
					<div id="spectacle" className="competence">1</div>
					<div id="char_other" className="competence">1</div>

					<div id="astuce">{this.props.profil.get('astuce').get('dice')}</div>
					<div id="bidouiller" className="competence">1</div>
					<div id="bluff" className="competence">1</div>
					<div id="rue" className="competence">1</div>
					<div id="denicher" className="competence">1</div>
					<div id="jeux" className="competence">1</div>
					<div id="ridiculiser" className="competence">1</div>
					<div id="survie" className="competence">1</div>
					<div id="astuce_other1" className="competence">1</div>

					<div id="ame">{this.props.profil.get('ame').get('dice')}</div>
					<div id="foi" className="competence">1</div>
					<div id="tripes" className="competence">1</div>

					<div id="dexterite">{this.props.profil.get('dexterite').get('dice')}</div>
					<div id="arc" className="competence">1</div>
					<div id="crocheter" className="competence">1</div>
					<div id="derober" className="competence">1</div>
					<div id="lancer1" className="competence">1</div>
					<div id="lancer2" className="competence">1</div>
					<div id="passe" className="competence">1</div>
					<div id="recharge1" className="competence">1</div>
					<div id="recharge2" className="competence">1</div>
					<div id="tirer1" className="competence">1</div>
					<div id="tirer2" className="competence">1</div>
					<div id="tirer3" className="competence">1</div>
					<div id="ventiler" className="competence">1</div>
					<div id="dex_other" className="competence">1</div>

					<div id="agilite">{this.props.profil.get('agilite').get('dice')}</div>
					<div id="attelage" className="competence">1</div>
					<div id="combat1" className="competence">1</div>
					<div id="combat2" className="competence">1</div>
					<div id="conduire1" className="competence">1</div>
					<div id="conduire2" className="competence">1</div>
					<div id="equitation" className="competence">1</div>
					<div id="esquiver" className="competence">1</div>
					<div id="furtivite" className="competence">1</div>
					<div id="grimper" className="competence">1</div>
					<div id="nager" className="competence">1</div>
					<div id="agi_other" className="competence">1</div>

					<div id="force">{this.props.profil.get('force').get('dice')}</div>
					<div id="for_other" className="competence">1</div>

					<div id="rapidite">{this.props.profil.get('rapidite').get('dice')}</div>
					<div id="degainer" className="competence">1</div>
					<div id="rap_other1" className="competence">1</div>
					<div id="rap_other2" className="competence">1</div>

					<div id="vigueur">{this.props.profil.get('vigueur').get('dice')}</div>
					<div id="vig_other" className="competence">1</div>
					<div id="trempe">1</div>
					<div id="souffle" style={{ top:positions[this.state.souffle][0], left:positions[this.state.souffle][1] }}></div>
				</div>
				<link href="/static/css/sheet.css" rel="stylesheet" type="text/css"/>
			</div>
		)
	}
}

export default connect(
	function mapStateToProps(state){
		return {profil: state.profil}
	},
	function mapDispatchToProps(dispatch) {
		return {
		}
	}
)(Sheet);
