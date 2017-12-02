import React from 'react'

class Card extends React.Component {
	constructor(props) {
		super(props)
		if (props.flipped != -1) {
			this.timer = setInterval(this.flip.bind(this), props.flipped * 1000)
		}
		this.state = {
			cl: "card"
		}
		this.revert = this.revert.bind(this)
	}

	flip() {
		clearInterval(this.timer)
		this.setState({cl: "card flipped"})
	}

	revert() {
		if (this.props.flipped == -1 || this.props.value == 2 || this.props.value == 0) {
			return
		}
		if (this.state.cl.includes("flipped")) {
			this.setState({cl: "card"})
		} else {
			this.setState({cl: "card flipped"})
		}
	}

	render() {
		let id_name = this.props.color + "_" + this.props.value
		return(
			<section className="pos_card">
				<div className={this.state.cl} onClick={this.revert}>
					<figure id={id_name} className="front"></figure>
					<figure className="back"></figure>
				</div>
				<div className="display">
					{this.props.children}
				</div>
			</section>
		)
	}
}

export default Card
