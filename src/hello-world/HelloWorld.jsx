import "../index.css"

function HelloWorldTittle({props = 'Default value'}) {
    // const style = { color: 'red' , backgroundColor: 'black' };
    return (
        <div>
            <h1 className="flex font-black">{props.toUpperCase()}</h1>
        </div>
    )
}

function HelloWorldParagraph() {
    const paragraph = "Ini adalah paragraf";
    return (
        <div>
            <HelloWorldTittle props={paragraph} />
        </div>
    )
}

function HelloWorld() {
    return (
        <div>
            <HelloWorldTittle />
            <HelloWorldParagraph />
        </div>
    )
}

export default HelloWorld;
