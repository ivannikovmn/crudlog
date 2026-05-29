import { useState } from "react";
import axios from "axios";

type Props = {
  onCreated: () => void;
};

export default function CreateWorkLogForm({ onCreated }: Props) {
  const [workType, setWorkType] = useState("");
  const [volume, setVolume] = useState(0);
  const [unit, setUnit] = useState("");
  const [performer, setPerformer] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/work-log", {
      workType,
      volume,
      unit,
      performer,
    });

    setWorkType("");
    setVolume(0);
    setUnit("");
    setPerformer("");

    onCreated(); // обновить таблицу
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Work Log</h2>

      <input
        placeholder="Work type"
        value={workType}
        onChange={(e) => setWorkType(e.target.value)}
      />

      <input
        placeholder="Volume"
        type="number"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
      />

      <input
        placeholder="Unit"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      />

      <input
        placeholder="Performer"
        value={performer}
        onChange={(e) => setPerformer(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}