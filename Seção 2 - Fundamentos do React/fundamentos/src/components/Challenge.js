const Challenge = () => {

    const randomNumber = (num) => {
        num = Math.floor(Math.random() * 10);
        return console.log(num)
};

    const twoFactors = (num1, num2) => {
        num1 = prompt("Digite o primeiro valor")
        num2 = prompt("Digite o segundo valor")
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        let soma = num1 + num2;
        return console.log(soma)
    }

    return (
        <div>
        <button onClick={randomNumber}>Valor Randômico</button>
        <button onClick={twoFactors}>Soma de dois valores</button>
        
        </div>
    );
}

export default Challenge