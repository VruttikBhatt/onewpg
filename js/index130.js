let mutants = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Beast',
'Phoenix'];

// console.log(mutants);
// console.log(mutants.sort());
// console.log(mutants.reverse());
// console.log(mutants.join('*'));

const newMutants=[
    ...mutants,
];
console.log(newMutants);
console.log(`mutants: ${mutants}`);
