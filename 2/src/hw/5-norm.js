import React from 'react';
import PropTypes from 'prop-types';
import AppInput from '../app-input';

export default class extends React.Component{
    static defaultProps = {
        onChange: function(cnt){}
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    state = {
        cnt: this.props.cnt
    };

    increase = () => {
        this.set(this.props.cnt + 1);
    }

    decrease = () => {
        this.set(this.props.cnt - 1);
    }

    set(newCnt){
        // let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);

        let cnt = !isNaN(newCnt) ? Math.min(Math.max(newCnt, this.props.min), this.props.max) : this.props.min
        
        this.setState({cnt});

        // как-то сказать родителю, что cnt обновился
        this.props.onChange(cnt);
    }

    setValue(newStr){
        this.setState({cnt: newStr});
    }

    // applyValue = () => {
    //     let cnt = parseInt(this.state.cnt);
    //     this.set(isNaN(cnt) ? this.props.min : cnt);
    // }

    // checkEnterKey = (e) => {
    //     if(e.keyCode === 13){
    //         this.applyValue();
    //     }
    // }

    render(){
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                
                <AppInput value={this.state.cnt}
                            onInput={(e) => this.setValue(e.target.value)}
                            onChange={(e) => this.setValue(e.target.value)}
                            key={this.state.cnt + 1}
                            
                            
                />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }

    // render(){
    //     return (
    //         <div>
    //             <button onClick={this.decrease}>-</button>
    //             <input value={this.state.inputValue} 
    //                    onChange={(e) => this.setValue(e.target.value)} 
    //                    onBlur={this.applyValue}
    //                    onKeyUp={this.checkEnterKey}
    //             />
    //             <button onClick={this.increase}>+</button>
    //         </div>
    //     );
    // }
}

/*
Some.defaultProps = {
    min: 1,
    max: 5
};
*/
