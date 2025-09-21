type GreetingProps = {
    name: string;
    message?: string;
}

function Greeting({name, message='Hey bro this is the message'}: GreetingProps) {
    return (
        <div>
            <h2>Hello {name}, welcome to React component! 🎉</h2>
            <h2>{message}</h2>
        </div>
    )
}

export default Greeting;
