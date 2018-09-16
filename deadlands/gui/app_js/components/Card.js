import React from 'react'


class Card extends React.Component {
	constructor(props) {
		super(props)
		const { card, flip, children } = props
		if (card.get('flip') != -1 && !card.get('removed')) {
			this.timer = setInterval(this._onFlip.bind(this), card.get('flip') * 1000)
		}
		this.state = {
			cl: "card"
		}
		this._onRevert = this._onRevert.bind(this)
		this.card = card
		this.flip = flip
		this.children = children
	}

	componentWillReceiveProps(nextProps) {
		const { card, flip, children } = nextProps
		this.card = card
	}

	render() {
		let id_name = this.card.get('color') + "_" + this.card.get('figure')
		return(
			<section className="pos_card">
				<div className={this.state.cl} onClick={this._onRevert}>
					<figure id={id_name} className="front"></figure>
					<figure className="back"></figure>
				</div>
				<div className="display" style={{ textDecoration: this.card.get('removed') ? 'line-through' : 'none'}}>
					{this.children}
				</div>
			</section>
		)
	}

	_onFlip() {
		clearInterval(this.timer)
		this.setState({cl: "card flipped"})
	}

	_onRevert() {
		if (this.card.get('flip') == -1 ||
			this.card.get('figure') == 2 ||
			this.card.get('figure') == 0) {
			return
		}
		if (this.state.cl.includes("flipped")) {
			this.setState({cl: "card"})
		} else {
			this.setState({cl: "card flipped"})
		}
		this.flip(this.card)
	}
}

export default Card
