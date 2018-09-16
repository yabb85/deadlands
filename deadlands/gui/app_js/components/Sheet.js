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
		this._displayValue = this._displayValue.bind(this)
	}

	componentDidMount() {
		let vigueur = parseInt(this.props.profil.get('vigueur').get('dice').replace('d', ''), 10)
		let ame = parseInt(this.props.profil.get('ame').get('dice').replace('d', ''), 10)
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
					<div id="perception">{this.props.profil.get('perception').get('coordination')}{this.props.profil.get('perception').get('dice')}</div>
					<div id="artillerie" className="competence">{this._displayValue('artillerie')}</div>
					<div id="arts" className="competence">{this._displayValue('arts')}</div>
					<div id="detecter" className="competence">{this._displayValue('detecter')}</div>
					<div id="pister" className="competence">{this._displayValue('pister')}</div>
					<div id="orientation" className="competence">{this._displayValue('orientation')}</div>
					<div id="scruter" className="competence">{this._displayValue('scruter')}</div>
					<div id="perc_other" className="competence">{this._displayValue('autre_per')}</div>

					<div id="connaissance">{this.props.profil.get('connaissance').get('coordination')}{this.props.profil.get('connaissance').get('dice')}</div>
					<div id="carriere" className="competence">{this._displayValue('carriere')}</div>
					<div id="con_terr" className="competence">{this._displayValue('territoires')}</div>
					<div id="deguisement" className="competence">{this._displayValue('deguisement')}</div>
					<div id="explosif" className="competence">{this._displayValue('explosif')}</div>
					<div id="lang_mat" className="competence">{this._displayValue('natale')}</div>
					<div id="langues" className="competence">{this._displayValue('langues')}</div>
					<div id="langues1" className="competence"></div>
					<div id="langues2" className="competence">{this._displayValue('')}</div>
					<div id="langues3" className="competence">{this._displayValue('')}</div>
					<div id="medecine1" className="competence">{this._displayValue('medecine')}</div>
					<div id="medecine2" className="competence">{this._displayValue('')}</div>
					<div id="metier" className="competence">{this._displayValue('metier')}</div>
					<div id="science" className="competence">1</div>
					<div id="science2" className="competence">{this._displayValue('science')}</div>
					<div id="universalis" className="competence">{this._displayValue('universalis')}</div>
					<div id="con_other" className="competence">{this._displayValue('autre_con')}</div>

					<div id="charisme">{this.props.profil.get('charisme').get('coordination')}{this.props.profil.get('charisme').get('dice')}</div>
					<div id="autorite" className="competence">{this._displayValue('autorite')}</div>
					<div id="dressage" className="competence">{this._displayValue('dressage')}</div>
					<div id="eloquence" className="competence">{this._displayValue('eloquence')}</div>
					<div id="intimider" className="competence">{this._displayValue('intimider')}</div>
					<div id="persuation" className="competence">{this._displayValue('persuation')}</div>
					<div id="spectacle" className="competence">{this._displayValue('spectacle')}</div>
					<div id="char_other" className="competence">{this._displayValue('autre_char')}</div>

					<div id="astuce">{this.props.profil.get('astuce').get('coordination')}{this.props.profil.get('astuce').get('dice')}</div>
					<div id="bidouiller" className="competence">{this._displayValue('bidouiller')}</div>
					<div id="bluff" className="competence">{this._displayValue('bluff')}</div>
					<div id="rue" className="competence">{this._displayValue('rue')}</div>
					<div id="denicher" className="competence">{this._displayValue('denicher')}</div>
					<div id="jeux" className="competence">{this._displayValue('jeux')}</div>
					<div id="ridiculiser" className="competence">{this._displayValue('ridiculiser')}</div>
					<div id="survie" className="competence">{this._displayValue('survie')}</div>
					<div id="astuce_other" className="competence">{this._displayValue('autre_ast')}</div>

					<div id="ame">{this.props.profil.get('ame').get('coordination')}{this.props.profil.get('ame').get('dice')}</div>
					<div id="foi" className="competence">{this._displayValue('foi')}</div>
					<div id="tripes" className="competence">{this._displayValue('tripes')}</div>

					<div id="dexterite">{this.props.profil.get('dexterite').get('coordination')}{this.props.profil.get('dexterite').get('dice')}</div>
					<div id="arc" className="competence">{this._displayValue('arc')}</div>
					<div id="crocheter" className="competence">{this._displayValue('crocheter')}</div>
					<div id="derober" className="competence">{this._displayValue('derober')}</div>
					<div id="lancer1" className="competence">{this._displayValue('lancer')}</div>
					<div id="lancer2" className="competence">{this._displayValue('lancer2')}</div>
					<div id="passe" className="competence">{this._displayValue('passe')}</div>
					<div id="recharge1" className="competence">1</div>
					<div id="recharge2" className="competence">{this._displayValue('recharger')}</div>
					<div id="tirer1" className="competence">{this._displayValue('tirer1')}</div>
					<div id="tirer2" className="competence">{this._displayValue('tirer2')}</div>
					<div id="tirer3" className="competence">{this._displayValue('')}</div>
					<div id="ventiler" className="competence">{this._displayValue('ventiler')}</div>
					<div id="dex_other" className="competence">{this._displayValue('autre_dex')}</div>

					<div id="agilite">{this.props.profil.get('agilite').get('coordination')}{this.props.profil.get('agilite').get('dice')}</div>
					<div id="attelage" className="competence">{this._displayValue('attelage')}</div>
					<div id="combat1" className="competence">{this._displayValue('combat')}</div>
					<div id="combat2" className="competence">{this._displayValue('combat')}</div>
					<div id="conduire1" className="competence">1</div>
					<div id="conduire2" className="competence">{this._displayValue('conduire')}</div>
					<div id="equitation" className="competence">{this._displayValue('equitation')}</div>
					<div id="esquiver" className="competence">{this._displayValue('esquiver')}</div>
					<div id="furtivite" className="competence">{this._displayValue('furtivite')}</div>
					<div id="grimper" className="competence">{this._displayValue('grimper')}</div>
					<div id="nager" className="competence">{this._displayValue('')}</div>
					<div id="agi_other" className="competence">{this._displayValue('autre_agi')}</div>

					<div id="force">{this.props.profil.get('force').get('coordination')}{this.props.profil.get('force').get('dice')}</div>
					<div id="for_other" className="competence">{this._displayValue('autre_for')}</div>

					<div id="rapidite">{this.props.profil.get('rapidite').get('coordination')}{this.props.profil.get('rapidite').get('dice')}</div>
					<div id="degainer" className="competence">{this._displayValue('degainer')}</div>
					<div id="rap_other1" className="competence">1</div>
					<div id="rap_other2" className="competence">{this._displayValue('autre_rap')}</div>

					<div id="vigueur">{this.props.profil.get('vigueur').get('coordination')}{this.props.profil.get('vigueur').get('dice')}</div>
					<div id="vig_other" className="competence">{this._displayValue('autre_vig')}</div>
					<div id="trempe">1</div>
					<div id="souffle" style={{ top:positions[this.state.souffle][0], left:positions[this.state.souffle][1] }}></div>
				</div>
				<link href="/static/css/sheet.css" rel="stylesheet" type="text/css"/>
			</div>
		)
	}

	_displayValue(name) {
		let value = ''
		this.props.profil.get('competences').map( item => {
			if (item.get('name') == name) {
				value = item.get('value')
			}
		})
		return value
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
