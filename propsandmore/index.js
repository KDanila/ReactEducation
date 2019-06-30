class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Elton"
                    hobbies={['Piano', 'Dancing', 'Scremaing']}
                />
                <Friend
                    name="Susan"
                    hobbies={['Yelling', 'Fucking', 'Crowling','Interrupting']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
