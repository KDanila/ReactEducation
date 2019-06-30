class Machine extends React.Component {
    static defaultProps = {
        name: 'Slot Machine',
    }


    render() {
        const {name, s1, s2, s3} = this.props;
        var x1 = Math.floor(Math.random() * 3);
        var x2 = Math.floor(Math.random() * 3);
        var x3 = Math.floor(Math.random() * 3);
        var displayValues = ['X','Y','Z'];
        var isWin = (x1===x2)&&(x2===x3);
        return (
            <div>
                <h1>Slot Macine</h1>
                <h2>{isWin?"WIN!":"LOOSE!"}</h2>
                <ul>
                    <li>{displayValues[x1]} {displayValues[x2]} {displayValues[x3]}</li>
                </ul>
            </div>
        );
    }
}

