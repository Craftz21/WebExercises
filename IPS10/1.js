const patients = [
    { PId: 1, Name: "Alen", Age: 39 },
    { PId: 2, Name: "Deena", Age: 47 },
    { PId: 3, Name: "Diana", Age: 21 },
    { PId: 4, Name: "Jack", Age: 54 },
    { PId: 5, Name: "Jain", Age: 23 },
    { PId: 6, Name: "Kelvin", Age: 61 },
    { PId: 7, Name: "Louis", Age: 69 },
    { PId: 8, Name: "Rex", Age: 49 }
];

function sortByAgeDescending(data) {
    return data.sort((a, b) => b.Age - a.Age);
}

console.log("Sorted by Age (Descending):", sortByAgeDescending([...patients]));

function isPatientPresent(PId) {
    return patients.some(patient => patient.PId === PId);
}

console.log("Is P-Id 4 present?", isPatientPresent(4));
console.log("Is P-Id 10 present?", isPatientPresent(10));

function filterByAgeRange(minAge, maxAge) {
    return patients.filter(patient => patient.Age >= minAge && patient.Age <= maxAge);
}

console.log("Patients aged between 30 and 50:", filterByAgeRange(30, 50));
