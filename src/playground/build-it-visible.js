class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.state={
            visibility: false,
        }
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this)
        this.details='Something to be seen here'
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility:!prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Show Details' : 'Hide details'}</button>
                <p>{this.state.visibility && this.details}</p>
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle></VisibilityToggle>,document.getElementById('app'))

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//             <p>{visibility && details}</p>
//         </div>
//     )
//     const appRoot = document.getElementById('app')
//     ReactDOM.render(template, appRoot)
// }


// let details = 'Hey these are some details you want to see!'
// let visibility = true
// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }
// render()