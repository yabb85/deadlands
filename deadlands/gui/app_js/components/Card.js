import React from 'react'
import Actions from '../actions/Action'

const card = (state = { cl: 'card' }, action) => {
	switch (action.type) {
		case 'REVERT':
			return { cl: 'card' }
		case 'FLIP':
			return { cl: 'card flipped' }
		default:
			return state
	}
}

class Card extends React.Component {
	constructor(props) {
		super(props)
		if (props.flipped != -1) {
			this.timer = setInterval(this._onFlip.bind(this), props.flipped * 1000)
		}
		this.state = {
			cl: "card"
		}
		this._onRevert = this._onRevert.bind(this)
	}

	render() {
		let id_name = this.props.color + "_" + this.props.value
		return(
			<section className="pos_card">
				<div className={this.state.cl} onClick={this._onRevert}>
					<figure id={id_name} className="front"></figure>
					<figure className="back"></figure>
				</div>
				<div className="display" style={{ textDecoration: this.props.selected ? 'none' : 'line-through'}}>
					{this.props.children}
				</div>
			</section>
		)
	}

	_onFlip() {
		clearInterval(this.timer)
		this.setState({cl: "card flipped"})
	}

	_onRevert() {
		if (this.props.flipped == -1 || this.props.value == 2 || this.props.value == 0) {
			return
		}
		if (this.state.cl.includes("flipped")) {
			this.setState({cl: "card"})
			Actions.flipCard(this.props.color, this.props.value)
		} else {
			this.setState({cl: "card flipped"})
			Actions.flipCard(this.props.color, this.props.value)
		}
	}
}

export default Card
