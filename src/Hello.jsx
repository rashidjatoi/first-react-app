function Hello() {

    let name = 'rashidd';
    let fullName = () => {
        return "rashid ali jatoi";
    }
    return <div>
        <h2>My name is {name} & {fullName} </h2>
    </div>

}

export default Hello;