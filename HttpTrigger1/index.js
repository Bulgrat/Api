module.exports = async function (context, req) {

    let num = req.query.num;
    let frase;

    if (num) {
        switch (num) {
            case '1':
                frase = 'A vida é como uma montanha-russa, com altos e baixos';
                break;
            case '2':
                frase = 'Mae muki ni ne. – Mantenha-se positivo.';
                break;
            case '3':
                frase = 'Nada Detem a macha inexorável do tempo';
                break;
            case '4':
                frase = 'Imagine uma nova história para sua vida e acredite nela.';
                break;
            case '5':
                frase = 'Esta é a frase 5.';
                break;
            case '6':
                frase = 'Esta é a frase 6.';
                break;
            default:
                frase = 'Número inválido';
        }

    } else {
        frase = 'Digite um número de 1 a 5 acrescentando ?num=número na URL';
    }

    context.res = {
        body: frase
    };
};