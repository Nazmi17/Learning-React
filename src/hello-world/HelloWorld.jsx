import "../index.css"

function HelloWorldTittle({props = 'Default value'}) {
    // const style = { color: 'red' , backgroundColor: 'black' };
    return (
        <div>
            <h1 className="flex bg-black text-white">{props.toUpperCase()}</h1>
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
            <HelloWorldTittle props="halo"/>
            <HelloWorldParagraph />
        </div>
    )
}

export default HelloWorld;
