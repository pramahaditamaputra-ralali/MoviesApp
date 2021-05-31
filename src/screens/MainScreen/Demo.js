import React from 'react';
import { funcA, funcB, funcC } from './Func';

function Demo() {
    const [data, setData] = React.useState(null)

    const [animal, setAnimal] = React.useState([])
    const [people, setPeople] = React.useState([])

    const [counter, setCounter] = React.useState(0);
    const timerRef = React.useRef();

    /**
     * component did mount
     */
    React.useEffect(() => {
        runTimer()
    },[])

    /**
     * component did update
     */
    React.useEffect(() => {
        if (animal !== null) {
            // do something
        }
    }, [animal])

    React.useEffect(() => {
        if (people) {
            // do something
        }
    }, [people])

    /**
     * component will unmount
     */
    React.useEffect(() => {
        return () => {
            clearTimer();
        }
    }, [])

    function runTimer() {
        timerRef.current = setInterval(() => {
            setCounter(counter + 1);
        }, 30000)
    }

    function clearTimer() {
        clearInterval(timerRef.current)
    }
}

const dataPeople = {
    information: {
        name: 'bobby',
        age: 16
    },
    career: {
        title: 'engineer'
    }
}

const age = {
    a: '1',
    b: '2',
    c: '3'
}

const demoFunction = () => {
    const peopleBlue = { color: 'blue', ...dataPeople }

    const constructPeopleBlue = () => {
        return `${peopleBlue.career.title}`
    }

    const peopleRed = { color: 'red', ...dataPeople}

    const constructPeopleRed = () => {
        return `${peopleRed.career.title}`
    }
}

export default Demo;
