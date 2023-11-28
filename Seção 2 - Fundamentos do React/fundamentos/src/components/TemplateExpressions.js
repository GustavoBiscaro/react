const TemplateExpressions = () => {
    const name = "Gustavo";
    const data = {
        age: 26,
        job: "Support TI",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job }</p>
            <p>{ 4 + 5 }</p>
            <p>{console.log("Hello World")}</p>
        </div>
    );
}

export default TemplateExpressions;