import React from 'react'

function CarCompany(){
  var carCompanies = ["Ford", "Porsche", "Tesla"]
  return(
    carCompanies.map((name, index) => <h3 key={index}>{index + 1}. {name}</h3>)
  )
}

export default CarCompany
