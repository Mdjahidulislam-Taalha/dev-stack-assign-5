import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import { toast } from "react-toastify";

function TechnologySection() {
    const [technologies, setTechnologies] = useState([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                setTechnologies(data);
                setLoading(false);
            });
    }, []);

    const addToStack = (technology) => {
        const alreadyAdded = selectedTechnologies.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            toast.warning("This technology is already in your stack.");
            return;
        }

        setSelectedTechnologies([
            ...selectedTechnologies,
            technology
        ]);

        toast.success(`${technology.name} added to your stack!`);
    };

    const removeFromStack = (id) => {
        const technology = selectedTechnologies.find(
            (item) => item.id === id
        );

        setSelectedTechnologies(
            selectedTechnologies.filter((item) => item.id !== id)
        );

        toast.info(`${technology.name} removed from your stack!`);
    };

    const removeAll = () => {
        setSelectedTechnologies([]);
        toast.info("All technologies removed from your stack!");
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section className="technology-section">
            <div className="technology-header">
                <h2> Explore the <span className="gradient-text">Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="technology-layout">
                <div className="technology-grid">
                    {technologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            selectedTechnologies={selectedTechnologies}
                            addToStack={addToStack}
                        />
                    ))}
                </div>

                <div className="your-stack">
                    <div className="stack-header">
                        <div>
                            <h3>Your Stack</h3>
                            <p>
                                {selectedTechnologies.length} Technology
                                {selectedTechnologies.length !== 1 ? "s" : ""} Selected
                            </p>
                        </div>

                        {selectedTechnologies.length > 0 && (
                            <button onClick={removeAll}>Remove All</button>
                        )}
                    </div>

                    {selectedTechnologies.length === 0 ? (
                        <p>No technologies selected yet.</p>
                    ) : (
                        <div className="stack-items">
                            {selectedTechnologies.map((technology) => (
                                <div className="stack-item" key={technology.id}>
                                    <img src={technology.icon} alt={technology.name} />

                                    <div>
                                        <h4>{technology.name}</h4>
                                        <p>{technology.category}</p>
                                    </div>

                                    <button onClick={() => removeFromStack(technology.id)}>
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TechnologySection;