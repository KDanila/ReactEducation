class Friend extends React.Component {
	static defaultProps ={
		name : 'Unknown',
		hobbies : ['Unkonwn']
	}
	render() {
		const {name, hobbies} = this.props;
		return (
			<div>
				<h1>{name}</h1>
				<ul>
					<li>{hobbies.map(x=><li>{x}</li>)}</li>
				</ul>
			</div>
		);
	}
}

