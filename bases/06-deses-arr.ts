const character = ['Guku','Vegeta','Trunks','Goten'];

const [ g, v, t, g2, g3 = 'Tenshinhan'] = character;

const returnArray = () => {
    return [123, 'ABC'] as const;
}

const [ numbers, letters ] = returnArray();

// console.log( numbers * 2, letters.toLowerCase() );