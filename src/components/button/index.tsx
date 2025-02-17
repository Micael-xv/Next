'use client'

import { useState } from "react"

export function Button() {
  const [nome, setNome] = useState("Micael") 

  function alerarNome() {
    setNome("Micael Trevisan")
  };

  return (
    <div>
      <button onClick={alerarNome}>Alterar nome</button><br />
      <h3>Nome: {nome}</h3>
    </div>
  )
}