import React from 'react'
import { useState, useEffect } from 'react';
class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }
    state = {
        count: 10
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    // componentDidMount run when program render in the first time
    componentDidMount() {
        // console.log('ssssssssssss')
        console.log('ben ngoai Interval');
        this.timer = setInterval(() => {
            if (this.state.count > 0) {
                console.log('ben trong Interval >0', this.state.count)
                this.setState({
                    count: this.state.count - 1
                });
                clearInterval(this.timer);
            }
            else {
                clearInterval(this.timer);
            }
        }, 1000)
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.count !== this.state.count && this.state.count === 0) {
    //         if (this.timer) {
    //             console.log("time out....")
    //             clearInterval(this.timer)
    //         }
    //     }
    // };

    render() {
        return (
            <div> {this.state.count} class</div>
        )
    }
}
export default Countdown;
const CountDownHooks = () => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        if (count === 0) {
            return;
        }
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [count])
    return (
        <div>{count} hooks</div>
    );
}
export { Countdown, CountDownHooks };

