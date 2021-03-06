//06-objects/02-assign-properties/script.js - 6.2: assign properties


document.getElementById("run").addEventListener("click", () => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here

    for (let i = 0; i < computers.length; i++) {
        const computer = computers[i];
        if (computer.available == null) {
            computer.available = defaultProps.available;
        } 
        if (computer.user == null) {
            computer.user = defaultProps.user;
        }
        if (computer.os == null) {
            computer.os = defaultProps.os;
        }

        
    }
console.log(computers);
    
})();
