/** @jsx React.DOM */

var filters = [
	{id: 1, name: 'Foo', active: true},
	{id: 2, name: 'Bar', active: false},
	{id: 3, name: 'Baz', active: true},
	{id: 4, name: 'Qux', active: false},
];

var FilterList = React.createClass({displayName: 'FilterList',
	render: function() {
		return (
			<div class="filterBtns">
				{filters.map(function(filter) {
					return <FilterBtn id={filter['id']} name={filter['name']} active={filter['active']} />
				})}
			</div>
		);
	}
});

var FilterBtn = React.createClass({
	getInitialState: function() {
		return {active: this.props.active};
	},
	handleClick: function(e) {
		this.setState({active: !this.state.active})
	},
	render: function() {
		var className = "btn btn-" + (this.state.active ? 'success' : 'default');
		return (
			<button 
				id={this.props.id} 
				className={className}
				onClick={this.handleClick}>
					{this.props.name}
			</button>
		);
	}
});

React.renderComponent(
	FilterList(null), 
	document.getElementById('filterList'));