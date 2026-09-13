function TechnologyCard({
  technology,
  selectedTechnologies,
  addToStack
}) {
  const isAdded = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  return (
    <div className="technology-card">
      <img src={technology.icon} alt={technology.name} />

      <span>{technology.badge}</span>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <div>
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span>★ {technology.rating}</span>
      </div>

      <button
        onClick={() => addToStack(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;