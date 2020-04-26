import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'
export default class Indecision extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option) }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({ selectedOption: option }))
    }
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }

        } catch (e) {
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    render() {
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle} title={'Indecision'}></Header>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}>
                    </Action>
                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}>
                        </Options>
                        <AddOption
                            handleAddOption={this.handleAddOption}>
                        </AddOption>
                    </div>
                </div>
                <OptionModal
                    clearSelectedOption={this.handleClearSelectedOption}
                    selectedOption={this.state.selectedOption}></OptionModal>
            </div>
        )
    }
}

