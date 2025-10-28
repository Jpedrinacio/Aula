import { useState } from "react";
import "./style.css";

function CadastroProduto() {
  const [form, setForm] = useState({
    categoria: "tenis",
    nome: "",
    tamanho: "",
    cor: "",
    quantidade: "",
    marca: "",
  });

  const categorias = ["tenis", "moletons", "chinelos", "panelas"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produto cadastrado:", form);
    alert("Produto cadastrado com sucesso!");
    setForm({
      categoria: "tenis",
      nome: "",
      tamanho: "",
      cor: "",
      quantidade: "",
      marca: "",
    });
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Produto</h2>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <label>Categoria:</label>
        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          required
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <label>Nome do Produto:</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <label>Tamanho:</label>
        <input
          type="text"
          name="tamanho"
          value={form.tamanho}
          onChange={handleChange}
          placeholder="Ex: 42, M, G, etc."
          required
        />

        <label>Cor:</label>
        <input
          type="text"
          name="cor"
          value={form.cor}
          onChange={handleChange}
          required
        />

        <label>Quantidade em Estoque:</label>
        <input
          type="number"
          name="quantidade"
          min="0"
          value={form.quantidade}
          onChange={handleChange}
          required
        />

        <label>Marca:</label>
        <input
          type="text"
          name="marca"
          value={form.marca}
          onChange={handleChange}
          required
        />

        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default CadastroProduto;
